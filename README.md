# Wreck the Narrative — website

A gospel-first podcast website for *Wreck the Narrative* with John Hansman.
Built with **Astro** (static, TypeScript strict). Design ported from the original
hand-built landing page; copy from `CONTENT-DIRECTION.md`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the built site
```

## Pages

- `/` Home · `/episodes` + `/episodes/[slug]` · `/about` · `/subscribe` · `/contact` · 404

Episodes are pulled from the podcast **RSS feed at build time** (`src/lib/rss.ts`).
If the feed is empty or unreachable, the site falls back to the pre-launch
"Coming soon" state (the locked opening arc). The build never fails on the feed.

## Phase 1 — "Coming soon" mode (current)

Everything ships live before the real links exist. Any empty value in
`src/lib/site.ts` renders as a non-clickable **"Coming soon"** badge, and an
empty `PODCAST_RSS_URL` keeps the pre-launch state.

## Phase 2 — fill these in (`src/lib/site.ts`)

All of John's unknowns live in ONE file — no markup edits needed:

- `SITE_URL` — custom domain (also update `site` in `astro.config.mjs`)
- `PREMIERE_DATE` — e.g. `'July 2026'` (empty = "Coming soon")
- `PODCAST_RSS_URL` — the podcast host's RSS feed
- `GHL_WEBHOOK_URL` — GoHighLevel inbound webhook (email capture + contact form)
- `platforms[]` — Apple, Spotify, YouTube, Rumble, RSS links
- `socials[]` — X, YouTube, Instagram, Rumble profiles
- `THEME_SONG_URL` — theme song
- `ANALYTICS` — `'plausible' | 'fathom' | 'ga4'` + id

Search the repo for `TODO(john)` to find every open item.

## Forms

The email form (`NotifyForm`) and contact form post to the **GHL webhook** when
`GHL_WEBHOOK_URL` is set; otherwise they fall back to **Netlify Forms**
(the forms are already tagged `data-netlify`). On Netlify, submissions appear
under Site → Forms with no extra wiring.

## Deploy (Netlify or Vercel)

1. Push this folder to a GitHub repo.
2. Netlify: connect the repo (config in `netlify.toml`), or Vercel: import it
   (config in `vercel.json`). Framework preset = Astro, build `astro build`,
   output `dist/`.
3. Add the custom domain + HTTPS.
4. Create a **deploy/build hook** so new episodes rebuild the site (the podcast
   host can ping it, or schedule a daily rebuild).

## New episodes

New feed episodes appear on the next build. Point the podcast host's
"new episode published" webhook at the Netlify/Vercel deploy hook, or schedule a
daily rebuild, and episodes publish themselves.
