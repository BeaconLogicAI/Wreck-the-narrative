// ============================================================
// SITE CONFIG — single source of truth for everything John fills in.
// Phase 2 = paste real values here. Empty string => "Coming soon"
// (platform/social links) or pre-launch state (RSS). No code changes.
// ============================================================

// TODO(john): real custom domain (keep in sync with astro.config.mjs `site`).
export const SITE_URL = 'https://www.wreckthenarrative.com';

export const SITE_NAME = 'Wreck the Narrative';
export const HOST_NAME = 'John Hansman';

// TODO(john): confirm tagline still fits the gospel-first show.
export const SITE_TAGLINE = 'They write the narrative. We wreck it.';

export const SITE_DESCRIPTION =
  'A weekly gospel-first show. Every week John Hansman names a lie — in our own hearts first, then in the culture — and wrecks it with what Jesus says. On a John 10:10 spine.';

// TODO(john): premiere date, e.g. 'July 2026'. Empty => the site says "Coming soon".
export const PREMIERE_DATE = '';

// TODO(john): theme-song URL. Empty => the "Hear the theme" button stays hidden.
export const THEME_SONG_URL = '';

// TODO(john): podcast RSS feed URL (host already chosen).
// Empty or unreachable at build => pre-launch state (opening arc as "Coming soon").
export const PODCAST_RSS_URL = 'https://feed.podbean.com/wreckthenarrative/feed.xml';

// TODO(john): GoHighLevel inbound webhook URL for email capture + contact form.
// Empty => Netlify Forms fallback (see NotifyForm/contact form).
export const GHL_WEBHOOK_URL = '';

// TODO(john): privacy-friendly analytics. provider: '' | 'plausible' | 'fathom' | 'ga4'.
export const ANALYTICS: { provider: '' | 'plausible' | 'fathom' | 'ga4'; id: string } = {
  provider: '',
  id: '', // Plausible/Fathom domain or GA4 measurement id
};

// TODO(john): Podbean Patron page URL (Podbean dashboard → Monetization → Patron).
// Empty => the Support buttons render as non-clickable "coming soon".
export const SUPPORT_URL = '';
export const SUPPORT_TIERS: { label: string }[] = [
  { label: '$5 / mo' },
  { label: '$10 / mo' },
  { label: 'Any amount' },
];

export type IconName =
  | 'apple' | 'spotify' | 'youtube' | 'rumble' | 'rss'
  | 'x' | 'instagram' | 'play' | 'bell' | 'arrow' | 'mail';

export interface PlatformLink {
  name: string;
  action: string; // "Listen on", "Watch on", "Subscribe via"
  url: string;     // TODO(john) — empty => "Coming soon"
  icon: IconName;
}

// TODO(john): paste the real show links. Empty url => non-clickable "Coming soon".
export const platforms: PlatformLink[] = [
  { name: 'Apple Podcasts', action: 'Listen on', url: '', icon: 'apple' },
  { name: 'Spotify', action: 'Listen on', url: '', icon: 'spotify' },
  { name: 'YouTube', action: 'Watch on', url: '', icon: 'youtube' },
  { name: 'Rumble', action: 'Watch on', url: '', icon: 'rumble' },
  { name: 'RSS Feed', action: 'Subscribe via', url: '', icon: 'rss' },
];

export interface SocialLink { name: string; url: string; icon: IconName; }

// TODO(john): real profile URLs. Empty url => shown but non-clickable.
export const socials: SocialLink[] = [
  { name: 'X', url: '', icon: 'x' },
  { name: 'YouTube', url: '', icon: 'youtube' },
  { name: 'Instagram', url: '', icon: 'instagram' },
  { name: 'Rumble', url: '', icon: 'rumble' },
];

export const nav = [
  { label: 'Episodes', href: '/episodes' },
  { label: 'About', href: '/about' },
  { label: 'Subscribe', href: '/subscribe' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

// The kicker/status pill text. Uses the premiere date once John sets it.
export const statusLabel = PREMIERE_DATE
  ? `New Show · Premieres ${PREMIERE_DATE}`
  : 'New Show · Coming Soon';

export const hasFeed = PODCAST_RSS_URL.trim().length > 0;
