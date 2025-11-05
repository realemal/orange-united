# 🍊 Orange United - Complete Project Context for AI Assistance

**Use this document when asking ChatGPT or other AI for advice about Orange United.**

---

## 📋 Project Overview

### **What is Orange United?**
Orange United is a 501(c)(4) nonprofit organization focused on parent education and engagement in Orange Unified School District (Orange, California). We provide information about school board meetings, education policy, curriculum decisions, and opportunities for parents to participate in their children's education.

### **Mission:**
Protect parent choice by providing transparent, accessible information about Orange schools, board meetings, and education policy decisions.

### **Legal Status:**
- **501(c)(4) Social Welfare Organization**
- Focus: Education and civic engagement (NOT political campaigns)
- Cannot endorse candidates or engage in partisan activities
- CAN: Educate parents, track voting records, promote civic participation

---

## 🌐 Website Details

### **Live Sites:**

**Production (Public):**
- **URL:** https://orangeunited.org
- **Branch:** `main` (currently deployed)
- **Status:** LIVE and public
- **Purpose:** Main website for parents

**Preview (Team Only):**
- **Branch:** `preview`
- **Status:** Can be deployed separately with password
- **Purpose:** Testing and previewing changes

**Landing Page:**
- **Branch:** `landing`
- **Status:** Simple coming soon page (not currently used)
- **Purpose:** Email collection before full launch

### **Repository:**
- **GitHub:** https://github.com/realemal/orange-united
- **Owner:** realemal
- **Branches:** main, preview, landing

---

## 🛠️ Tech Stack

### **Framework & Tools:**
- **Astro** (v4.15.12) - Static site generator
- **Tailwind CSS** (v3.4.13) - Styling
- **TypeScript** - Type safety
- **Decap CMS** - Content management (Git-based)
- **Netlify** - Hosting and deployment
- **Netlify Forms** - Form handling and email collection
- **GitHub Actions** - Automated web scraping

### **Key Features:**
- Static site generation (fast, secure)
- Git-based content management
- Bilingual support (English/Spanish toggle)
- Automated scraping of OUSD website
- Newsletter signup
- Contact forms
- Event calendar
- RSS feed
- SEO optimized

---

## 📁 Project Structure

```
/
├── public/               # Static assets
│   ├── admin/           # Decap CMS config
│   ├── board-members/   # Board member photos (7 members)
│   └── logo.png         # Orange United logo
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Markdown content (articles, events, pages)
│   ├── data/           # JSON data (board members, settings)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── scripts/        # Translation system
│   └── styles/         # Global CSS
├── scripts/
│   └── scraper.js      # OUSD website scraper
├── .github/workflows/
│   └── scraper.yml     # Daily scraping automation
└── netlify.toml        # Netlify config
```

---

## 👥 Current Board Members (2025)

**Orange Unified School District Board of Education:**

1. **Kris Erickson, J.D.** - President, Area 5 (2022-2026)
   - Email: kristin.erickson@orangeusd.org

2. **Andrea Yamasaki** - Vice President, Area 1 (2022-2026)
   - Email: ayamasaki@orangeusd.org

3. **Ana Page** - Clerk, Area 3 (2024-2028)
   - Email: apage@orangeusd.org

4. **Sierra Vane, Ph.D.** - Member, Area 2 (2024-2028)
   - Email: svane@orangeusd.org

5. **Sara Pelly** - Member, Area 4 (2024-2026)
   - Email: spelly@orangeusd.org

6. **Matthew Thomas** - Member, Area 6 (2024-2028)
   - Email: mthomas@orangeusd.org

7. **Stephen Glass, Ed.D.** - Member, Area 7 (2024-2026)
   - Email: sglass@orangeusd.org

**Board meetings:** First Tuesday of each month, 6:00 PM
**Location:** District Office, 1401 N. Handy Street, Orange, CA 92867

---

## 📄 Pages on Site

### **Public Pages:**
1. **Home** (`/`) - Hero, mission, newsletter signup
2. **About** (`/about`) - Mission, values, what we do
3. **School Board** (`/school-board`) - Board member profiles and bios
4. **Articles** (`/articles`) - Coming soon page (not published yet)
5. **Events** (`/events`) - Board meeting info, calendar, upcoming events
6. **Get Involved** (`/get-involved`) - Volunteer, donate forms
7. **Contact** (`/contact`) - Contact form and info

### **Admin:**
- **CMS Access:** `/admin` (Decap CMS - requires Netlify Identity)
- **Status:** Identity enabled but user setup incomplete
- **Alternative:** Edit files directly and push to GitHub

---

## 📧 Contact & Social

### **Email:**
- **Main:** info@orangeunited.org (Outlook/Microsoft 365)
- **Displayed on:** Footer, contact page, about page

### **Social Media:**
- **Facebook:** https://www.facebook.com/profile.php?id=61582066048374
- **Twitter:** https://twitter.com/orangeunitedca
- **Instagram:** https://instagram.com/orangeunited.ca

### **Domain:**
- **Primary:** orangeunited.org
- **Status:** Connected to Netlify, DNS propagated
- **Registrar:** GoDaddy

---

## 🔄 Auto-Scraper System

### **What It Does:**
Automatically scrapes https://www.orangeusd.org daily to detect:
- New board meeting agendas
- Curriculum changes
- Board member updates
- Policy documents

### **How It Works:**
- **Schedule:** Runs daily at 8 AM PST via GitHub Actions
- **Output:** Creates draft articles when new content detected
- **Location:** Articles saved to `src/content/articles/`
- **Status:** Configured and ready (runs after push to GitHub)

### **Files:**
- **Scraper:** `scripts/scraper.js`
- **GitHub Action:** `.github/workflows/scraper.yml`
- **Data Storage:** `data/scraped-data.json`

---

## 🌐 Translation System

### **Languages:**
- **English** (default)
- **Spanish** (toggle in header)

### **How It Works:**
- Uses `data-en` and `data-es` attributes
- JavaScript swaps text on toggle
- Saves preference to localStorage
- No page reload needed

### **Translated:**
- Navigation menu
- Homepage hero and sections
- Page headers
- Key content areas

**To add translations:** Add `data-en="English"` and `data-es="Spanish"` attributes to elements

---

## 📬 Forms & Email Collection

### **Active Forms:**
1. **Newsletter** (`newsletter`) - Email list signup
2. **Contact** (`contact`) - General inquiries
3. **Volunteer** (`volunteer`) - Volunteer interest
4. **Donate Interest** (`donate-interest`) - Donation inquiries

### **Form Handling:**
- **Service:** Netlify Forms
- **Notifications:** Email to info@orangeunited.org
- **Storage:** Netlify dashboard, exportable as CSV
- **Spam protection:** Honeypot fields included

### **Future:** Can switch to Mailchimp/Beehiiv via settings

---

## 🎨 Design & Branding

### **Colors:**
- **Primary Orange:** #F97316
- **Orange Scale:** 50-900 (Tailwind orange palette)
- **Backgrounds:** White, gray-50, orange-50
- **Text:** Gray-900 (dark), gray-600 (medium), gray-400 (light)

### **Typography:**
- **Body Font:** Inter (Google Fonts)
- **Headings:** Font-black, tight tracking
- **Grassroots Style:** Arial Black for navigation (uppercase, bold)
- **Tagline:** Handwriting font (Comic Sans MS, cursive fallbacks)

### **Logo:**
- **File:** `/public/logo.png`
- **Description:** Hand-drawn orange with "Orange United" text and "Protecting Parent Choice" tagline
- **Usage:** Header, footer, social sharing

### **Design Style:**
- Modern minimal
- Orange accents (not overwhelming)
- Clean white space
- Rounded corners (rounded-2xl, rounded-3xl)
- Subtle shadows and gradients
- Hover effects and transitions

---

## 🚀 Deployment & Updates

### **Hosting:**
- **Platform:** Netlify
- **Plan:** Free tier (starter)
- **Auto-deploy:** Push to GitHub → Netlify builds → Live in 2-4 minutes

### **Update Workflow:**

**Method 1: Edit Code (Cursor/Git)**
```bash
git checkout main
# Edit files
git add -A
git commit -m "Description"
git push
# Wait 2-4 minutes → LIVE
```

**Method 2: CMS (When Identity is set up)**
- Go to `/admin`
- Edit content
- Publish
- Auto-deploys in 2-3 minutes

### **Build Process:**
- **Command:** `npm run build`
- **Output:** `dist/` folder
- **Time:** ~30-60 seconds
- **Deploy:** Automatic after build

---

## 📊 Content Collections (Astro)

### **Articles:**
```typescript
{
  title: string
  date: Date
  excerpt: string
  image?: string
  category: 'Curriculum' | 'Board Meetings' | 'Opinion' | 'News'
  tags: string[]
  esTitle?: string (Spanish translation)
  esExcerpt?: string
  status: 'draft' | 'published'
  featured: boolean
}
```

### **Events:**
```typescript
{
  title: string
  date: Date
  location: string
  rsvpUrl?: string
  isCanceled: boolean
  body: markdown
}
```

### **Pages:**
```typescript
{
  title: string
  body: markdown
}
```

---

## 🎯 Current Status

### **✅ Completed:**
- [x] Full website built and designed
- [x] Deployed to Netlify
- [x] Domain connected (orangeunited.org)
- [x] Forms enabled and working
- [x] Email notifications set up
- [x] Board member page with real photos
- [x] Spanish translation system
- [x] Auto-scraper configured
- [x] Social media links integrated
- [x] Newsletter signup working
- [x] 501(c)(4) compliant language
- [x] Mobile responsive design
- [x] SEO optimization

### **⏳ In Progress:**
- [ ] Board member bio writing (placeholder content)
- [ ] Article creation (coming soon page active)
- [ ] CMS Identity setup (using Git for now)
- [ ] First board meeting coverage

### **📅 Upcoming:**
- [ ] Attend first board meeting (first Tuesday of month)
- [ ] Write meeting recap article
- [ ] Add upcoming events
- [ ] Build email subscriber list
- [ ] Create voting record database
- [ ] Develop content calendar

---

## 🔧 Common Tasks

### **Add Board Member Bio:**
1. Edit `src/data/board-members.json`
2. Update `"bio"` field for each member
3. Push to GitHub
4. Live in 2-4 minutes

### **Add Article:**
1. Create file: `src/content/articles/article-name.md`
2. Add frontmatter (title, date, category, etc.)
3. Write content in Markdown
4. Set `status: "published"`
5. Push to GitHub

### **Add Event:**
1. Create file: `src/content/events/event-name.md`
2. Add frontmatter (title, date, location, etc.)
3. Write description in Markdown
4. Push to GitHub

### **Update Email/Social Links:**
- Edit `src/data/settings.json`
- Or update directly in components

### **Change Design/Colors:**
- Edit `tailwind.config.cjs` for colors
- Edit component files for layout
- Edit `src/styles/globals.css` for global styles

---

## 📚 Documentation Files

**In Project Root:**
- `README.md` - Main project documentation
- `QUICKSTART.md` - Fast deployment guide
- `DEPLOYMENT_GUIDE.md` - Branch strategy and deployment
- `EMAIL_SETUP.md` - Email integration guide
- `BOARD_MEMBER_BIO_TEMPLATE.md` - Bio writing guide
- `SCRAPER_GUIDE.md` - Auto-scraper documentation
- `HOW_TO_UPDATE_BIOS.md` - Board member bio instructions
- `CONTRIBUTING.md` - Contribution guidelines

---

## 🎯 Organization Goals

### **Short Term (Next 30 Days):**
1. Write all 7 board member bios
2. Cover first board meeting (first Tuesday)
3. Publish 3-5 articles
4. Grow email list to 50+ subscribers
5. Establish social media presence

### **Medium Term (3 Months):**
1. Build voting record database
2. Cover every board meeting
3. Create curriculum change tracking
4. Email list to 200+ subscribers
5. Regular article publication schedule

### **Long Term (6-12 Months):**
1. Switch to Mailchimp for professional campaigns
2. Build parent volunteer network
3. Comprehensive voting record system
4. Monthly parent education events
5. Establish Orange United as primary parent information source

---

## ⚖️ Legal & Compliance

### **501(c)(4) Guidelines:**

**We CAN:**
- ✅ Educate parents on education issues
- ✅ Track and publish voting records
- ✅ Explain policy positions
- ✅ Promote civic participation
- ✅ Cover board meetings
- ✅ Encourage parent engagement

**We CANNOT:**
- ❌ Endorse or oppose candidates
- ❌ Engage in political campaigns
- ❌ Coordinate with candidates
- ❌ Make partisan statements
- ❌ Primary purpose be political

**Messaging Focus:**
- Education transparency (not politics)
- Parent information (not advocacy)
- Civic engagement (not campaigns)
- Student success (not partisan issues)

---

## 🔍 Research Sources

### **Primary Sources:**
1. **OUSD Website:** https://www.orangeusd.org
2. **Board Members:** https://www.orangeusd.org/Board-of-Education/Board-Members/
3. **Meeting Agendas:** https://www.orangeusd.org/Board-of-Education/Agendas-Minutes/
4. **Curriculum Info:** https://www.orangeusd.org/Departments/Curriculum-Instruction/

### **Tracking:**
- Board meeting agendas (first Tuesday of month)
- Meeting minutes (published after meetings)
- Voting records (in minutes)
- Policy changes (board policies page)
- Curriculum adoptions (board actions)

### **Auto-Scraper Monitors:**
- Board meeting pages
- Curriculum department page
- Creates draft articles when changes detected
- Runs daily at 8 AM PST

---

## 📝 Content Strategy

### **Article Categories:**
1. **Board Meetings** - Meeting recaps, voting summaries
2. **Curriculum** - Curriculum changes, textbook adoptions
3. **Opinion** - Analysis and commentary (educational focus)
4. **News** - District news and announcements

### **Article Format:**
- **Pre-Meeting:** Preview of agenda items
- **Post-Meeting:** Recap with voting records
- **Analysis:** Curriculum/policy deep dives
- **How-To:** Parent participation guides

### **Tone:**
- Factual and informative
- Parent-friendly language
- Educational (not partisan)
- Professional but accessible
- Cite sources

---

## 🤝 Team & Access

### **Current Access:**
- **Owner:** Ethan Malamatenios (ethanmalausa@gmail.com)
- **GitHub:** realemal
- **Email:** info@orangeunited.org
- **Editing:** Direct Git push (CMS Identity not fully configured)

### **Future Team Roles:**
- Content writers (articles)
- Meeting monitors (attend/summarize)
- Social media manager
- Volunteer coordinator

---

## 💡 Common Questions & Answers

### **Q: How do we add content?**
A: Edit files in `/src/content/` and push to GitHub. Or use CMS at `/admin` (when Identity configured).

### **Q: How do we stay nonpartisan?**
A: Focus on education policy, not politics. Track votes, don't endorse candidates. Report facts, not opinions on candidates.

### **Q: What's our relationship to the school board?**
A: Independent watchdog. We monitor, inform, educate. We don't coordinate with or oppose trustees.

### **Q: Can we criticize board decisions?**
A: Yes, but frame as education policy analysis, not political attacks. Focus on impact on students and parents.

### **Q: How do we handle elections?**
A: Don't endorse. Can publish candidate education policy positions (if offered to all equally). Focus on informing voters, not influencing votes.

### **Q: Can we accept donations?**
A: Yes, as 501(c)(4). Donations NOT tax-deductible. Disclose: "Paid for by The Community Action Network."

---

## 🚨 Current Challenges & Needs

### **Immediate Needs:**
1. **Board member bios** - Need to research and write detailed bios
2. **First article** - Attend/cover next board meeting
3. **Event calendar** - Add upcoming board meetings as events
4. **Email list growth** - Promote newsletter signup

### **Technical:**
- CMS access working via Git (Netlify Identity optional)
- Spanish translations need expansion
- Scraper needs URL refinement for better accuracy

### **Content:**
- Need 5-10 starter articles
- Need regular meeting coverage
- Need to establish content calendar

---

## 🎯 Success Metrics

### **Engagement:**
- Email subscribers
- Website traffic
- Social media followers
- Form submissions
- Meeting attendance

### **Impact:**
- Parents informed about board decisions
- Public comment participation increased
- Curriculum transparency improved
- Parent network established

---

## 🛠️ Technical Notes for AI Assistance

### **When Asking for Help:**

**Code Changes:**
- We use Astro + Tailwind
- TypeScript enabled (strict mode)
- Component-based architecture
- Static site generation

**Content Changes:**
- Markdown for articles/events/pages
- JSON for structured data (board members, settings)
- Frontmatter for metadata

**Deployment:**
- Auto-deploys from GitHub
- Netlify handles builds
- Forms use Netlify Forms
- No server-side code needed

**Compliance:**
- Always keep 501(c)(4) guidelines in mind
- Educational focus, not political
- Fact-based, not advocacy

---

## 📞 Support & Resources

**If Things Break:**
1. Check Netlify deploy logs
2. Check GitHub Actions for scraper
3. Test locally: `npm run dev`
4. Build test: `npm run build`
5. Check browser console for errors

**Getting Help:**
- Astro docs: https://docs.astro.build
- Netlify docs: https://docs.netlify.com
- Tailwind docs: https://tailwindcss.com/docs

---

## 🎉 Summary

Orange United is a **fully functional, live website** providing education information to Orange parents. The site is **deployed, collecting emails, and ready for content**. The main focus now is **creating board member bios** and **starting regular board meeting coverage**.

**Status:** Production-ready, live at orangeunited.org 🍊

**Next Steps:** Write bios, cover meetings, grow email list, establish presence.

---

*Last Updated: November 5, 2024*
*Project maintained by Orange United / The Community Action Network*

