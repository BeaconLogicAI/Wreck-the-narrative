// "Also on the board" — John's topic vault (CONTENT-DIRECTION.md §3, 2026-10-26).
// Working titles. Scripture anchors are prep starting points, NOT site quotes.
// Verify every reference and quote in context before recording (project rule).

import type { Lane } from './opening-arc';

export interface VaultTopic {
  title: string;
  lane: Lane;
  scripture: string; // study anchors for prep (not displayed as quotes)
}

export const topicVault: VaultTopic[] = [
  { title: "The Big Lie: Sin Isn't Real and Jesus Isn't Needed", lane: 'The Heart', scripture: 'Rom 3:23; Rom 6:23; John 14:6; Acts 4:12' },
  { title: '"I Never Knew You" — what knew really means', lane: 'The Heart', scripture: 'Matt 7:21–23; John 10:14; Gal 4:9' },
  { title: 'How to Stop Going Back to Sin', lane: 'The Heart', scripture: 'Rom 6:1–14; 1 Cor 10:13; Gal 5:16–17; 2 Pet 2:22' },
  { title: 'How Much Are You Willing to Lose for Christ?', lane: 'The Home', scripture: 'Luke 14:25–33; Matt 16:24–26; Phil 3:7–8' },
  { title: 'Why We Need Masculine Men', lane: 'The Home', scripture: '1 Cor 16:13–14; Eph 5:25; 1 Tim 5:8' },
  { title: "Man's Utopia vs God's Promises", lane: 'The Public Square', scripture: 'Gen 11:1–9; Heb 11:10, 16; Rev 21:1–5' },
  { title: 'God Isn’t Partisan. He Cares About the Results Leaders Bring.', lane: 'The Public Square', scripture: 'Prov 14:34; Prov 29:2; Isa 10:1–2' },
  { title: 'Why Christians Need to Be Involved in Politics', lane: 'The Public Square', scripture: 'Matt 5:13–16; Jer 29:7; Prov 29:2' },
  { title: "Your Fight Isn't Political. It's Worldview.", lane: 'The Public Square', scripture: 'Eph 6:12; Col 2:8; Rom 12:2' },
  { title: "Be Hated for Jesus, Not Because You're a Jerk", lane: 'The Public Square', scripture: '1 Pet 4:14–16; John 15:18–19; Col 4:6' },
  { title: 'Love Thy Neighbor: Government vs Personal Responsibility', lane: 'The Public Square', scripture: 'Luke 10:25–37; Gal 6:10; 2 Thess 3:10; Rom 13:1–7' },
  { title: 'Is It Wrong to Be Rich?', lane: 'The Public Square', scripture: '1 Tim 6:9–10, 17–19; Mark 10:23–27; Deut 8:18' },
];

export const lanes: Lane[] = ['The Heart', 'The Home', 'The Public Square'];
