// The locked opening arc, in episode order.
// Source: "WTN - Master Topic List.docx" (Oct 30, 2026) — narrative / Bible / gospel gap.
// Blurbs distill each episode's gospel gap. Shown as "Coming soon" until the RSS feed has real episodes.
// (The doc's five "new candidates" are backlog ideas and are intentionally not published here.)

export type Lane = 'The Heart' | 'The Home' | 'The Public Square';

export interface ArcEpisode {
  number: string;
  title: string;
  blurb: string;
  lane: Lane;
  scripture?: string;
}

export const openingArc: ArcEpisode[] = [
  {
    number: '01',
    title: "Man's Utopia vs. God's Promises",
    blurb: 'Every revolution promises paradise through the right politics or science. But God builds the city — a perfect world is a gift to receive, not a project to engineer.',
    lane: 'The Public Square',
    scripture: 'Hebrews 11:10',
  },
  {
    number: '02',
    title: 'Why Christians Need to Be Involved in Politics',
    blurb: '"Keep your faith private" silences you; "win at any cost" corrupts you. The gospel is both why we engage and how — truth without hatred, because we were enemies Christ loved.',
    lane: 'The Public Square',
    scripture: 'Romans 5:8',
  },
  {
    number: '03',
    title: 'God Cares About the Results, Not the Party',
    blurb: "He doesn't crown our candidate, and He isn't absent. We already have a King — which frees us to engage without idolatry and lose an election without losing our peace.",
    lane: 'The Public Square',
    scripture: 'Daniel 2:21',
  },
  {
    number: '04',
    title: 'Loving Thy Neighbor: Government vs. Personal Responsibility',
    blurb: "Compassion isn't measured in public spending. The state can redistribute money; only the gospel redistributes the self — the Samaritan, not the bystander.",
    lane: 'The Public Square',
    scripture: 'Luke 10:33',
  },
  {
    number: '05',
    title: 'Is It Wrong to Be Rich?',
    blurb: "Wealth isn't automatic guilt, and envy isn't virtue. The gospel dethrones money for everyone — freeing the rich from trusting it and the resentful from craving it.",
    lane: 'The Public Square',
    scripture: '1 Timothy 6:17',
  },
  {
    number: '06',
    title: 'How to Stop Going Back to Sin',
    blurb: 'Behavior hacks fail because the root is identity, not habit. Grace removes the shame that drives the secret relapse and supplies the power willpower never had.',
    lane: 'The Heart',
    scripture: 'John 8:36',
  },
  {
    number: '07',
    title: "The 'Never Knew You' Verse",
    blurb: "You're not saved by how well you know doctrine or perform religion — but by being known. The weight shifts from your performance to His pursuit.",
    lane: 'The Heart',
    scripture: 'Matthew 7:23',
  },
  {
    number: '08',
    title: 'How Much Are You Willing to Lose for Christ?',
    blurb: 'The culture fears loss because it has no treasure worth losing everything for. The gospel gives one: Christ Himself. Loss for Him isn’t subtraction — it’s exchange.',
    lane: 'The Heart',
    scripture: 'Philippians 3:8',
  },
  {
    number: '09',
    title: 'Why We Need Masculine Men',
    blurb: '"Toxic" shame on one side, "alpha" ego on the other — both reduce men to appetites. Christ is the true man: strength spent entirely for others at the cross.',
    lane: 'The Home',
    scripture: '1 Corinthians 16:13',
  },
  {
    number: '10',
    title: 'Sin Isn’t Real and Jesus Isn’t Needed',
    blurb: 'If people are merely mistaken, Jesus is optional; if people are sinners, He is everything. The denial of sin — not sin itself — is what keeps us from the cross.',
    lane: 'The Heart',
    scripture: 'Romans 3:23',
  },
];
