// The locked 6-episode opening arc (locked 2026-09-06).
// Source: CONTENT-DIRECTION.md §3 + GOSPEL-ARC-AND-EPISODE-01.md.
// Shown as "Coming soon" until the RSS feed has real episodes.

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
    title: "The Lie That You're Not Enough",
    blurb: "Jesus doesn't upgrade your performance. He gives you life so you can stop auditioning.",
    lane: 'The Heart',
    scripture: 'John 10:10',
  },
  {
    number: '02',
    title: "The Lie That You're Not Valuable",
    blurb: 'The world prices people like products. The gospel says your value is a gift, not a market score.',
    lane: 'The Heart',
  },
  {
    number: '03',
    title: 'The Lie That Your Shame Is Who You Are',
    blurb: 'Jesus separates what you did and what was done to you from who you are, then walks you into the light.',
    lane: 'The Heart',
  },
  {
    number: '04',
    title: 'The Lie That You Have to Perform to Belong',
    blurb: 'The enemy steals belonging and sells it back as hustle. In Christ, belonging comes first.',
    lane: 'The Heart',
  },
  {
    number: '05',
    title: 'The Lie That Fear Is Wisdom',
    blurb: 'Anxiety dressed up as prudence runs the news, politics and money. Jesus refuses to let fear rule.',
    lane: 'The Heart',
  },
  {
    number: '06',
    title: 'Why We Wreck Narratives From the Inside Out',
    blurb: 'We start with the gospel so the culture episodes are witness, not another rage show.',
    lane: 'The Public Square',
  },
];
