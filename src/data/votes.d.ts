// Voting Records Type Definitions

export interface VoteRecord {
  meetingId: string;    // e.g., "2025-11-04" or "2025-11-04-special"
  meetingDate: Date;
  itemId: string;       // e.g., "AB-123" or "Item 5.2"
  motion: string;       // e.g., "Adopt XYZ Curriculum for Grades K-5"
  votes: {
    'Erickson': Vote;
    'Yamasaki': Vote;
    'Page': Vote;
    'Vane': Vote;
    'Pelly': Vote;
    'Thomas': Vote;
    'Glass': Vote;
  };
  outcome: 'Passed' | 'Failed';
  voteCount: string;    // e.g., "7-0", "6-1", "4-3"
  sources: string[];    // URLs to meeting minutes, agenda PDFs
  category?: 'Curriculum' | 'Budget' | 'Policy' | 'Personnel' | 'Facilities' | 'Other';
  tags?: string[];
  notes?: string;
}

export type Vote = 'Yes' | 'No' | 'Abstain' | 'Absent';

export interface VoteSummary {
  trustee: string;
  area: number;
  totalVotes: number;
  yesVotes: number;
  noVotes: number;
  abstentions: number;
  absences: number;
  keyVotes: VoteRecord[];
}

