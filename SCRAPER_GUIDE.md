# 🤖 Orange USD Auto-Scraper

Automated scraper that monitors orangeusd.org for meetings and curriculum changes, then creates draft articles for you.

---

## 🎯 What It Does

**Automatically Every Day:**
1. ✅ Scrapes orangeusd.org for board meetings
2. ✅ Scrapes curriculum/instruction pages
3. ✅ Tracks board member information
4. ✅ Detects NEW content (compares with previous day)
5. ✅ Creates DRAFT articles automatically when changes found
6. ✅ Stores all data in `data/scraped-data.json`

**When Changes Detected:**
- Creates draft article in `/src/content/articles/`
- Marks as `status: "draft"` (won't publish automatically)
- Includes the detected information
- Adds TODO checklist for you to complete
- You review, add analysis, and publish via `/admin`

---

## 🚀 Setup (One Time)

### 1. Install Dependencies

```bash
cd scripts
npm install
```

### 2. Test Locally

```bash
npm run scrape
```

This will:
- Scrape orangeusd.org
- Save data to `data/scraped-data.json`
- Show you what it found

### 3. Enable GitHub Actions (for automatic daily runs)

**The scraper will run automatically via GitHub Actions:**
- Every day at 8 AM PST
- Or manually anytime you want

**To enable:**
1. Push your code to GitHub
2. GitHub Actions will run automatically
3. Check the "Actions" tab on your repo to see it working

**That's it!** No server needed, runs free on GitHub.

---

## 📊 How It Works

### Daily Workflow:

```
8:00 AM PST - Scraper runs automatically
    ↓
Scrapes orangeusd.org pages
    ↓
Compares with yesterday's data
    ↓
If NEW content found:
    ↓
Creates DRAFT article with:
- Title of the item
- Link to source
- Date detected
- TODO checklist for you
    ↓
Commits to your repo
    ↓
You get notification (if enabled)
    ↓
You review draft at /admin
    ↓
Add your analysis
    ↓
Publish!
```

---

## 📝 What Gets Created

### Example: New Meeting Detected

**File:** `src/content/articles/meeting-2024-11-15-abc123.md`

```markdown
---
title: "Board Meeting Update: December 2024 Agenda"
status: "draft"
category: "Board Meetings"
---

## Auto-Generated - Needs Review

New meeting detected: December 2024 Agenda

Source: [Link to orangeusd.org]

TODO:
- Review the agenda
- Add key items
- Add your analysis
- Publish when ready
```

### Example: New Curriculum Detected

**File:** `src/content/articles/curriculum-2024-11-15-xyz789.md`

```markdown
---
title: "Curriculum Update: New Math Program"
status: "draft"
category: "Curriculum"
---

## Auto-Generated - Needs Review

New curriculum item: New Math Program

Source: [Link to orangeusd.org]

TODO:
- Review the change
- Explain in parent-friendly terms
- Add your perspective
- Publish when ready
```

---

## 📁 Files Created

```
Orange United/
├── scripts/
│   ├── scraper.js          ← The scraper code
│   ├── package.json        ← Dependencies
│   └── README.md           ← This file
├── data/
│   └── scraped-data.json   ← Stored data (auto-generated)
├── .github/workflows/
│   └── scraper.yml         ← GitHub Actions (runs daily)
└── src/content/articles/
    ├── meeting-*.md        ← Auto-generated drafts
    └── curriculum-*.md     ← Auto-generated drafts
```

---

## ⚙️ Configuration

### Change Schedule

Edit `.github/workflows/scraper.yml`:

```yaml
schedule:
  # Daily at 8 AM PST
  - cron: '0 16 * * *'
  
  # Or change to:
  # Every 6 hours: '0 */6 * * *'
  # Twice daily: '0 8,20 * * *'
  # Weekly: '0 16 * * 1'
```

### Add More URLs

Edit `scripts/scraper.js`:

```javascript
const URLS = {
  boardMeetings: '...',
  curriculum: '...',
  // Add more:
  policies: 'https://www.orangeusd.org/...',
  budget: 'https://www.orangeusd.org/...',
};
```

---

## 🔍 Monitoring & Debugging

### View Scraper Logs

1. Go to your GitHub repo
2. Click "Actions" tab
3. Click latest run
4. See full output and any errors

### Manual Run

Trigger scraper manually:
1. Go to Actions tab
2. Click "Orange USD Scraper"
3. Click "Run workflow"
4. Click "Run workflow" button

### Local Testing

```bash
cd scripts
npm run scrape
```

Check output and `data/scraped-data.json`

---

## 📧 Get Notifications

### Email When Scraper Finds Changes

Add to `.github/workflows/scraper.yml`:

```yaml
- name: Send notification
  if: success()
  uses: dawidd6/action-send-mail@v3
  with:
    server_address: smtp.gmail.com
    server_port: 465
    username: ${{secrets.EMAIL_USERNAME}}
    password: ${{secrets.EMAIL_PASSWORD}}
    subject: 🍊 Orange USD Updates Detected
    body: Check your repo for new draft articles!
    to: your-email@example.com
    from: Orange United Bot
```

### Slack/Discord Notifications

Similar - many GitHub Actions available for notifications.

---

## 🛠️ Customization

### Improve Scraping Accuracy

The scraper uses generic selectors. To improve:

1. Visit orangeusd.org pages
2. Right-click → Inspect
3. Find exact CSS selectors for content
4. Update `scraper.js` with specific selectors

**Example:**
```javascript
// Generic (current)
$('a').each(...)

// Specific (better)
$('.meeting-item a').each(...)
$('#upcoming-meetings .agenda-link').each(...)
```

### Add More Content Types

In `scraper.js`, add functions:

```javascript
async function scrapeBudget() {
  // Scrape budget page
}

async function scrapeEvents() {
  // Scrape events calendar
}
```

---

## ⚠️ Important Notes

### Legal / Ethical
- ✅ Public information only
- ✅ Respects robots.txt
- ✅ Reasonable request rate (once daily)
- ✅ No login required
- ✅ Educational/civic purpose

### Limitations
- Scraper detects NEW items only (not edits to existing)
- Requires manual review before publishing
- May miss content if site structure changes
- Generic selectors may need adjustment

### Maintenance
- Check scraper logs monthly
- Update selectors if site redesigns
- Review and merge draft articles
- Adjust schedule as needed

---

## 🎯 Your Workflow

**Daily:**
1. Check email/notifications (if enabled)
2. Or check `/admin` for new drafts

**When Draft Article Found:**
1. Open in CMS
2. Review source link
3. Add your analysis
4. Update title/excerpt
5. Change to `status: "published"`
6. Save

**Weekly Review:**
- Check `data/scraped-data.json`
- Review scraper logs in GitHub Actions
- Archive old draft articles

---

## 💡 Tips

**Don't Auto-Publish:**
- Keep drafts as drafts
- Your VALUE is the analysis, not raw data
- Review everything before publishing

**Combine with Manual:**
- Scraper catches most things
- You still catch context and nuance
- Best of both worlds

**Archive Systematically:**
- Keep `scraped-data.json` history
- Good for tracking trends over time
- Reference past meetings/decisions

---

## 🆘 Troubleshooting

**Scraper not running?**
- Check GitHub Actions is enabled
- Check workflow file syntax
- Review error logs in Actions tab

**No drafts created?**
- First run creates baseline (no articles)
- Articles only on NEW content
- Check logs to see what was found

**Wrong content scraped?**
- Inspect orangeusd.org HTML
- Update selectors in scraper.js
- Test locally before pushing

**Need help?**
- Check scraper logs
- Review `scraped-data.json`
- Test manually: `npm run scrape`

---

## 🚀 Next Steps

1. ✅ Test scraper locally
2. ✅ Push to GitHub
3. ✅ Enable Actions
4. ✅ Wait for first run (or trigger manually)
5. ✅ Review draft articles
6. ✅ Publish with your analysis

**The scraper works FOR you, not INSTEAD of you!**

Your commentary and parent perspective is what makes Orange United valuable. The scraper just makes sure you never miss an update! 🍊

