-- Re-enable Row Level Security on submissions table
-- Run this in Supabase SQL Editor after the initial setup

-- Enable RLS on submissions table
alter table public.submissions enable row level security;

-- Policy: Only service_role can insert (from Netlify Function)
create policy "Service role can insert submissions"
  on public.submissions
  for insert
  to service_role
  with check (true);

-- Policy: Only service_role can read (from admin endpoints)
create policy "Service role can read submissions"
  on public.submissions
  for select
  to service_role
  using (true);

-- Policy: No public access (anon role has no access)
-- This is the default when RLS is enabled with no anon policies

-- Enable RLS on audit_log as well
alter table public.audit_log enable row level security;

-- Policy: Only service_role can access audit_log
create policy "Service role can manage audit_log"
  on public.audit_log
  for all
  to service_role
  using (true)
  with check (true);

-- Verify RLS is enabled
-- You should see "RLS enabled" next to both tables in Table Editor

