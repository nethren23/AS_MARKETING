# Allocate — Marketing Site

An "under construction" placeholder for [allocate.com](https://allocate.com), built with
[Next.js](https://nextjs.org) (App Router + TypeScript) and intended for deployment on
[Vercel](https://vercel.com).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deploying to Vercel

This repo is a zero-config Next.js project — Vercel detects the framework automatically.

**Option A — GitHub integration (recommended)**

1. Go to [vercel.com/new](https://vercel.com/new) and import this GitHub repository.
2. Keep the defaults (Framework preset: **Next.js**). No environment variables are required.
3. Click **Deploy**. Vercel returns a production URL (e.g. `https://<project>.vercel.app`).
4. Every push to the production branch redeploys automatically.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel        # first run links/creates the project
vercel --prod # deploy to production and print the URL
```

## Pointing the domain

Once the deployment is live, add `allocate.com` under the Vercel project's
**Settings → Domains** and update the DNS records as instructed. (Handled separately.)

## Project structure

```
app/
  layout.tsx        # metadata, fonts, <html> shell
  page.tsx          # the under-construction landing page
  globals.css       # base styles / theme tokens
  page.module.css   # page-scoped styles
public/
  favicon.svg       # favicon + app icon
  icon.svg
```

## Customizing

- Contact email: `CONTACT_EMAIL` in `app/page.tsx`.
- Copy / headline: `app/page.tsx`.
- Colors / theme: CSS variables in `app/globals.css`.
