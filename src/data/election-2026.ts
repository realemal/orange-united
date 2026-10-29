// OUSD Board of Education, November 3, 2026 general election.
// Every factual claim carries a source. Candidate priorities are paraphrased
// from each candidate's own ballot statement (the court-revised versions posted
// by the OC Registrar of Voters). Do not add claims without a source.

export const LAST_UPDATED = '2026-10-29';
export const ELECTION_DATE = '2026-11-03';

export interface Source {
  label: string;
  url: string;
}

export interface RecordItem {
  topic: string;
  text: string;
  sources: Source[];
}

export interface Candidate {
  slug: string;
  name: string;
  area: string;
  incumbent: boolean;
  ballotDesignation: string;
  /** Paraphrase of the candidate's ballot statement. Empty if none was filed. */
  statement: string[];
  /** Public record: votes, official actions, documented public statements. */
  record: RecordItem[];
}

export const SOURCES = {
  statements: {
    label: '2026 OUSD candidate statements (Villa Park Community)',
    url: 'https://villapark.co/ousd-candidate-statements/',
  },
  voiceOfOcNotification: {
    label: 'Voice of OC, Sept. 2023',
    url: 'https://voiceofoc.org/2023/09/an-oc-school-district-adopts-transgender-notification-state-ag-issues-legal-threat/',
  },
  edsourceNotification: {
    label: 'EdSource, Sept. 8, 2023',
    url: 'https://edsource.org/2023/orange-unified-becomes-sixth-california-district-to-adopt-transgender-parental-notification-policy/697122',
  },
  ocIndependentPay: {
    label: 'OC Independent, Jan. 26, 2026',
    url: 'https://ocindependent.com/2026/01/ousd-board-of-education-members-vote-themselves-a-400-pay-increase/',
  },
  edsourcePay: {
    label: 'EdSource, 2026 (school board pay under AB 1390)',
    url: 'https://edsource.org/2026/california-school-board-pay-hikes/762341',
  },
  brownAct: {
    label: 'California Insider, 2023 (OC District Attorney Brown Act letters)',
    url: 'https://californiainsider.com/news/orange-unified-board-cleared-of-brown-act-violation-allegations-except-for-one-trustee-5257078',
  },
  appointments: {
    label: 'California Insider, May 10, 2024',
    url: 'https://californiainsider.com/news/orange-unified-board-appoints-2-new-members-after-recall-5647987',
  },
  caaspp: {
    label: 'EdSource CAASPP data, Orange Unified',
    url: 'https://caaspp.edsource.org/sbac/orange-unified-30666210000000',
  },
  ousdCaaspp: {
    label: 'OUSD news release, 2025 CAASPP',
    url: 'https://www.orangeusd.org/about-us/news/release-article/~board/2025-ousd-news/post/orange-unified-school-district-students-outperform-state-averages-on-2025-caaspp-assessments',
  },
  enrollment: {
    label: 'California Courier, Jan. 28, 2026',
    url: 'https://californiacourier.news/2026/01/orange-unified-claims-tight-budgets-then-nearly-triples-its-trustees-stipends/',
  },
} satisfies Record<string, Source>;

const payRaise = (extra = ''): RecordItem => ({
  topic: 'Trustee pay (January 2026)',
  text:
    'Voted with the full board to raise the maximum trustee stipend from $400 to $2,000 a month. The item was on the consent calendar; no trustee pulled it for discussion and it passed unanimously. A 2025 state law (AB 1390) raised the cap on board stipends, and at least three dozen California districts raised pay in 2026.' +
    extra,
  sources: [SOURCES.ocIndependentPay, SOURCES.edsourcePay],
});

const notification = (name: string, extra = ''): RecordItem => ({
  topic: 'Parental notification policy (Sept. 7, 2023)',
  text:
    `${name} was one of the board’s three minority trustees who did not return after the meeting was disrupted, and was not present when the board majority passed the policy 4-0.` +
    extra,
  sources: [SOURCES.voiceOfOcNotification, SOURCES.edsourceNotification],
});

const appointed = (area: string): RecordItem => ({
  topic: 'How they joined the board',
  text: `Appointed on May 2, 2024 by a unanimous board vote to fill the Area ${area} seat vacated by the March 2024 recall, chosen from 19 applicants across two seats. This is the first election for the seat since the appointment.`,
  sources: [SOURCES.appointments],
});

export const candidates: Candidate[] = [
  // Trustee Area 1
  {
    slug: 'andrea-yamasaki',
    name: 'Andrea Yamasaki',
    area: '1',
    incumbent: true,
    ballotDesignation: 'Governing Board Member, Trustee Area 1',
    statement: [
      'Cites years of school involvement, including PTA leadership and co-founding a parent group that backed Measure S.',
      'Priorities: fiscal oversight, student safety, and academic programs from AP to career training.',
      'Credits recent gains in test scores and graduation rates and says the focus now shifts to elementary campuses.',
    ],
    record: [
      notification(
        'Yamasaki',
        ' Yamasaki said afterward that the meeting was chaotic and that threats had been made against trustees in the minority.',
      ),
      payRaise(),
    ],
  },
  {
    slug: 'ivan-kokos',
    name: 'Ivan Kokos',
    area: '1',
    incumbent: false,
    ballotDesignation: 'Parent / Orange County Businessman',
    statement: [
      'Says too many students are not reading, writing, or doing math at grade level.',
      'Wants more spending directed to classrooms and raises concerns about district deficits.',
      'Pledges to strengthen parent-teacher partnership and to recruit and retain teachers.',
    ],
    record: [],
  },

  // Trustee Area 4
  {
    slug: 'sara-pelly',
    name: 'Sara Pelly',
    area: '4',
    incumbent: true,
    ballotDesignation: 'Governing Board Member, Trustee Area 4',
    statement: [
      'Former elementary teacher and principal.',
      'Priorities: facilities upgrades, directing resources to classrooms, and fiscal transparency.',
      'Cites her role in growing the Mandarin Immersion program and supports board stability.',
    ],
    record: [appointed('4'), payRaise()],
  },
  {
    slug: 'crystal-miles',
    name: 'Crystal Miles',
    area: '4',
    incumbent: false,
    ballotDesignation: 'Councilmember / Business Owner',
    statement: [
      'Priorities: budget transparency, public scrutiny of district spending, and support for teachers.',
      'Emphasizes parents’ rights and access to curriculum information.',
      'Cites the district’s 46% math proficiency rate as a reason for change.',
    ],
    record: [
      {
        topic: 'Trustee pay (January 2026)',
        text: 'A Villa Park city councilmember, Miles publicly criticized the board for approving the stipend increase on the consent calendar without discussion.',
        sources: [SOURCES.ocIndependentPay],
      },
    ],
  },
  {
    slug: 'armando-perez-serrato',
    name: 'Armando “Mando” Perez-Serrato',
    area: '4',
    incumbent: false,
    ballotDesignation: 'None listed',
    statement: [],
    record: [],
  },

  // Trustee Area 5
  {
    slug: 'kris-erickson',
    name: 'Kris Erickson',
    area: '5',
    incumbent: true,
    ballotDesignation: 'Governing Board Member, Trustee Area 5',
    statement: [
      'Attorney and former board president.',
      'Priorities: student achievement, facilities investment, transparent communication, and expanded career and technical options.',
      'Says district test scores are rising faster than other districts’ and cites $57 million in campus and technology improvements.',
    ],
    record: [
      notification('Erickson'),
      {
        topic: 'Closed-session disclosure (2023)',
        text: 'The Orange County District Attorney’s office found that Erickson violated the Brown Act by disclosing closed-session information to the Orange County Register. The DA cleared the rest of the board of the allegations it reviewed and recommended Brown Act refresher training for all trustees.',
        sources: [SOURCES.brownAct],
      },
      payRaise(),
    ],
  },
  {
    slug: 'chip-ahlswede',
    name: 'Chip Ahlswede',
    area: '5',
    incumbent: false,
    ballotDesignation: 'Parent / Businessman',
    statement: [
      'Says the board has drifted from its core purpose and has mismanaged public funds.',
      'Calls OUSD test scores among the lowest in Orange County.',
      'Promises more accountability and transparency to parents and taxpayers.',
    ],
    record: [],
  },

  // Trustee Area 7
  {
    slug: 'stephen-glass',
    name: 'Stephen Glass',
    area: '7',
    incumbent: true,
    ballotDesignation: 'Governing Board Member, Trustee Area 7',
    statement: [
      'Current board president; former teacher, principal, district administrator, and professor.',
      'Priorities: transparency, fiscal stewardship, safe campuses, and staff recruitment.',
      'Wants to accelerate student achievement while keeping valued programs.',
    ],
    record: [appointed('7'), payRaise()],
  },
  {
    slug: 'jack-chang',
    name: 'Jack Chang',
    area: '7',
    incumbent: false,
    ballotDesignation: 'Business Executive / Parent',
    statement: [
      'Presents himself as a parent voice focused on responsible spending and budget transparency.',
      'Wants a return to basics in reading, writing, math, and science.',
      'Cites the district’s 46% math proficiency rate.',
    ],
    record: [],
  },
];

export const areas = ['1', '4', '5', '7'].map((area) => ({
  area,
  candidates: candidates.filter((c) => c.area === area),
}));

export const districtFacts: RecordItem[] = [
  {
    topic: 'Test scores (2025 CAASPP)',
    text: 'About 59% of OUSD students met or exceeded state standards in English and about 46% in math. The district scored above the state average in both subjects.',
    sources: [SOURCES.caaspp, SOURCES.ousdCaaspp],
  },
  {
    topic: 'Enrollment',
    text: 'District enrollment has fallen roughly 15% over the past decade, and the district has been studying campus consolidations.',
    sources: [SOURCES.enrollment],
  },
  {
    topic: 'Ballot statement corrections',
    text: 'Before ballots were printed, a court ordered changes to parts of the statements filed by Ivan Kokos, Crystal Miles, and Jack Chang. The statements summarized here are the revised versions.',
    sources: [SOURCES.statements],
  },
];
