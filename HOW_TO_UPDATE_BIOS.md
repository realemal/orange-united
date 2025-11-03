# ✏️ How to Update Board Member Bios

## Quick Method: Edit JSON File

### Step 1: Open the file
Edit: `/src/data/board-members.json`

### Step 2: Update the `bio` field for each member

**Example:**
```json
{
  "name": "Kris Erickson, J.D.",
  "area": "5",
  "title": "President",
  "email": "kristin.erickson@orangeusd.org",
  "image": "/board-members/member-5.jpg",
  "term": "2022-2026",
  "bio": "Dr. Erickson has served on the board since 2022. She votes consistently for [your analysis]. Key positions include [list positions]. Notable votes: [examples]."
}
```

### Step 3: Write Better Bios

**Include:**
- ✅ How long they've served
- ✅ Their professional background
- ✅ Key voting patterns
- ✅ Notable positions/statements
- ✅ Your analysis of their record
- ✅ Contact preferences

**Example Good Bio:**
```
"Kris Erickson, J.D. has served as a trustee since 2022 and currently serves as Board President. 
She consistently votes in favor of expanding district programs and increased spending. 
Notable votes include supporting the new SEL curriculum (7-0) and approving the 2024 budget increases. 
Parents concerned about fiscal responsibility and curriculum transparency may want to engage with 
her office on these issues."
```

### Step 4: Save and View

1. Save the JSON file
2. Refresh your browser (or restart `npm run dev`)
3. Visit `/school-board` to see updated bios

---

## 🎨 For Longer Bios (Future Enhancement)

If you want REALLY long bios with multiple sections, we can:

1. Create a new content collection for board members
2. Write bios in Markdown (like articles)
3. Manage via `/admin` CMS

**Let me know if you want this!** For now, the JSON file is quickest.

---

## 📝 Bio Template

Copy this for each member:

```
[Name] has served on the Orange Unified School Board since [year], representing Trustee Area [#]. 

BACKGROUND:
[Professional background, education, relevant experience]

BOARD SERVICE:
Currently serves as [title]. Committee memberships include [list committees].

KEY POSITIONS:
- [Position on curriculum]
- [Position on spending]
- [Position on parent involvement]

VOTING RECORD:
Notable votes include:
- [Vote 1]: [7-0, 6-1, etc.] - [Your take]
- [Vote 2]: [Vote count] - [Your take]

PARENT PERSPECTIVE:
[Your analysis of whether they represent parent priorities, concerns, or praise]

CONTACT:
Email: [email]
Office Hours: [if available]
```

---

## 🚀 Quick Start

**For each of the 7 board members:**

1. Research their background (OUSD site, LinkedIn, news articles)
2. Review their voting record (meeting minutes)
3. Note their key positions
4. Write a fair but honest bio
5. Update the JSON file
6. Push to GitHub

**Time:** About 30-60 minutes per board member for thorough research and writing.

---

## 💡 Pro Tips

**Be Factual:**
- Cite specific votes
- Use direct quotes when possible
- Link to sources (meeting minutes, statements)

**Be Fair:**
- Present their positions accurately
- Give context for votes
- Acknowledge when they do something you agree with

**Be Useful:**
- Help parents understand the trustee's priorities
- Explain how to contact them effectively
- Note when they're up for re-election

**Be Strategic:**
- Your analysis is valuable
- Help parents know who to engage with on specific issues
- Build accountability through transparency

---

## 📊 Track Voting Records

Create a spreadsheet or add to `board-members.json`:

```json
"votingRecord": [
  {
    "date": "2024-10-15",
    "issue": "SEL Curriculum Adoption",
    "vote": "Yes",
    "outcome": "Passed 7-0"
  },
  {
    "date": "2024-09-10", 
    "issue": "Budget Increase",
    "vote": "Yes",
    "outcome": "Passed 6-1"
  }
]
```

Then display on their profile page!

---

**Start with one bio, see how it looks, then do the rest!**

