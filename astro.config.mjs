import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(john): set to the real custom domain before launch.
// Keep in sync with SITE_URL in src/lib/site.ts.
const SITE_URL = 'https://www.wreckthenarrative.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  // Static output (default). Deployable to Netlify/Vercel free tier.
});
