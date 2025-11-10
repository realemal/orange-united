# 🚀 Orange United - Quick Setup (3 Steps)

Everything is ready! Just follow these 3 simple steps:

---

## ⚡ Option 1: Run the Automated Setup Script

```bash
./SETUP_COMPLETE.sh
```

This script will:
- Open all the right URLs for you
- Show you exactly what to copy/paste
- Guide you through each step

---

## 📋 Option 2: Manual Setup (if you prefer)

### Step 1: Supabase SQL (2 minutes)

1. **Open:** https://supabase.com/dashboard/project/xoptayfppsyfblbvbvoc/sql/new
2. **Copy** all SQL from `scripts/setup-supabase.sql`
3. **Paste** into Supabase SQL Editor
4. **Click** "Run" (or press Cmd+Enter)

✅ Done! Tables created.

---

### Step 2: Netlify Environment Variables (3 minutes)

1. **Open:** https://app.netlify.com/sites/orangeunited/settings/env
2. **Click** "Add a variable" and add these **4 variables**:

| Name | Value |
|------|-------|
| `PLAUSIBLE_DOMAIN` | `orangeunited.org` |
| `SUPABASE_URL` | `https://xoptayfppsyfblbvbvoc.supabase.co` |
| `SUPABASE_SERVICE_ROLE` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcHRheWZwcHN5ZmJsYnZidm9jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mjc4Njc0MywiZXhwIjoyMDc4MzYyNzQzfQ.spSdzYxYZV7-fADrW7oANSSEzcz0dH5lOxg21A8l5Xc` |
| `SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcHRheWZwcHN5ZmJsYnZidm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3ODY3NDMsImV4cCI6MjA3ODM2Mjc0M30.V-aNNabmBFctb7ijVbEoxJ1XijVLkNTBAXMu566zqao` |

3. **Click** "Save" after adding all 4

✅ Done! Variables set.

---

### Step 3: Connect Form Notification (2 minutes)

1. **Open:** https://app.netlify.com/sites/orangeunited/forms
2. **Click** "Form notifications" or "Settings and usage"
3. **Scroll** to "Outgoing notifications"
4. **Click** "Add notification" → "Function"
5. **Select** `form-submission` from dropdown
6. **Click** "Save"

✅ Done! Forms connected.

---

### Step 4: Deploy (Automatic)

1. **Open:** https://app.netlify.com/sites/orangeunited/deploys
2. **Click** "Trigger deploy" → "Deploy site"
3. **Wait** ~2 minutes for build to complete

✅ Done! Everything is live.

---

## 🎉 That's It!

Your site now has:

- ✅ **Search Index** - 23 articles + 7 board members indexed
- ✅ **Vote Tracker** - Track board meetings and votes
- ✅ **Form Storage** - All submissions saved to Supabase
- ✅ **Admin Dashboard** - Everything in one place

**Access your dashboard:**
- Local: http://localhost:4321/admin-dashboard
- Live: https://orangeunited.org/admin-dashboard

---

## 🧪 Test It

1. Go to https://orangeunited.org/contact
2. Submit the form
3. Check Supabase → Table Editor → `submissions`
4. Check your email

Both should work! 🎊

---

**Need help?** See `ARCHITECTURE_SETUP.md` for detailed troubleshooting.

