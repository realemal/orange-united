-- Orange United Supabase Schema
-- Run this in your Supabase SQL Editor to set up form submission storage

create extension if not exists pgcrypto; -- for gen_random_uuid()

-- Submissions table: stores all form submissions from Netlify Forms
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form text not null,
  name text,
  email text,
  message text,
  tags text[] default '{}',
  user_agent text,
  ip inet,
  raw jsonb
);

-- Audit log table: tracks actions and rate limiting
create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  actor text,
  action text,
  target text,
  meta jsonb
);

-- RLS is disabled because inserts are only via serverless with service role
alter table public.submissions disable row level security;
alter table public.audit_log disable row level security;

-- Create indexes for common queries
create index if not exists submissions_created_at_idx on public.submissions(created_at desc);
create index if not exists submissions_form_idx on public.submissions(form);
create index if not exists submissions_email_idx on public.submissions(email);
create index if not exists audit_log_created_at_idx on public.audit_log(created_at desc);

-- Grant permissions
grant usage on schema public to anon, authenticated;
grant all on public.submissions to service_role;
grant all on public.audit_log to service_role;

