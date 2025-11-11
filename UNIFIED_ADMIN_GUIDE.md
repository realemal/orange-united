# 🎛️ Unified Admin Panel Guide

**Everything in One Place - Your `/admin` Panel**

---

## 🎉 What's New

All your admin tools are now **unified** in the `/admin` panel you log into!

**No more separate dashboards** - everything is accessible from the CMS interface.

---

## 🔐 Access

**URL:** https://orangeunited.org/admin

**Login:** Google OAuth (ethanmalausa@gmail.com)

---

## 📊 What's in Your Admin Panel

When you log in to `/admin`, you'll see these collections in the left sidebar:

### **1. 📊 Dashboard** ← NEW!
**What it is:** Email submissions viewer & stats

**What you can do:**
- ✅ View all email signups (newsletter, contact, volunteer)
- ✅ See total submission counts by type
- ✅ Export all emails to CSV (one-click button)
- ✅ Auto-refreshes every 30 seconds
- ✅ Quick action buttons (New Article, New Event)

**How to access:**
1. Log in to `/admin`
2. Click **"📊 Dashboard"** in the left sidebar
3. Click **"Email Submissions & Stats"**
4. See all your emails!

---

### **2. Articles**
- Write and publish blog posts
- Edit existing articles
- Spanish translations
- Categories, tags, featured images

---

### **3. Events**
- Add upcoming events
- Edit board meeting info
- Set RSVP links

---

### **4. Pages**
- Edit About, Get Involved pages
- Markdown editor

---

### **5. Site Settings**
- Social media links
- Newsletter provider
- Tagline and branding

---

### **6. Board Members** ← NEW!
- Edit trustee names, titles, areas
- Upload photos
- Write bios
- No code required!

---

### **7. Homepage Settings** ← NEW!
- **Hero Section:** Change headline, subheadline, CTA text, colors
- **Priority Tiles:** Edit the 3 homepage tiles (Transparency, Safety, Fiscal)

---

### **8. Navigation Menu** ← NEW!
- Edit menu labels
- Change URLs
- Reorder items

---

### **9. Vote Tracker**
- Board Meetings
- Agenda Items
- Individual Votes

---

## ✨ Email Submissions Viewer Features

**In the Dashboard section:**

### **Stats Cards:**
- **Total Submissions** - All form submissions combined
- **Newsletter Signups** - Email addresses from newsletter forms
- **Contact Messages** - Messages from contact form
- **Volunteer Requests** - People who want to get involved

### **Submissions List:**
- **Color-coded** by form type (blue=newsletter, green=contact, purple=volunteer)
- **Shows:** Name, email, message, timestamp
- **Clickable emails** - Click to send a reply
- **Auto-refresh** - Updates every 30 seconds automatically

### **Quick Actions:**
- **✏️ New Article** - Opens article creation
- **📅 New Event** - Opens event creation
- **📥 Export All Emails (CSV)** - Downloads full email list

### **Export Features:**
- One-click CSV download
- All submissions or filtered by type
- Timestamped filenames
- Open in Excel/Google Sheets

---

## 🧪 How to Test

### **Step 1: Enable RLS (Security - 1 minute)**

**This is important for security!**

1. Go to: https://supabase.com/dashboard/project/xoptayfppsyfblbvbvoc/sql/new
2. Copy all SQL from: `scripts/enable-rls-supabase.sql`
3. Paste and click "Run"
4. This locks down your database! ✅

### **Step 2: Wait for Deploy (2 minutes)**

The latest changes are deploying to Netlify now.

Check: https://app.netlify.com/sites/orange-united/deploys

Wait for it to show **"Published"** in green.

### **Step 3: Log In and View Dashboard**

1. Go to: https://orangeunited.org/admin
2. Log in with Google
3. Click **"📊 Dashboard"** in the left sidebar
4. Click **"Email Submissions & Stats"**
5. You'll see the email viewer!

### **Step 4: Test Form Submission**

1. Open a new tab: https://orangeunited.org/contact
2. Fill out the contact form and submit
3. Go back to your Dashboard in the CMS
4. Click **"🔄 Refresh"** button
5. Your submission should appear!

### **Step 5: Export to CSV**

1. In the Dashboard, click **"📥 Export All Emails (CSV)"**
2. CSV file downloads
3. Open in Excel/Google Sheets
4. All your email signups are there!

---

## 🎯 Benefits of Unified Admin

**Everything in One Place:**
- ✅ Write articles
- ✅ View email signups
- ✅ Export newsletter list
- ✅ Manage events
- ✅ Edit board members
- ✅ Customize homepage
- ✅ Track votes
- ✅ See statistics

**Single Login:**
- One URL: `/admin`
- One login (Google OAuth)
- Everything accessible from sidebar

**Secure:**
- Server-side database access only
- RLS protection (when enabled)
- No exposed API keys
- Rate-limited endpoints

---

## 📋 Final Setup Checklist

- [x] CMS login working (Google OAuth)
- [x] Git Gateway enabled
- [x] Dashboard added to CMS
- [x] Email viewer integrated
- [x] CSV export ready
- [x] Stats dashboard built
- [ ] **RLS enabled in Supabase** ← Run the SQL!
- [ ] Test form submission
- [ ] Verify emails appear in dashboard
- [ ] Test CSV export

**You're 2 steps away from 100% complete!**

---

## 🚀 What's Deploying Now

**Current Deploy:**
- Unified admin panel
- Email viewer in CMS
- Stats dashboard
- CSV export
- All security improvements
- 3 anchor articles
- New homepage

**Once it's live (2 minutes):**

Log in to `/admin` → Click "📊 Dashboard" → See everything!

---

🍊 **Your entire Orange United operation is now manageable from one secure admin panel!**

