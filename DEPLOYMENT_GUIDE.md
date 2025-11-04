# 🚀 Orange United Deployment Guide

## 📋 Branch Structure

Your repository now has **3 branches**:

### **1. `landing` Branch** 🚧
**Purpose:** Coming Soon page for public  
**Deploy this to:** orangeunited.org (your main domain)

**Contains:**
- Simple coming soon page
- Newsletter signup form
- Logo and branding
- Social media links
- Email collection working

**Use this for:**
- ✅ Collecting emails before launch
- ✅ Setting up domain
- ✅ Public-facing site while you finish content

---

### **2. `preview` Branch** 👀
**Purpose:** Full website for editing and testing  
**Deploy this to:** preview.netlify.app (or custom subdomain)

**Contains:**
- Complete Orange United website
- All pages, components, CMS
- School board section
- Articles (coming soon)
- Events calendar
- Everything!

**Use this for:**
- ✅ Editing content via `/admin`
- ✅ Testing features
- ✅ Previewing before going live
- ✅ Team can see progress

---

### **3. `main` Branch** 🏠
**Purpose:** Production-ready full site  
**Status:** Ready but not deployed

**Contains:**
- Same as preview
- Your "official" full site code
- Deploy this when ready to go public

---

## 🌐 Netlify Deployment Setup

### **Step 1: Deploy Landing Page (Public)**

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select `realemal/orange-united`
4. **IMPORTANT:** Under "Branch to deploy" select **`landing`**
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
6. Click **Deploy**

7. **Connect your domain:**
   - Site Settings → Domain Management
   - Add custom domain: `orangeunited.org`
   - Follow DNS instructions for GoDaddy

**Result:** orangeunited.org shows coming soon page + collects emails ✅

---

### **Step 2: Deploy Preview Site (Private/Team Only)**

1. Back in Netlify, click **"Add new site"** again
2. Import `realemal/orange-united` again
3. **Branch to deploy:** **`preview`**
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy**

6. **Set password protection:**
   - Site Settings → Access Control → Visitor Access
   - Enable **Password Protection**
   - Set password (share with team only)

7. **Enable CMS:**
   - Settings → Identity → Enable Identity
   - Enable Git Gateway
   - Invite yourself via email

8. **Access:**
   - Site: `yoursite.netlify.app` (password protected)
   - CMS: `yoursite.netlify.app/admin`

**Result:** Full site accessible only to team with password ✅

---

## 🔄 Workflow

### **While Building (Now - Launch Day):**

**Public sees:**
- `orangeunited.org` → Coming soon page (landing branch)
- Newsletter signup working

**You and team see:**
- `preview.yoursite.netlify.app` → Full site (password protected)
- Add content via `/admin`
- Test everything

### **Launch Day:**

**Option A: Switch Branches**
1. In Netlify, go to main site (orangeunited.org)
2. Site Settings → Build & Deploy → Deploy Contexts
3. Change Production Branch from `landing` to `main`
4. Site rebuilds with full content
5. **LIVE!** 🎉

**Option B: Update Landing Branch**
1. Merge `main` into `landing`
2. Automatically deploys
3. **LIVE!** 🎉

---

## 📧 Email Collection

**Netlify Forms** work on both:
- ✅ Landing page: `coming-soon` form
- ✅ Full site: `newsletter`, `contact`, `volunteer`, `donate-interest` forms

**View submissions:**
- Netlify Dashboard → Forms tab
- Download as CSV anytime

---

## 🎯 Quick Commands

```bash
# Work on preview branch (full site)
git checkout preview
# Make changes
git add -A
git commit -m "Update content"
git push

# Update landing page
git checkout landing
# Edit landing-page-only.html
git add -A
git commit -m "Update coming soon"
git push

# Back to main
git checkout main
```

---

## ✅ Checklist

### Landing Page Deployment:
- [ ] Deploy `landing` branch to Netlify
- [ ] Connect orangeunited.org domain
- [ ] Test newsletter signup
- [ ] Share with team

### Preview Site Deployment:
- [ ] Deploy `preview` branch to Netlify
- [ ] Set password protection
- [ ] Enable Netlify Identity for CMS
- [ ] Test `/admin` access
- [ ] Add content

### When Ready to Launch:
- [ ] Merge final changes to `main`
- [ ] Switch production from `landing` to `main`
- [ ] Remove password (if using preview)
- [ ] Announce launch! 🎉

---

## 💡 Pro Tips

**Domain Setup:**
- Only connect orangeunited.org to ONE site (the landing page)
- Preview site uses free netlify.app subdomain

**Testing:**
- Use preview site to test all features
- Show stakeholders before launch
- Perfect everything before going public

**Email List:**
- Collect emails on landing page NOW
- When you launch, you have an audience ready!
- Export from Netlify → Import to Mailchimp

---

**Ready to deploy?** Follow Step 1 to get your coming soon page live! 🍊

