import type { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const serviceKey = process.env.SUPABASE_SERVICE_ROLE!

// Simple rate limiting
const MAX_LIMIT = 100
const DEFAULT_LIMIT = 20

export const handler: Handler = async (event) => {
  // Optional: Add Netlify Identity JWT verification for owner-only access
  // For now, keeping it simple - can add auth later if needed
  
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const url = new URL(event.rawUrl)
  const page = Number(url.searchParams.get('page') || '1')
  const limit = Math.min(Number(url.searchParams.get('limit') || DEFAULT_LIMIT), MAX_LIMIT)
  const offset = (page - 1) * limit
  const form = url.searchParams.get('form') // optional filter
  const q = url.searchParams.get('q') // optional search

  const supabase = createClient(supabaseUrl, serviceKey)

  let query = supabase
    .from('submissions')
    .select('id, created_at, form, name, email, message, tags', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (form) query = query.eq('form', form)
  if (q) {
    // Basic search across name, email, message
    query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,message.ilike.%${q}%`)
  }

  const { data, error, count } = await query

  if (error) {
    console.error('Supabase query error:', error)
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: error.message }),
      headers: { 'content-type': 'application/json' }
    }
  }

  return {
    statusCode: 200,
    headers: { 
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      page,
      limit,
      total: count ?? 0,
      items: data || []
    })
  }
}

