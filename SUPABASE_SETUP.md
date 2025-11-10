# 🗄️ Supabase Setup - Quick Guide

## Step 1: Run SQL in Supabase (2 minutes)

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/xoptayfppsyfblbvbvoc
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste this SQL:

```sql
create extension if not exists pgcrypto;

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

create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  actor text,
  action text,
  target text,
  meta jsonb
);

alter table public.submissions disable row level security;
alter table public.audit_log disable row level security;

create index if not exists submissions_created_at_idx on public.submissions(created_at desc);
create index if not exists submissions_form_idx on public.submissions(form);
create index if not exists submissions_email_idx on public.submissions(email);
create index if not exists audit_log_created_at_idx on public.audit_log(created_at desc);

grant usage on schema public to anon, authenticated;
grant all on public.submissions to service_role;
grant all on public.audit_log to service_role;
```

5. Click **Run** (or press Ctrl/Cmd + Enter)
6. Verify: Go to **Table Editor** → you should see `submissions` and `audit_log` tables

✅ **Done!** Your database is ready.

---

## Step 2: Set Environment Variables in Netlify (3 minutes)

1. Go to: https://app.netlify.com/sites/orangeunited/settings/env
2. Click **Add a variable** and add these one by one:

| Variable Name | Value |
|---------------|-------|
| `PLAUSIBLE_DOMAIN` | `orangeunited.org` |
| `SUPABASE_URL` | `https://xoptayfppsyfblbvbvoc.supabase.co` |
| `SUPABASE_SERVICE_ROLE` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcHRheWZwcHN5ZmJsYnZidm9jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mjc4Njc0MywiZXhwIjoyMDc4MzYyNzQzfQ.spSdzYxYZV7-fADrW7oANSSEzcz0dH5lOxg21A8l5Xc` |
| `SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcHRheWZwcHN5ZmJsYnZidm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3ODY3NDMsImV4cCI6MjA3ODM2Mjc0M30.V-aNNabmBFctb7ijVbEoxJ1XijVLkNTBAXMu566zqao` |

3. Click **Save**

✅ **Done!** Environment variables are set.

---

## Step 3: Connect Netlify Forms to Function (2 minutes)

1. Go to: https://app.netlify.com/sites/orangeunited/forms
2. Click **Form notifications** or **Settings and usage**
3. Scroll to **Outgoing notifications**
4. Click **Add notification** → **Function**
5. Select `form-submission` from the dropdown
6. Click **Save**

✅ **Done!** Forms will now be stored in Supabase AND forwarded to your email.

---

## Step 4: Trigger a Deploy (1 minute)

1. Go to: https://app.netlify.com/sites/orangeunited/deploys
2. Click **Trigger deploy** → **Deploy site**
3. Wait for build to complete (~2 minutes)

✅ **All set!** Your architecture is fully operational.

---

## 🎉 You're Done!

All form submissions will now:
- ✅ Be stored in Supabase `submissions` table (queryable, exportable)
- ✅ Forward to `info@orangeunited.org` (as before)

View your submissions anytime at:
https://supabase.com/dashboard/project/xoptayfppsyfblbvbvoc/editor

---

## Test It

1. Go to your site: https://orangeunited.org/contact
2. Submit the contact form
3. Check Supabase → Table Editor → `submissions` table
4. Check your email for the forwarded message

Both should work! 🎊

