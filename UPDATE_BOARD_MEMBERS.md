# 📸 How to Add Real Board Member Photos & Info

## Quick Steps:

### 1. Get Board Member Photos

**Visit the official page:**
https://www.orangeusd.org/Board-of-Education/Board-Members/index.html

**For each board member:**
1. Right-click on their photo
2. "Save Image As..."
3. Save to `/public/board-members/` folder
4. Name them:
   - `member-1.jpg` (Andrea Yamasaki - Area 1)
   - `member-2.jpg` (Ana Page - Area 2)
   - `member-3.jpg` (Kris Erickson - Area 3)
   - `member-4.jpg` (Madison Miner - Area 4)
   - `member-5.jpg` (Brenda Lebsack - Area 5)
   - `member-6.jpg` (Rick Ledesma - Area 6)
   - `member-7.jpg` (John Ortega - Area 7)

### 2. Update Member Information

**Edit:** `src/data/board-members.json`

Update each member's:
- `name` - Full name
- `area` - Trustee area number
- `title` - President, Vice President, Clerk, or Member
- `email` - Official email
- `bio` - Short bio or key positions

**⚠️ NEEDS UPDATE - Current board members for 2025:**

Visit https://www.orangeusd.org/Board-of-Education/Board-Members/ to get:
- Current names
- Current titles (President, VP, Clerk rotate annually)
- Correct email addresses
- Current area assignments

Then update `src/data/board-members.json`:
```json
[
  {
    "name": "ACTUAL NAME FROM OUSD SITE",
    "area": "1",
    "title": "President/Vice President/Clerk/Member",
    "email": "actual.email@orangeusd.org",
    "image": "/board-members/member-1.jpg",
    "bio": "Copy bio from orangeusd.org"
  },
  // ... etc for all 7 members
]
```

### 3. Verify Changes

Run the site locally:
```bash
npm run dev
```

Visit homepage and scroll to "Meet The School Board" section.

---

## 🔍 Where to Find Info:

**Official Board Page:**
https://www.orangeusd.org/Board-of-Education/Board-Members/index.html

**What to Get:**
- ✅ Current photos
- ✅ Full names
- ✅ Area assignments
- ✅ Current titles (President, VP, etc.)
- ✅ Email addresses
- ✅ Brief bios

---

## 🤖 Or Let the Scraper Do It:

I can enhance the scraper to automatically grab board member info!

Just add this to `scripts/scraper.js` in the `scrapeBoardMembers()` function with the correct CSS selectors from the OUSD site.

---

## 📌 Current Status:

- ✅ Names are populated (7 members)
- ✅ Areas assigned (1-7)
- ✅ Titles included (President, VP, etc.)
- ✅ Email placeholders
- ⬜ Photos need to be downloaded
- ⬜ Bios need to be updated

---

## 💡 Pro Tip:

Once you have the real photos in `/public/board-members/`, they'll automatically show up! The site uses:
```
onerror="this.src='/placeholder.png'"
```
So placeholder images show until you add real ones.

