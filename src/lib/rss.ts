// ============================================================
// RSS LIBRARY — fetch + parse the podcast feed at BUILD TIME.
// Defensive by design: if the feed is empty, unreachable, or
// malformed, it returns [] and the build falls back to the
// pre-launch "coming soon" state. It never throws.
// ============================================================

import { XMLParser } from 'fast-xml-parser';
import { PODCAST_RSS_URL } from './site';

export interface FeedEpisode {
  title: string;
  slug: string;
  pubDateISO: string | null;
  dateLabel: string | null;
  description: string; // show-notes HTML/text from the feed
  summary: string;     // short plain-text teaser
  audioUrl: string | null;
  audioType: string | null;
  duration: string | null;
  episodeNumber: number | null;
  season: number | null;
  image: string | null;
  explicit: boolean;
  youtube: string | null;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80) || 'episode';
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function pick<T>(v: T | T[] | undefined): T | undefined {
  if (v === undefined) return undefined;
  return Array.isArray(v) ? v[0] : v;
}

function text(v: unknown): string {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'object' && v !== null && '#text' in (v as Record<string, unknown>)) {
    return String((v as Record<string, unknown>)['#text'] ?? '');
  }
  return String(v);
}

function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * Returns all episodes newest-first. Empty array = pre-launch state.
 */
export async function getEpisodes(): Promise<FeedEpisode[]> {
  const url = PODCAST_RSS_URL.trim();
  if (!url) return [];

  let xml: string;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'WreckTheNarrative/1.0 (+site build)' } });
    if (!res.ok) {
      console.warn(`[rss] feed returned ${res.status}; falling back to pre-launch state.`);
      return [];
    }
    xml = await res.text();
  } catch (err) {
    console.warn('[rss] feed unreachable; falling back to pre-launch state.', err);
    return [];
  }

  try {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      trimValues: true,
    });
    const doc = parser.parse(xml);
    const channel = doc?.rss?.channel ?? doc?.channel;
    if (!channel) return [];

    const rawItems = channel.item ? (Array.isArray(channel.item) ? channel.item : [channel.item]) : [];
    const channelImage =
      pick<string>(channel['itunes:image']?.['@_href']) ||
      text(channel.image?.url) ||
      null;

    const episodes: FeedEpisode[] = rawItems.map((item: Record<string, any>) => {
      const title = text(item.title) || 'Untitled episode';
      const guid = text(item.guid) || title;
      const descriptionRaw =
        text(item['content:encoded']) || text(item.description) || text(item['itunes:summary']) || '';
      const enclosure = pick<Record<string, any>>(item.enclosure);
      const epNum = Number(text(item['itunes:episode']));
      const seasonNum = Number(text(item['itunes:season']));
      const pubDateRaw = text(item.pubDate);
      const iso = pubDateRaw && !isNaN(new Date(pubDateRaw).getTime())
        ? new Date(pubDateRaw).toISOString()
        : null;
      const summaryText = stripHtml(descriptionRaw);

      return {
        title,
        slug: slugify(text(item['itunes:episode']) ? `${text(item['itunes:episode'])}-${title}` : title || guid),
        pubDateISO: iso,
        dateLabel: formatDate(iso),
        description: descriptionRaw,
        summary: summaryText.length > 220 ? summaryText.slice(0, 217).trimEnd() + '…' : summaryText,
        audioUrl: enclosure?.['@_url'] ?? null,
        audioType: enclosure?.['@_type'] ?? 'audio/mpeg',
        duration: text(item['itunes:duration']) || null,
        episodeNumber: Number.isFinite(epNum) && epNum > 0 ? epNum : null,
        season: Number.isFinite(seasonNum) && seasonNum > 0 ? seasonNum : null,
        image: pick<string>(item['itunes:image']?.['@_href']) || channelImage,
        explicit: /^(yes|true|explicit)$/i.test(text(item['itunes:explicit'])),
        youtube: null,
      };
    });

    // de-dupe slugs
    const seen = new Set<string>();
    for (const ep of episodes) {
      let s = ep.slug;
      let n = 2;
      while (seen.has(s)) s = `${ep.slug}-${n++}`;
      ep.slug = s;
      seen.add(s);
    }

    // newest first
    episodes.sort((a, b) => {
      const ta = a.pubDateISO ? Date.parse(a.pubDateISO) : 0;
      const tb = b.pubDateISO ? Date.parse(b.pubDateISO) : 0;
      return tb - ta;
    });

    return episodes;
  } catch (err) {
    console.warn('[rss] failed to parse feed; falling back to pre-launch state.', err);
    return [];
  }
}
