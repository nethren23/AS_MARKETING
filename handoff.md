# Allocate Space Marketing Site — Handoff

This file is the persistent context for this project. Read it at the start of
any session that begins after a compaction, and keep it updated as the project
evolves (branding decisions, file roles, copy state, deployment status).

## Project
Next.js 15.5.19 (App Router, TypeScript, React 19) marketing placeholder for
"Allocate Space" (formerly "Allocate"). Repo root:
`/Users/Mac/AS_MARKETING/AS_MARKETING`

## Deployment (Vercel)
- Live URL: https://allocate-marketing.vercel.app
- Vercel project name: `allocate-marketing` (project names must be lowercase)
- Already linked via `vercel link --yes --project allocate-marketing`
- Deploy with: `vercel --prod --yes`
- **STATUS: the live site still shows the OLD placeholder design.** The
  redesigned version (current code) has NOT been redeployed yet — user wants
  to redeploy once happy with the design ("Once you're happy with it, I can
  redeploy to Vercel with vercel --prod").
- Dev server: `npm run dev` (log written to /tmp/nextdev.log). If you hit a
  stale-HMR error like `TypeError: a[d] is not a function`, run
  `pkill -f "next dev"`, `rm -rf .next`, and restart — confirm with a curl for
  HTTP 200.

## Brand direction
- Inspiration sources: old site https://www.allocatespace.co (a dated Wix
  site) and the provided "ALLOCATE SPACE" logo (black wordmark, green "SPACE",
  green bracket motif `[ ]`).
- **Explicit instruction: do NOT replicate the old site's layout/feel — only
  take palette/branding cues and IMPROVE on it.**
- Palette (see app/globals.css):
  - `--accent: #39b54a` (brand green, same in light/dark)
  - `--accent-2`: #2f9e40 (light) / #4ecb60 (dark) — hover/active green
  - `--accent-blue`: #3940b2 (light) / #6c7bff (dark) — secondary glow accent
  - Light theme: white/near-black (`--bg #fff`, `--fg #15181a`)
  - Dark theme: near-black-green (`--bg #0b0f0d`, `--fg #eef2ef`)
- Logo: `public/logo.png` (486x210 PNG, converted from
  `/Users/Mac/Desktop/logo.png.avif` via `sips -s format png`). In dark mode
  the logo gets `filter: invert(1) hue-rotate(180deg)` to approximate a white
  wordmark while keeping the green accent — no second asset needed.

## Key files and roles
- `app/layout.tsx` — metadata (title/siteName "Allocate Space",
  `viewport.themeColor: "#ffffff"`); renders a `next/script`
  `beforeInteractive` inline script that sets `data-theme` on `<html>` from
  `localStorage` (falling back to `prefers-color-scheme`) to avoid FOUC; then
  `<ThemeToggle />` + `{children}`.
- `app/globals.css` — CSS variable theme tokens for `:root` (light) and
  `:root[data-theme="dark"]` (bg, fg, muted, accent, accent-2, accent-blue,
  border, card, grid-line, spotlight-color); body has a 0.3s
  background/color transition.
- `app/theme-toggle.tsx` + `theme-toggle.module.css` — client component, fixed
  top-right (20px/20px) 40x40px button with sun/moon SVGs, toggles
  `document.documentElement.dataset.theme` and persists to
  `localStorage.theme`.
- `app/interactive-frame.tsx` — client component rendered inside `.frame`:
  mousemove-driven parallax on the left/right bracket divs
  (`.bracketLeft`/`.bracketRight`) plus a cursor-follow radial-gradient
  spotlight (`.spotlight`, color via `--spotlight-color`). Respects
  `prefers-reduced-motion` (effect is a no-op if set).
- `app/page.tsx` — the page itself: grid background, `.frame` wrapper
  (logo header, headline, subhead, note, CTA) with ambient `.glow` + animated
  brackets + interactive overlay, and the footer.
- `app/page.module.css` — all layout/animation/responsive CSS: `.main`,
  `.glow` (+ dark override + `drift` keyframes), `.spotlight`, `.grid`,
  `.frame`/`.bracketLeft`/`.bracketRight` (+ `bracketGlow` keyframes), `.brand`/
  `.logo` (+ dark invert), `.headline`/`.accent`/`.subhead`/`.note`/`.actions`/
  `.primary`, footer styles (`.footer`, `.footerInner`, `.footerCol`,
  `.footerBrand`, `.footerLink`, `.footerAddress`, `.socialLink`, `.certRow`,
  `.certBadge`), and `@media` breakpoints at 640px and 520px plus
  `prefers-reduced-motion` overrides.

## Current page copy (live in app/page.tsx)
- Headline (user hand-edited, do not revert without asking):
  "Build **client workflows** without touching **code**" — "client workflows"
  and "code" are wrapped in `<span className={styles.accent}>`.
- Subhead: "Allocate is a no-code platform for consultants. Build workflows
  with forms, approvals, IoT data and AI, then push the same solution to every
  client site. No engineering needed."
- Supporting note (replaces the old "Under construction" badge, which felt too
  AI-generated): "We're finishing up. Full details coming soon."
- CTA: single button, "Get in touch" → `mailto:info@allocatespace.co`. (No
  other CTAs — user wants just this one.)
- Footer: copyright line, LinkedIn icon link + "Privacy Policy" link, contact
  column (info@allocatespace.co, +65 6270 0991, "21 Keppel Rd, #A2-07,
  Singapore 089067"), and a centered cert-badge row: "ISO/IEC 27001:2022 —
  Cert No. 110222" and "SAC Accredited Certification Body" (text pills).

## Open placeholders / outstanding items
- LinkedIn URL is `href="#"` — needs the real Allocate Space LinkedIn page.
- Privacy Policy link is `href="#"` — no privacy page exists yet.
- Redesigned site not yet redeployed to Vercel (see Deployment status above).

## Process notes
- No screenshot/browser tooling available in this sandbox (no chromium-cli,
  no playwright, no screencapture). Verify via `npm run build` success and
  curl HTTP 200; the user provides screenshots for visual feedback — trust
  their description of cert numbers etc. over guesses (e.g. cert number is
  "110222", not "712220").
- A `SessionStart` hook (matcher `compact`) is configured to inject this
  file's contents back into context after every compaction, with a reminder
  to update it.
