// Orange USD Scraper - Tracks meetings and curriculum changes
import axios from 'axios';
import * as cheerio from 'cheerio';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// URLs to scrape
// TODO: Update these with the correct URLs from orangeusd.org
const URLS = {
  // Visit orangeusd.org and find the correct pages:
  boardMeetings: 'https://www.orangeusd.org/', // Main site for now
  agendas: 'https://www.orangeusd.org/',
  curriculum: 'https://www.orangeusd.org/',
  boardMembers: 'https://www.orangeusd.org/',
};

// Data storage path
const DATA_PATH = join(__dirname, '../data/scraped-data.json');
const ARTICLES_PATH = join(__dirname, '../src/content/articles');

// Load previous data
function loadPreviousData() {
  if (existsSync(DATA_PATH)) {
    try {
      return JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
    } catch (error) {
      console.error('Error loading previous data:', error);
      return null;
    }
  }
  return null;
}

// Save current data
function saveData(data) {
  const dir = dirname(DATA_PATH);
  if (!existsSync(dir)) {
    import('fs').then(fs => fs.mkdirSync(dir, { recursive: true }));
  }
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

// Scrape board meetings
async function scrapeBoardMeetings() {
  try {
    console.log('Scraping board meetings...');
    const { data } = await axios.get(URLS.boardMeetings);
    const $ = cheerio.load(data);
    
    const meetings = [];
    
    // Try to find meeting information
    // This is a generic scraper - adjust selectors based on actual site structure
    $('a').each((i, elem) => {
      const text = $(elem).text().toLowerCase();
      const href = $(elem).attr('href');
      
      if ((text.includes('agenda') || text.includes('meeting')) && href) {
        meetings.push({
          title: $(elem).text().trim(),
          url: href.startsWith('http') ? href : `https://www.orangeusd.org${href}`,
          scrapedAt: new Date().toISOString(),
        });
      }
    });
    
    return meetings.slice(0, 10); // Get last 10 meetings
  } catch (error) {
    console.error('Error scraping board meetings:', error.message);
    return [];
  }
}

// Scrape curriculum updates
async function scrapeCurriculum() {
  try {
    console.log('Scraping curriculum...');
    const { data } = await axios.get(URLS.curriculum);
    const $ = cheerio.load(data);
    
    const curriculumItems = [];
    
    // Extract curriculum information
    $('a').each((i, elem) => {
      const text = $(elem).text().toLowerCase();
      const href = $(elem).attr('href');
      
      if ((text.includes('curriculum') || text.includes('instruction') || 
           text.includes('program') || text.includes('adoption')) && href) {
        curriculumItems.push({
          title: $(elem).text().trim(),
          url: href.startsWith('http') ? href : `https://www.orangeusd.org${href}`,
          scrapedAt: new Date().toISOString(),
        });
      }
    });
    
    return curriculumItems.slice(0, 10);
  } catch (error) {
    console.error('Error scraping curriculum:', error.message);
    return [];
  }
}

// Scrape board members
async function scrapeBoardMembers() {
  try {
    console.log('Scraping board members...');
    const { data } = await axios.get(URLS.boardMembers);
    const $ = cheerio.load(data);
    
    const members = [];
    
    // Extract board member information
    // Adjust selectors based on actual page structure
    $('.board-member, .member, .trustee').each((i, elem) => {
      const name = $(elem).find('.name, h2, h3, strong').first().text().trim();
      const email = $(elem).find('a[href^="mailto:"]').attr('href');
      const area = $(elem).text().match(/area\s+(\d+)/i)?.[1] || 
                   $(elem).text().match(/trustee\s+area\s+(\d+)/i)?.[1];
      
      if (name) {
        members.push({
          name,
          email: email?.replace('mailto:', ''),
          area: area || 'Unknown',
          scrapedAt: new Date().toISOString(),
        });
      }
    });
    
    return members;
  } catch (error) {
    console.error('Error scraping board members:', error.message);
    return [];
  }
}

// Create draft article for new meeting
function createMeetingArticle(meeting, isNew) {
  const slug = `meeting-${new Date().toISOString().split('T')[0]}-${Math.random().toString(36).substr(2, 9)}`;
  const filename = `${slug}.md`;
  const filepath = join(ARTICLES_PATH, filename);
  
  const content = `---
title: "Board Meeting Update: ${meeting.title}"
date: ${new Date().toISOString()}
excerpt: "New board meeting information detected. Review and add your analysis."
image: "/placeholder.png"
category: "Board Meetings"
tags: ["board meeting", "agenda", "auto-generated"]
status: "draft"
featured: false
---

## 🚨 Auto-Generated Article - Needs Review

A new board meeting item was detected on orangeusd.org:

**Title:** ${meeting.title}

**Source:** [View on Orange USD Website](${meeting.url})

**Detected:** ${new Date(meeting.scrapedAt).toLocaleDateString()}

---

## ✏️ TODO: Add Your Analysis

1. Review the meeting agenda/information
2. Identify key items that affect parents
3. Add context and explanation
4. Update the title and excerpt
5. Change status to "published" when ready

---

## Key Questions to Address:

- What's on the agenda?
- Which items matter most to parents?
- What decisions will be made?
- How can parents participate or provide input?
- What's your take on the issues?

---

*This article was auto-generated by the Orange United scraper. Please review and add your analysis before publishing.*
`;

  if (isNew && !existsSync(filepath)) {
    try {
      writeFileSync(filepath, content);
      console.log(`✅ Created draft article: ${filename}`);
    } catch (error) {
      console.error(`Error creating article ${filename}:`, error.message);
    }
  }
}

// Create draft article for curriculum change
function createCurriculumArticle(item, isNew) {
  const slug = `curriculum-${new Date().toISOString().split('T')[0]}-${Math.random().toString(36).substr(2, 9)}`;
  const filename = `${slug}.md`;
  const filepath = join(ARTICLES_PATH, filename);
  
  const content = `---
title: "Curriculum Update: ${item.title}"
date: ${new Date().toISOString()}
excerpt: "New curriculum information detected. Review and add your analysis."
image: "/placeholder.png"
category: "Curriculum"
tags: ["curriculum", "education", "auto-generated"]
status: "draft"
featured: false
---

## 🚨 Auto-Generated Article - Needs Review

A new curriculum item was detected on orangeusd.org:

**Title:** ${item.title}

**Source:** [View on Orange USD Website](${item.url})

**Detected:** ${new Date(item.scrapedAt).toLocaleDateString()}

---

## ✏️ TODO: Add Your Analysis

1. Review the curriculum information
2. Explain what's changing in parent-friendly language
3. Identify which grades are affected
4. Add your perspective and concerns
5. Update the title and excerpt
6. Change status to "published" when ready

---

## Key Questions to Address:

- What curriculum is changing?
- Which grade levels are affected?
- What's the timeline for implementation?
- How will this impact students?
- What are the pros and cons from a parent perspective?

---

*This article was auto-generated by the Orange United scraper. Please review and add your analysis before publishing.*
`;

  if (isNew && !existsSync(filepath)) {
    try {
      writeFileSync(filepath, content);
      console.log(`✅ Created draft article: ${filename}`);
    } catch (error) {
      console.error(`Error creating article ${filename}:`, error.message);
    }
  }
}

// Compare with previous data and detect changes
function detectChanges(previousData, currentData) {
  const changes = {
    newMeetings: [],
    newCurriculum: [],
    boardMembersChanged: false,
  };
  
  if (!previousData) {
    // First run - everything is "new" but don't create articles
    console.log('First run - baseline data saved');
    return changes;
  }
  
  // Detect new meetings
  currentData.meetings.forEach(meeting => {
    const exists = previousData.meetings?.some(m => m.url === meeting.url && m.title === meeting.title);
    if (!exists) {
      changes.newMeetings.push(meeting);
    }
  });
  
  // Detect new curriculum items
  currentData.curriculum.forEach(item => {
    const exists = previousData.curriculum?.some(c => c.url === item.url && c.title === item.title);
    if (!exists) {
      changes.newCurriculum.push(item);
    }
  });
  
  // Check if board members changed
  if (JSON.stringify(previousData.boardMembers) !== JSON.stringify(currentData.boardMembers)) {
    changes.boardMembersChanged = true;
  }
  
  return changes;
}

// Main scraper function
async function runScraper() {
  console.log('🍊 Orange United Scraper Starting...\n');
  
  // Load previous data
  const previousData = loadPreviousData();
  
  // Scrape current data
  const meetings = await scrapeBoardMeetings();
  const curriculum = await scrapeCurriculum();
  const boardMembers = await scrapeBoardMembers();
  
  const currentData = {
    lastScraped: new Date().toISOString(),
    meetings,
    curriculum,
    boardMembers,
  };
  
  // Detect changes
  const changes = detectChanges(previousData, currentData);
  
  // Report findings
  console.log('\n📊 Scraping Results:');
  console.log(`- Meetings found: ${meetings.length}`);
  console.log(`- Curriculum items found: ${curriculum.length}`);
  console.log(`- Board members found: ${boardMembers.length}`);
  
  if (changes.newMeetings.length > 0) {
    console.log(`\n🆕 NEW MEETINGS DETECTED: ${changes.newMeetings.length}`);
    changes.newMeetings.forEach(meeting => {
      console.log(`  - ${meeting.title}`);
      createMeetingArticle(meeting, true);
    });
  }
  
  if (changes.newCurriculum.length > 0) {
    console.log(`\n🆕 NEW CURRICULUM ITEMS DETECTED: ${changes.newCurriculum.length}`);
    changes.newCurriculum.forEach(item => {
      console.log(`  - ${item.title}`);
      createCurriculumArticle(item, true);
    });
  }
  
  if (changes.boardMembersChanged) {
    console.log(`\n🆕 BOARD MEMBERS CHANGED`);
  }
  
  if (changes.newMeetings.length === 0 && changes.newCurriculum.length === 0 && !changes.boardMembersChanged) {
    console.log('\n✅ No changes detected');
  }
  
  // Save current data
  saveData(currentData);
  
  console.log('\n✅ Scraper completed!');
  console.log(`Data saved to: ${DATA_PATH}`);
  
  return currentData;
}

// Run scraper
runScraper().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

