import type { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE!
const supabase = createClient(supabaseUrl, supabaseKey)

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' }
    }

    const payload = JSON.parse(event.body || '{}')
    // Netlify form notifications often wrap submission in { payload: {...} }
    const data = payload?.payload ?? payload

    const form = data?.form_name || 'unknown'
    const name = data?.data?.name ?? data?.name ?? null
    const email = data?.data?.email ?? data?.email ?? null
    const message = data?.data?.message ?? data?.message ?? null
    const tags = Array.isArray(data?.data?.tags) ? data.data.tags : []

    const userAgent = event.headers['user-agent'] || null
    const ip = (event.headers['x-nf-client-connection-ip'] || event.headers['x-forwarded-for'] || null) as any

    const { error } = await supabase
      .from('submissions')
      .insert({ form, name, email, message, tags, user_agent: userAgent, ip, raw: data })

    if (error) {
      console.error('Supabase insert error', error)
      return { statusCode: 500, body: 'Failed to store submission' }
    }

    // Netlify will still forward the email as configured; nothing else to do
    return { statusCode: 200, body: 'Stored' }
  } catch (e) {
    console.error('Handler error', e)
    return { statusCode: 500, body: 'Internal Error' }
  }
}

