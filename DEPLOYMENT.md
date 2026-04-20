# Deployment Guide — Altivion × CNL Briefing Site

## Local Development

```bash
cd "CNL project/cnl-app"
npm run dev
# Opens at http://localhost:3000
```

## Assets Required Before Deploy

The following files must be placed in `/public/` before the site is complete:

- `chalk-river-map.jpg` — Desaturated Google Maps satellite screenshot of CNL Chalk River
  Coordinates: 46.0495°N, 77.3800°W
  Recommended: capture at zoom level 14–15, export at 1920×1080 minimum
  Apply grayscale filter in export or let the CSS filter handle it (already configured)
- `echonet-app-demo.mp4` — Short video of the iOS visualization app (optional, not yet wired into a section)

## Deploy to Vercel

1. Push repo to GitHub
2. Import project at vercel.com/new
3. Framework preset: Next.js (auto-detected)
4. Root directory: `CNL project/cnl-app`
5. Environment variables: none required
6. Deploy

## Privacy Configuration

- `noindex, nofollow` is set in both Next.js metadata and an explicit `<meta>` tag in layout.tsx
- No analytics, no tracking, no external API calls
- Verify after deploy: `curl -I https://your-domain.vercel.app | grep -i x-robots`

## Custom Domain (Optional)

In Vercel project settings → Domains:
- Add `cnl.altivion.ca` or a random subdomain for obscurity
- Or use Vercel's generated URL (e.g. `cnl-briefing-abc123.vercel.app`) and share only with CNL contacts

## Confirm noindex is active

```bash
curl -I https://your-deployed-url.vercel.app
# Look for: x-robots-tag: noindex, nofollow
```
