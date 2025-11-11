import type { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!, 
  process.env.SUPABASE_SERVICE_ROLE!
)

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let payload: any
  try {
    // Try JSON first (Netlify form webhook)
    payload = JSON.parse(event.body || '{}')
  } catch {
    // Fallback to form-encoded (sometimes Netlify sends this)
    const params = new URLSearchParams(event.body || '')
    payload = Object.fromEntries(params.entries())
  }

  // Extract form data (handle both wrapped and direct formats)
  const data = payload?.payload ?? payload
  
  const form = data.form_name || data.form || 'unknown'
  const name = data.data?.name || data.name || ''
  const email = data.data?.email || data.email || data._replyto || ''
  const message = data.data?.message || data.message || data.body || ''
  const subject = data.data?.subject || data.subject || ''
  const tags = (data.data?.tags && Array.isArray(data.data.tags)) 
    ? data.data.tags 
    : (data.tags && Array.isArray(data.tags)) 
      ? data.tags 
      : []

  const userAgent = event.headers['user-agent'] || ''
  const ip = event.headers['x-nf-client-connection-ip'] || event.headers['x-forwarded-for'] || ''

  // Insert into Supabase
  const { error } = await supabase.from('submissions').insert({
    form,
    name,
    email,
    message: subject ? `${subject}\n\n${message}` : message,
    tags,
    user_agent: userAgent,
    ip,
    raw: data
  })

  if (error) {
    console.error('Supabase insert error:', error)
    return { 
      statusCode: 500, 
      body: JSON.stringify({ ok: false, error: error.message }),
      headers: { 'content-type': 'application/json' }
    }
  }

  // Netlify will still forward the email as configured
  return { 
    statusCode: 200, 
    body: JSON.stringify({ ok: true }),
    headers: { 'content-type': 'application/json' }
  }
}


