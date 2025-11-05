// Generate ICS calendar file for recurring board meetings
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Calculate next first Tuesday at 6 PM
const nextFirstTuesday = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1, 18, 0, 0);
  while (start.getDay() !== 2) start.setDate(start.getDate() + 1);
  if (start < now) {
    const m = new Date(now.getFullYear(), now.getMonth() + 1, 1, 18, 0, 0);
    while (m.getDay() !== 2) m.setDate(m.getDate() + 1);
    return m;
  }
  return start;
};

const dt = nextFirstTuesday();
const y = dt.getFullYear();
const mo = String(dt.getMonth() + 1).padStart(2, '0');
const da = String(dt.getDate()).padStart(2, '0');
const DTSTART = `${y}${mo}${da}T020000Z`; // 6 PM PST = 02:00 UTC (approx)

const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Orange United//Board Meetings//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:OUSD Board Meetings
X-WR-TIMEZONE:America/Los_Angeles
X-WR-CALDESC:Orange Unified School District Board Meetings
BEGIN:VEVENT
UID:ousd-board-meeting@orangeunited.org
DTSTART:${DTSTART}
DURATION:PT3H
SUMMARY:Orange Unified School Board Meeting
DESCRIPTION:Monthly Orange Unified School District Board of Education meeting. Public attendance welcome. More info: https://orangeunited.org/events
LOCATION:District Office Board Room\\, 1401 N. Handy Street\\, Orange\\, CA 92867
RRULE:FREQ=MONTHLY;BYDAY=1TU
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

const outputPath = join(__dirname, '../../public/board-meeting.ics');
writeFileSync(outputPath, ics);
console.log('✅ Generated board-meeting.ics');

