# 🏗️ Orange United Architecture Setup Guide

This guide walks you through setting up the complete Orange United architecture including Supabase form storage, search indexing, and vote tracking.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ Node.js 20 or higher installed
- ✅ A Netlify account and site deployed
- ✅ A Supabase account and project created
- ✅ Access to the GitHub repository

---

## 1️⃣ Environment Variables Setup

### Local Development

Create a `.env` file in the project root:

```bash
# Analytics
PLAUSIBLE_DOMAIN=orangeunited.org

# Supabase (for form storage)
SUPABASE_URL=https://xoptayfppsyfblbvbvoc.supabase.co
SUPABASE_SERVICE_ROLE=your-service-role-key-here
SUPABASE_ANON_KEY=your-anon-key-here
```

**Security Note:** Never commit the `.env` file to git. It's already in `.gitignore`.

### Production (Netlify)

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variables:

| Variable | Value |
|----------|-------|
| `PLAUSIBLE_DOMAIN` | `orangeunited.org` |
| `SUPABASE_URL` | `https://xoptayfppsyfblbvbvoc.supabase.co` |
| `SUPABASE_SERVICE_ROLE` | (Your service role key) |
| `SUPABASE_ANON_KEY` | (Your anon key) |

**Important:** After adding environment variables, trigger a new deploy for them to take effect.

---

## 2️⃣ Supabase Database Setup

### Run the SQL Schema

1. Open your Supabase project dashboard
2. Navigate to **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy the contents of `scripts/setup-supabase.sql`
5. Paste into the query editor
6. Click **Run** (or press `Ctrl/Cmd + Enter`)

This creates two tables:
- `submissions` - Stores all form submissions from Netlify Forms
- `audit_log` - Tracks actions and rate limiting

### Verify Tables

1. Navigate to **Table Editor** (left sidebar)
2. You should see `submissions` and `audit_log` tables
3. Both tables should have RLS (Row Level Security) disabled

---

## 3️⃣ Netlify Function Setup

The Netlify Function (`netlify/functions/form-submission.ts`) captures form submissions and stores them in Supabase while still forwarding to your email.

### Enable Form Notifications

1. Go to Netlify dashboard → **Forms** (in the top navigation)
2. Click **Form notifications** or **Settings and usage**
3. Scroll to **Outgoing notifications**
4. Click **Add notification** → **Function**
5. Select `form-submission` from the dropdown
6. Click **Save**

Now all form submissions will:
- ✅ Be stored in Supabase `submissions` table
- ✅ Continue forwarding to `info@orangeunited.org`

### Test Form Submission

1. Deploy your site with the new function
2. Submit a test form on your website
3. Check Supabase → **Table Editor** → `submissions` to see the entry
4. Check your email to confirm forwarding still works

---

## 4️⃣ Search Index Setup

The search index is built automatically during the build process.

### How It Works

1. `scripts/build-search-index.ts` runs during `npm run build`
2. It reads all articles from `src/content/articles/`
3. It reads board member data from `src/data/board-members.json`
4. It generates `src/data/search/index.json` with searchable content

### Build Locally

```bash
npm run build:search
```

This generates the search index in `src/data/search/index.json`.

### Verify Search Index

After building, check that `src/data/search/index.json` exists and contains:
- `articles` array with article metadata
- `boardMembers` array with trustee info
- `generated` timestamp

**Note:** The search index is generated at build time and committed to git for deterministic builds.

---

## 5️⃣ Vote Tracker CMS Setup

The vote tracker allows editors to track OUSD board votes through the Decap CMS admin panel.

### Access the Vote Tracker

1. Navigate to `yoursite.netlify.app/admin`
2. Log in with your Netlify Identity credentials
3. You'll see three new collections in the sidebar:
   - **Board Meetings** - Meeting metadata
   - **Agenda Items** - Items voted on
   - **Individual Votes** - How each trustee voted

### Creating a Vote Record Workflow

1. **Create a Meeting**
   - Go to **Board Meetings** → **New Board Meeting**
   - Set ID as `YYYY-MM-DD` (e.g., `2025-11-10`)
   - Add date, location, agenda URL, minutes URL
   - Click **Publish**

2. **Create Agenda Items**
   - Go to **Agenda Items** → **New Agenda Item**
   - Link to the meeting using **Meeting ID** dropdown
   - Add title, description, category
   - Click **Publish**

3. **Record Individual Votes**
   - Go to **Individual Votes** → **New Individual Vote**
   - Link to the agenda item using **Item ID** dropdown
   - Select the trustee from **Member** dropdown
   - Select vote: `Y` (Yes), `N` (No), `A` (Abstain), or `P` (Absent)
   - Add optional notes
   - Click **Publish**

### Vote Tracker Data Structure

All vote data is stored as JSON files in:
- `src/data/votes/meetings/*.json`
- `src/data/votes/items/*.json`
- `src/data/votes/votes/*.json`

The `VoteTable.astro` component can read and display this data.

---

## 6️⃣ Install Dependencies

After cloning or pulling the latest changes, install new dependencies:

```bash
npm install
```

This installs:
- `@supabase/supabase-js` - Supabase client
- `@netlify/functions` - Netlify Function types
- `gray-matter` - Markdown frontmatter parser
- `tsx` - TypeScript executor for scripts

---

## 7️⃣ Build and Deploy

### Build Locally

```bash
npm run build
```

This will:
1. Generate ICS calendar file (`build:ics`)
2. Build search index (`build:search`)
3. Run Astro type checking (`astro check`)
4. Build the static site (`astro build`)

### Deploy to Netlify

```bash
git add .
git commit -m "✨ Architecture improvements: Supabase, search, vote tracker"
git push
```

Netlify will automatically build and deploy your site.

---

## 8️⃣ Verification Checklist

After setup, verify everything works:

- [ ] Environment variables set in Netlify
- [ ] Supabase tables created (`submissions`, `audit_log`)
- [ ] Netlify Function connected to forms
- [ ] Test form submission → check Supabase table
- [ ] Test form submission → check email forwarding
- [ ] Search index generated during build
- [ ] Vote tracker collections visible in `/admin`
- [ ] Site builds and deploys successfully

---

## 🔍 Troubleshooting

### Form submissions not appearing in Supabase

1. Check Netlify function logs: **Functions** → `form-submission` → **Function log**
2. Verify environment variables are set correctly
3. Check Supabase service role key has correct permissions
4. Verify SQL schema was run successfully

### Search index not generating

1. Run `npm run build:search` manually
2. Check for errors in the console
3. Verify `src/content/articles/` has markdown files
4. Verify `src/data/board-members.json` exists

### Vote tracker not showing in CMS

1. Clear browser cache and reload `/admin`
2. Verify `public/admin/config.yml` has the new collections
3. Check that folders exist: `src/data/votes/meetings/`, `items/`, `votes/`
4. Redeploy the site

### Build failing after changes

1. Run `npm install` to ensure all dependencies are installed
2. Run `npm run build` locally to see detailed errors
3. Check TypeScript errors with `npm run astro check`
4. Verify all file paths are correct

---

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Astro Documentation](https://docs.astro.build/)

---

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review the Netlify build logs
3. Check Netlify function logs
4. Review Supabase logs
5. Open an issue on GitHub with:
   - Error message
   - Steps to reproduce
   - Screenshots (if applicable)

---

**🎉 Setup Complete!**

Your Orange United architecture is now fully configured with:
- ✅ Form storage in Supabase
- ✅ Client-side search indexing
- ✅ Vote tracking CMS
- ✅ Environment variable management
- ✅ Automated build pipeline

You're ready to track board meetings, engage with parents, and make Orange schools more transparent! 🍊

