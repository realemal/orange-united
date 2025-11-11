# 🍊 Orange United

**Protecting Parent Choice**

A modern, accessible civic website for Orange United, a 501(c)(4) social welfare organization providing transparent information about Orange Unified School District.

**Live Site:** https://orangeunited.org

---

## 🚀 Quick Links

- **📊 [Progress Report](PROGRESS_REPORT.md)** - Full status, features, and goals
- **⚡ [Quick Start](QUICKSTART.md)** - Deploy in minutes
- **🏗️ [Architecture](ARCHITECTURE_SETUP.md)** - Technical setup guide
- **🗄️ [Supabase Setup](SUPABASE_SETUP.md)** - Database configuration
- **📝 [Project Overview](PROJECT_OVERVIEW.md)** - Feature summary

---

## ✨ What's Built

### **Public Website**
- ✅ Homepage with mission and CTAs
- ✅ School Board profiles (all 7 OUSD trustees)
- ✅ Events calendar with ICS download
- ✅ Contact and Get Involved pages
- ✅ Bilingual support (EN/ES)
- ✅ Responsive design (mobile, tablet, desktop)

### **Admin Tools**
- ✅ **CMS**: Write and publish articles at `/admin`
- ✅ **Dashboard**: Track stats at `/admin-dashboard`
- ✅ **Vote Tracker**: Record trustee voting patterns
- ✅ **Form Collection**: Newsletter, contact, volunteer signups

### **Automation**
- ✅ **OUSD Scraper**: Auto-scrapes meetings and curriculum daily
- ✅ **Search Index**: 23 articles + 7 board members indexed
- ✅ **ICS Generation**: Automatic calendar file for board meetings
- ✅ **Deploy Pipeline**: Git push → Auto-deploy (2 minutes)

### **Infrastructure**
- ✅ **Hosting**: Netlify (global CDN, SSL)
- ✅ **CMS**: Decap CMS (Git-based)
- ✅ **Forms**: Netlify Forms + Supabase storage
- ✅ **Analytics**: Plausible (privacy-friendly)
- ✅ **Email**: info@orangeunited.org

---

## 📊 Current Status

**Overall: 95% Complete** 🎯

| Feature | Status |
|---------|--------|
| Website Design | ✅ 100% |
| Content Management | ✅ 100% |
| Admin Dashboard | ✅ 100% |
| Vote Tracker | ✅ 100% |
| Search Index | ✅ 100% |
| Forms & Email | ⚠️ 90% |
| Bilingual Support | ✅ 100% |
| OUSD Scraper | ✅ 100% |
| SEO & Performance | ✅ 100% |

**See [PROGRESS_REPORT.md](PROGRESS_REPORT.md) for detailed status.**

---

## 🎯 Mission

> Provide parents with transparent, accessible information about Orange Unified School District to empower them to engage effectively in their children's education.

---

## 🛠️ Tech Stack

**Frontend:**
- Astro 4.15 (Static Site Generator)
- Tailwind CSS (Styling)
- TypeScript (Type Safety)
- i18next (Internationalization)

**Backend/Services:**
- Netlify (Hosting, Forms, Identity)
- GitHub Actions (Scraper automation)
- Supabase (Form storage database)
- Decap CMS (Content management)

**Key Features:**
- Static generation (fast page loads)
- Git-based CMS (all changes tracked)
- Automated scraping (daily at 8 AM PST)
- Bilingual (EN/ES with localStorage persistence)
- Accessible (WCAG AA compliant)

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 20+
- Git
- GitHub account
- Netlify account

### **Local Development**

```bash
# Clone the repository
git clone https://github.com/realemal/orange-united.git
cd orange-united

# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:4321
```

### **Deploy to Netlify**

1. Push to GitHub
2. Connect to Netlify
3. Set environment variables
4. Deploy!

**See [QUICKSTART.md](QUICKSTART.md) for detailed instructions.**

---

## 📝 How to Use

### **For Admins:**

**Write an Article:**
1. Go to https://orangeunited.org/admin
2. Login with Google or password
3. Click "Articles" → "New Article"
4. Write content, add images
5. Click "Publish"
6. Live in 2 minutes!

**Add an Event:**
1. Go to `/admin` → "Events"
2. Fill in date, time, location
3. Click "Publish"

**Track a Vote:**
1. Create meeting in "Board Meetings"
2. Add agenda items in "Agenda Items"
3. Record votes in "Individual Votes"

**View Analytics:**
- Dashboard: https://orangeunited.org/admin-dashboard
- Plausible: https://plausible.io/orangeunited.org
- Forms: https://app.netlify.com/sites/orangeunited/forms

---

## 📁 Project Structure

```
Orange United/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── VoteTable.astro
│   │   ├── EventCalendar.astro
│   │   └── ...
│   ├── content/             # Markdown content (CMS-managed)
│   │   ├── articles/        # Blog posts (23 drafts)
│   │   └── events/          # Upcoming events
│   ├── data/                # JSON data
│   │   ├── board-members.json  # 7 trustees
│   │   ├── settings.json       # Site config
│   │   ├── search/index.json   # Search index (generated)
│   │   └── votes/              # Vote tracking
│   ├── layouts/             # Page layouts
│   │   └── BaseLayout.astro    # Main template
│   ├── pages/               # Routes
│   │   ├── index.astro         # Homepage
│   │   ├── school-board.astro  # Board page
│   │   ├── events.astro        # Events page
│   │   ├── admin-dashboard.astro # Admin dashboard
│   │   └── ...
│   ├── scripts/             # Build scripts
│   │   ├── build-ics.js        # ICS generator
│   │   └── translate.js        # Translation
│   └── styles/              # Global CSS
├── public/                  # Static assets
│   ├── admin/               # Decap CMS config
│   ├── board-members/       # Trustee photos
│   ├── logo.png            # Orange United logo
│   └── robots.txt
├── scripts/                 # Automation
│   └── scraper.js          # OUSD scraper (daily)
├── netlify/functions/       # Serverless functions
│   └── form-submission.ts  # Supabase form handler
├── .github/workflows/       # GitHub Actions
│   └── scraper.yml         # Daily scraper job
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind configuration
├── netlify.toml            # Netlify configuration
└── package.json            # Dependencies
```

---

## 🎨 Key Features

### **1. Content Management**
- Git-based CMS (Decap)
- Markdown editor with preview
- Image uploads
- Draft → Review → Publish workflow
- Spanish translation fields

### **2. Admin Dashboard**
- Real-time statistics
- Quick action buttons
- Content management links
- System status indicators
- Board member overview

### **3. Vote Tracker**
- Track board meetings
- Record agenda items
- Log individual trustee votes
- Color-coded display (Y/N/A/P)
- Source links to agendas

### **4. Automated Scraper**
- Daily scraping at 8 AM PST
- Extracts OUSD meetings & curriculum
- Creates draft articles
- De-duplication logic
- Timezone-aware logging

### **5. Search System**
- Client-side search index
- 30 items indexed (articles + trustees)
- Auto-rebuilds on deploy
- Ready for search UI

### **6. Events & Calendar**
- Interactive calendar view
- ICS download for board meetings
- RSVP link support
- Meeting location & rules

### **7. Bilingual Support**
- EN/ES language toggle
- localStorage persistence
- Site-wide translation support
- Spanish content fields in CMS

### **8. Forms & Email**
- Newsletter signup (3 locations)
- Contact form with validation
- Get involved / volunteer form
- Honeypot spam protection
- Supabase storage + email forwarding

---

## 🔐 Admin Access

### **Login URL:** https://orangeunited.org/admin

### **Current Admin:**
- Ethan (ethanmalausa@gmail.com)

### **Add Team Members:**
1. Go to: https://app.netlify.com/sites/orangeunited/identity
2. Click "Invite users"
3. Enter email address
4. They receive invitation
5. They can log in to `/admin`

### **Login Options:**
- Password (via email invitation)
- Google OAuth (recommended)
- Auth0 (future migration)

---

## 📧 Email Setup

**Primary Email:** info@orangeunited.org

**Where It's Used:**
- Contact page
- School board page
- Footer
- About page
- Mailto links throughout

**Form Submissions Go To:**
- ✅ info@orangeunited.org (forwarded)
- ✅ Netlify Forms dashboard
- ⚠️ Supabase database (needs final setup)

---

## 🔧 Configuration

### **Environment Variables**

Required in Netlify:

```bash
PLAUSIBLE_DOMAIN=orangeunited.org
SUPABASE_URL=https://xoptayfppsyfblbvbvoc.supabase.co
SUPABASE_SERVICE_ROLE=your-service-role-key
SUPABASE_ANON_KEY=your-anon-key
```

### **Site Settings**

Edit in CMS (`/admin` → Settings):
- Site title and tagline
- Social media links
- Newsletter provider
- Primary color

---

## 📊 Analytics

**Plausible Analytics** (Privacy-Friendly)
- No cookies
- GDPR compliant
- Real-time dashboard
- Page views, visitors, referrers

**Admin Dashboard**
- Article count
- Event count
- Search index size
- Vote records

**Form Submissions**
- Netlify Forms dashboard
- Supabase database (when configured)
- Export to CSV

---

## ⚙️ Build & Deploy

### **Development**
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### **Build Process**
```bash
npm run build:ics    # Generate ICS calendar
npm run build:search # Build search index
npm run build        # Astro type check + build
```

### **Deploy Process**
1. Push to GitHub `main` branch
2. Netlify webhook triggers
3. Runs `npm run build`
4. Deploys to production
5. Live in ~2 minutes

### **Scraper**
Runs daily via GitHub Actions:
- Schedule: 8:00 AM PST
- Scrapes orangeusd.org
- Creates draft articles
- Commits to GitHub
- Triggers Netlify rebuild

---

## ♿ Accessibility

**WCAG AA Compliant:**
- ✅ Skip to content link
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast
- ✅ Alt text on images
- ✅ Screen reader tested

---

## 🚨 Known Issues

### **1. Netlify Identity Login**
**Status:** ⚠️ Password reset not working  
**Workaround:** Enable Google OAuth  
**Solution:** Migrate to Auth0 (recommended)  
**Priority:** 🔴 CRITICAL

### **2. Supabase Setup**
**Status:** ⚠️ 90% complete  
**Needs:** Run SQL, connect form notification  
**Priority:** 🟡 HIGH

### **3. Articles Page**
**Status:** "Coming Soon" placeholder  
**Infrastructure:** Ready, needs content review  
**Priority:** 🟢 MEDIUM

---

## 📚 Documentation

- **[PROGRESS_REPORT.md](PROGRESS_REPORT.md)** - Full status report
- **[QUICKSTART.md](QUICKSTART.md)** - Quick deployment
- **[ARCHITECTURE_SETUP.md](ARCHITECTURE_SETUP.md)** - Technical guide
- **[SUPABASE_SETUP.md](SUPABASE_SETUP.md)** - Database setup
- **[QUICK_SETUP_GUIDE.md](QUICK_SETUP_GUIDE.md)** - 3-step guide
- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Feature summary
- **[CHATGPT_CONTEXT.md](CHATGPT_CONTEXT.md)** - Full project context
- **[SCRAPER_GUIDE.md](SCRAPER_GUIDE.md)** - Scraper docs
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Branch deployment
- **[EMAIL_SETUP.md](EMAIL_SETUP.md)** - Email config
- **[HOW_TO_UPDATE_BIOS.md](HOW_TO_UPDATE_BIOS.md)** - Bio guide

---

## 🤝 Contributing

This is a private project for Orange United. If you're a team member:

1. Get invited to Netlify Identity
2. Clone the repository
3. Create a feature branch
4. Make changes
5. Push and create PR
6. Review and merge

**Please review [501(c)(4) compliance guidelines](src/pages/editorial-standards.astro) before contributing content.**

---

## 📞 Support

**Technical Issues:**
- GitHub Issues: https://github.com/realemal/orange-united/issues
- Netlify Support: support@netlify.com

**Content Questions:**
- Email: info@orangeunited.org

**CMS Help:**
- Decap CMS Docs: https://decapcms.org/docs

---

## 📄 License

© 2025 Orange United. All rights reserved.

Paid for by The Community Action Network.

---

## 🎯 Roadmap

### **This Week**
- [ ] Fix Netlify Identity login (Google OAuth)
- [ ] Complete Supabase setup
- [ ] Test all forms
- [ ] Review board bios
- [ ] Publish 2-3 articles

### **Before Launch**
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up Plausible dashboard
- [ ] Invite team members
- [ ] Create social media posts

### **Post-Launch**
- [ ] Publish all reviewed articles
- [ ] Build article listing page
- [ ] Add client-side search UI
- [ ] Display voting records
- [ ] Add newsletter archive
- [ ] Create resource library

---

**🍊 Built with care for Orange parents and schools. Let's protect parent choice together!**
