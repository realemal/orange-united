import type { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const serviceKey = process.env.SUPABASE_SERVICE_ROLE!

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const url = new URL(event.rawUrl)
  const form = url.searchParams.get('form')

  const supabase = createClient(supabaseUrl, serviceKey)

  let query = supabase
    .from('submissions')
    .select('created_at,form,name,email,message,tags')
    .order('created_at', { ascending: false })

  if (form) query = query.eq('form', form)

  const { data, error } = await query
  if (error) {
    return { 
      statusCode: 500, 
      body: error.message 
    }
  }

  const rows = data || []
  const header = ['created_at', 'form', 'name', 'email', 'message', 'tags']
  
  const csv = [
    header.join(','),
    ...rows.map(r => header.map(h => {
      const v = Array.isArray(r[h as keyof typeof r]) 
        ? (r[h as keyof typeof r] as any[]).join('|') 
        : (r[h as keyof typeof r] ?? '')
      // Naive CSV escape
      const s = String(v).replace(/"/g, '""')
      return `"${s}"`
    }).join(','))
  ].join('\n')

  const filename = form ? `submissions-${form}.csv` : 'submissions-all.csv'
  const timestamp = new Date().toISOString().split('T')[0]

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/csv',
      'content-disposition': `attachment; filename="${timestamp}-${filename}"`
    },
    body: csv
  }
}

