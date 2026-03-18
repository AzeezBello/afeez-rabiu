# Afeez Rabiu Portfolio

Portfolio website for **Afeez Olawale Rabiu**, a digital marketing executive and research-oriented copywriter. The site presents resume-backed experience, campaign results, portfolio links, and contact details in a statically generated Next.js application.

## Overview

This project is a marketing portfolio built with the Next.js App Router. It is designed to:

- Present Afeez's professional profile, experience, and case studies
- Expose clear contact paths for marketing and content opportunities
- Use a single content source so copy stays consistent across pages
- Ship with modern SEO defaults including metadata, sitemap, robots, JSON-LD, and social share images

## Tech Stack

- `Next.js 16` with the App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `shadcn/ui` component primitives

## Main Features

- Static portfolio pages for `/`, `/about`, `/case-studies`, and `/contact`
- Resume-driven content model stored in a shared TypeScript module
- Reusable UI sections for hero, stats, services, case studies, experience, CTA, and footer
- SEO-ready setup with:
  - canonical metadata
  - Open Graph and Twitter metadata
  - `robots.txt`
  - `sitemap.xml`
  - `manifest.webmanifest`
  - JSON-LD structured data
  - generated Open Graph and Twitter images

## Routes

- `/`
  Homepage with summary, stats, services, case studies, and experience highlights
- `/about`
  Bio, timeline, certifications, and tools
- `/case-studies`
  Resume-backed case studies plus public portfolio links
- `/contact`
  Contact options, service areas, and professional links
- `/robots.txt`
  Crawl instructions for search engines
- `/sitemap.xml`
  Generated sitemap for all public routes
- `/manifest.webmanifest`
  Web app manifest
- `/opengraph-image`
  Generated OG image
- `/twitter-image`
  Generated Twitter card image

## Project Structure

```text
app/
  about/page.tsx
  case-studies/page.tsx
  contact/page.tsx
  layout.tsx
  manifest.ts
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts
  twitter-image.tsx

components/
  case-card.tsx
  case-studies.tsx
  cta.tsx
  experience.tsx
  footer.tsx
  hero.tsx
  json-ld.tsx
  navbar.tsx
  services.tsx
  stats.tsx
  ui/

lib/
  og-image.tsx
  seo.ts
  site-content.ts
  utils.ts
```

## Content Model

The primary content source is [`lib/site-content.ts`](./lib/site-content.ts).

This file holds:

- profile details
- nav links
- social links
- stat blocks
- services
- case studies
- experience timeline
- certifications
- tools and platforms
- portfolio links
- contact focus areas

If you want to update the public-facing content, start there first. Most pages and sections render from that shared data rather than embedding copy directly in page files.

## SEO Setup

The SEO configuration is centralized in [`lib/seo.ts`](./lib/seo.ts).

It provides:

- site URL normalization
- default metadata
- page metadata helper
- canonical URLs
- shared keyword set
- person and website JSON-LD
- breadcrumb JSON-LD helper

### SEO files

- [`app/layout.tsx`](./app/layout.tsx)
  Applies root metadata and global structured data
- [`app/page.tsx`](./app/page.tsx)
  Adds homepage metadata and schema
- [`app/about/page.tsx`](./app/about/page.tsx)
  Adds about-page metadata and schema
- [`app/case-studies/page.tsx`](./app/case-studies/page.tsx)
  Adds case-study metadata and schema
- [`app/contact/page.tsx`](./app/contact/page.tsx)
  Adds contact-page metadata and schema
- [`app/robots.ts`](./app/robots.ts)
  Generates `robots.txt`
- [`app/sitemap.ts`](./app/sitemap.ts)
  Generates `sitemap.xml`
- [`app/manifest.ts`](./app/manifest.ts)
  Generates `manifest.webmanifest`
- [`app/opengraph-image.tsx`](./app/opengraph-image.tsx)
  Generates a social share image for Open Graph
- [`app/twitter-image.tsx`](./app/twitter-image.tsx)
  Generates a Twitter card image

## Environment Variables

Create an `.env.local` file and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for:

- canonical URLs
- sitemap entries
- robots sitemap reference
- structured data URLs

If it is not set, the site falls back to:

```text
https://afeez-rabiu.vercel.app
```

See [`.env.example`](./.env.example) for the committed example.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create local environment file

```bash
cp .env.example .env.local
```

Then update `NEXT_PUBLIC_SITE_URL` to your actual domain or local preview value.

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev`
  Start the local development server
- `npm run lint`
  Run ESLint
- `npm run build`
  Create a production build and validate route metadata
- `npm run start`
  Start the production server after building

## Updating Content

### Profile and messaging

Edit [`lib/site-content.ts`](./lib/site-content.ts).

### Layout or page structure

Edit the route files under [`app/`](./app) and section components under [`components/`](./components).

### SEO behavior

Edit [`lib/seo.ts`](./lib/seo.ts) and the metadata route files under [`app/`](./app).

### Social share image styling

Edit [`lib/og-image.tsx`](./lib/og-image.tsx).

## Deployment Notes

- Set `NEXT_PUBLIC_SITE_URL` in the production environment before deploying
- Run `npm run lint` and `npm run build` before shipping changes
- The public routes are statically generated, so deploys are fast and SEO-friendly

## Verification

Recommended pre-deploy checks:

```bash
npm run lint
npm run build
```

After deployment, verify:

- page titles and descriptions
- canonical URLs
- `https://your-domain.com/robots.txt`
- `https://your-domain.com/sitemap.xml`
- Open Graph previews
- structured data in Google Rich Results Test or schema validators

## Notes

- The site currently uses a code-based content model, not a CMS
- Contact details are intentionally public in the footer and contact page
- The generated metadata assumes a professional portfolio use case and should be reviewed if the site evolves into a blog or multi-author publication
