# Implementation Plan: Motekar Teknologi Indonesia Company Profile

## Overview

Build a professional static company profile website for Motekar Teknologi Indonesia at `motekarindo.co.id`. The site presents Motekar as an IT consultant focused on web development, application installation, academic publishing systems, and server maintenance, with special credibility in higher-education applications such as OJS and ePrints.

The first version prioritizes clarity, trust, performance, SEO readiness, and easy deployment to Netlify or Cloudflare Pages.

## Primary Goals

- Present Motekar Teknologi Indonesia as a credible IT consulting company.
- Explain services, solutions, products, clients, and portfolio without overlap.
- Convert visitors into consultation leads through WhatsApp, email, or contact form links.
- Create a static, fast, maintainable site that can grow into a product/company platform later.

## Audience

- Perguruan tinggi.
- Pengelola jurnal ilmiah.
- Perpustakaan digital atau repository institusi.
- Organisasi/yayasan pendidikan.
- Perusahaan atau institusi yang membutuhkan website, server, dan aplikasi web yang stabil.

## Site Structure

```text
Home (/)
├── Layanan (/layanan)
├── Solusi (/solusi)
├── Product (/product)
├── Client (/client)
├── Portfolio (/portfolio)
├── Tentang Kami (/tentang)
└── Kontak (/kontak)
```

### Page Roles

#### Home

Homepage summarizes the company, strongest services, solution focus, client proof, selected portfolio, and conversion CTA.

Required sections:

- Hero with clear positioning.
- Service highlights.
- Higher-education solution highlight.
- Selected clients.
- Selected portfolio.
- Work process.
- CTA to contact.

#### Layanan

`Layanan` contains individual capabilities Motekar can perform.

Initial service list:

- IT Consultant.
- Web Development.
- Instalasi Aplikasi Web.
- Instalasi dan Konfigurasi OJS.
- Instalasi dan Konfigurasi ePrints.
- Maintenance Server.
- Migrasi Hosting / Server.
- Troubleshooting Aplikasi Web.
- Backup, restore, dan optimasi server.

#### Solusi

`Solusi` is not the same as `Layanan`. It packages multiple services around a client need or institutional use case.

Initial solution groups:

- Solusi Perguruan Tinggi.
  - Instalasi OJS.
  - Instalasi ePrints.
  - Website fakultas, prodi, atau institusi.
  - Maintenance server akademik.
- Solusi Pengelola Jurnal.
  - Instalasi OJS.
  - Upgrade / migrasi OJS.
  - Konfigurasi email.
  - Backup dan maintenance.
- Solusi Perpustakaan Digital.
  - Instalasi ePrints.
  - Konfigurasi repository.
  - Manajemen metadata dasar.
  - Optimasi server.
- Solusi Organisasi / Perusahaan.
  - Website company profile.
  - Aplikasi internal.
  - Server setup.
  - Maintenance.

#### Product

`Product` is reserved for Motekar-owned applications or future digital products. It should not be used as a package/pricing section.

For version 1, if no public product is ready, this page should still exist as a forward-looking page with honest copy:

> Motekar Teknologi Indonesia sedang mengembangkan produk digital untuk mendukung kebutuhan institusi pendidikan, pengelola jurnal, repository, dan operasional organisasi. Pengembangan produk dilakukan berdasarkan kebutuhan nyata dari project dan client yang kami tangani.

Possible product content states:

- `In development`.
- `Coming soon`.
- `Custom application by request`.
- Future real product detail pages.

#### Client

`Client` displays institutions or organizations that Motekar may publicly name.

Rules:

- Do not display client names or logos without permission.
- If permission is not available, use anonymized client categories.
- Store public display status in content data.

Client display formats:

- Logo grid for approved clients.
- Text list for approved non-logo clients.
- Category list for anonymized experience.

#### Portfolio

`Portfolio` shows actual project work and implementation experience. It is different from `Client`.

Portfolio card format:

- Project title.
- Client name or anonymized client type.
- Problem / need.
- Motekar solution.
- Services involved.
- Technologies.
- Outcome.
- Public visibility status.

Initial portfolio categories:

- Implementasi OJS untuk jurnal ilmiah.
- Instalasi ePrints repository.
- Maintenance server aplikasi akademik.
- Website profil institusi.
- Migrasi aplikasi PHP/MySQL.
- Troubleshooting downtime server.

#### Tentang Kami

Explains company identity, values, technical focus, and operating approach.

Tone:

- Professional.
- Clear.
- Grounded.
- Not overclaiming.

#### Kontak

Conversion page with direct contact options.

Required:

- WhatsApp CTA.
- Email CTA.
- Business address placeholder if available.
- Service inquiry form path or mailto fallback.

## Copywriting Direction

Use a clear, professional, trust-first voice.

Primary framework:

- AIDA for homepage.
- PAS for solution pages.
- BAB for portfolio/case-study pages.

Hero draft:

```text
Solusi Web, Server, dan Aplikasi Akademik untuk Institusi yang Butuh Sistem Stabil

Motekar Teknologi Indonesia membantu perguruan tinggi, pengelola jurnal, dan organisasi membangun, menginstal, serta merawat aplikasi web seperti OJS, ePrints, website institusi, dan server pendukungnya.
```

Primary CTA:

```text
Konsultasikan Kebutuhan Anda
```

Secondary CTA:

```text
Lihat Layanan
```

## Design Direction

Concept: calm technical trust.

The design should feel professional, stable, and technically capable. Avoid generic startup gradients, purple palettes, oversized decorative cards, and vague marketing visuals.

Visual principles:

- Clean corporate layout.
- Strong but restrained hierarchy.
- Flat green brand color.
- White and off-white backgrounds.
- Charcoal text.
- Subtle technical line/grid motifs where useful.
- Clear service and solution scanning.
- Responsive layout with no text overlap.

## Color Palette

Use a flat green brand palette with supporting neutral colors.

```text
Brand 50      #e8f5ed
Brand 100     #d1eadb
Brand 500     #22a455
Brand 700     #15803d
Brand 900     #102016

Ink           #102016
Muted         #5f6f66
Line          #dbe7df
Background    #f8fbf8
Surface       #ffffff
Surface Alt   #f0f7f2
Accent Teal   #0f766e
Accent Amber  #c77803
```

Usage:

- Primary CTA: `Brand 700`.
- CTA hover: `Brand 900`.
- Main text: `Ink`.
- Secondary text: `Muted`.
- Soft section background: `Brand 50` or `Surface Alt`.
- Borders: `Line`.
- Use `Accent Teal` and `Accent Amber` sparingly to avoid a one-note green interface.

## Typography

Recommended font pairing:

```text
Heading: Sora
Body: Source Sans 3
```

Fallback:

```css
font-family: Sora, ui-sans-serif, system-ui, sans-serif;
font-family: "Source Sans 3", ui-sans-serif, system-ui, sans-serif;
```

## Tech Stack

```text
Framework       Astro SSG
Language        TypeScript
Styling         Tailwind CSS
Content         Astro Content Collections
Runtime         Node.js 24.16.0 via mise
Package manager npm
Icons           Iconify or lucide-compatible icons
SEO             @astrojs/sitemap + custom SEO component
Deployment      Netlify / Cloudflare Pages
Build output    dist
```

### Node Version

Use a pinned Node.js version, not `lts`, to avoid future incompatibility when LTS changes.

```toml
# .mise.toml
[tools]
node = "24.16.0"
```

Optional compatibility file:

```text
# .nvmrc
24.16.0
```

## Tailwind Theme Tokens

Because styling uses Tailwind CSS, design tokens should live in `tailwind.config.ts`, not only in plain CSS variables.

Example direction:

```ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e8f5ed",
          100: "#d1eadb",
          500: "#22a455",
          700: "#15803d",
          900: "#102016",
        },
        ink: "#102016",
        muted: "#5f6f66",
        line: "#dbe7df",
        surface: "#ffffff",
        "surface-alt": "#f0f7f2",
        teal: "#0f766e",
        amber: "#c77803",
      },
      borderRadius: {
        card: "12px",
      },
      fontFamily: {
        heading: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};
```

Global CSS may still be used for base styles, font imports, and small non-utility defaults.

## Content Collections

Use Astro Content Collections for structured content.

Recommended structure:

```text
src/content/
├── services/
├── solutions/
├── products/
├── clients/
└── portfolio/
```

Use Markdown files for content that needs narrative body text:

```text
src/content/services/installasi-ojs.md
src/content/solutions/perguruan-tinggi.md
src/content/portfolio/implementasi-ojs-kampus.md
src/content/products/custom-academic-tools.md
```

Example service file:

```md
---
title: "Instalasi OJS"
summary: "Instalasi, konfigurasi, dan pendampingan awal Open Journal Systems."
category: "Aplikasi Akademik"
featured: true
---

Kami membantu pengelola jurnal menyiapkan OJS agar siap digunakan oleh editor,
reviewer, author, dan administrator jurnal.
```

For short structured data such as clients, Markdown is acceptable, but JSON/YAML may be used if it is cleaner.

Client data must include:

```yaml
name: "Nama Client"
category: "Perguruan Tinggi"
logo: "/clients/example.svg"
public: true
featured: true
```

Portfolio data must include:

```yaml
title: "Implementasi OJS untuk Jurnal Ilmiah"
client: "Perguruan Tinggi Swasta"
clientPublic: false
services:
  - "Instalasi OJS"
  - "Konfigurasi Server"
technologies:
  - "OJS"
  - "PHP"
  - "MySQL"
  - "Nginx"
outcome: "Platform jurnal siap digunakan oleh editor, reviewer, dan author."
featured: true
```

## Project Structure

```text
.
├── PLAN.md
├── .mise.toml
├── .nvmrc
├── astro.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── clients/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── netlify.toml
```

## Deployment

### Netlify

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Cloudflare Pages

```text
Build command: npm run build
Output directory: dist
Node version: 24.16.0
```

## Boundaries

Always:

- Keep the site static unless there is a clear product need for interactivity.
- Use Tailwind theme tokens for brand colors, font families, spacing, and radius.
- Keep content editable through Astro Content Collections where practical.
- Run build before considering implementation complete.
- Keep client names/logos private unless explicitly approved.

Ask first:

- Adding a CMS.
- Adding React/Svelte/Vue islands.
- Adding analytics or third-party tracking.
- Adding a form backend.
- Publishing real client names or logos.
- Changing the agreed navigation labels.

Never:

- Use unapproved client logos or claims.
- Use fake testimonials.
- Add secrets or API keys to the repo.
- Use `node = "lts"` in `.mise.toml`.
- Turn the company profile into an SPA without a strong reason.

## Implementation Tasks

### Phase 1: Project Foundation

#### Task 1: Scaffold Astro SSG Project

Description: Create the Astro project foundation with TypeScript, Tailwind CSS, and package scripts.

Acceptance criteria:

- `package.json` contains dev, build, and preview scripts.
- Astro starts locally.
- Tailwind CSS is integrated.
- TypeScript config exists.

Verification:

- `npm run build`

Dependencies: None.

Files likely touched:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `tailwind.config.ts`
- `src/styles/global.css`

Estimated scope: Medium.

#### Task 2: Pin Runtime and Deployment Config

Description: Add runtime and deployment files for consistent builds across local, Netlify, and Cloudflare Pages.

Acceptance criteria:

- `.mise.toml` pins Node.js `24.16.0`.
- `.nvmrc` contains `24.16.0`.
- `netlify.toml` publishes `dist`.

Verification:

- `mise install`
- `node --version`
- `npm run build`

Dependencies: Task 1.

Files likely touched:

- `.mise.toml`
- `.nvmrc`
- `netlify.toml`

Estimated scope: Small.

### Checkpoint: Foundation

- Astro project builds cleanly.
- Node version is pinned.
- Tailwind CSS works.
- Static output is generated in `dist`.

### Phase 2: Content Model

#### Task 3: Define Content Collections

Description: Create Astro Content Collection schemas for services, solutions, products, clients, and portfolio.

Acceptance criteria:

- Each collection has a schema.
- Public/client visibility fields exist.
- Featured flags exist for homepage highlights.
- Markdown content can be loaded in pages.

Verification:

- `npm run build`

Dependencies: Task 1.

Files likely touched:

- `src/content.config.ts`
- `src/content/services/*.md`
- `src/content/solutions/*.md`
- `src/content/products/*.md`
- `src/content/clients/*.md`
- `src/content/portfolio/*.md`

Estimated scope: Medium.

#### Task 4: Add Initial Content

Description: Add initial content for services, solutions, product placeholder, client placeholders, and portfolio placeholders.

Acceptance criteria:

- At least 8 services exist.
- At least 4 solution groups exist.
- Product page has honest coming-soon/custom-product content.
- Client entries support anonymous/public states.
- Portfolio entries include problem, solution, technologies, and outcome.

Verification:

- `npm run build`
- Manual content review.

Dependencies: Task 3.

Files likely touched:

- `src/content/services/*.md`
- `src/content/solutions/*.md`
- `src/content/products/*.md`
- `src/content/clients/*.md`
- `src/content/portfolio/*.md`

Estimated scope: Medium.

### Checkpoint: Content

- Content collections validate.
- No fake client claims exist.
- Page data can be queried without build errors.

### Phase 3: Layout and Pages

#### Task 5: Build Base Layout

Description: Implement global layout, header navigation, footer, SEO component, typography, and base responsive shell.

Acceptance criteria:

- Header includes Home, Layanan, Solusi, Product, Client, Portfolio, Tentang Kami, Kontak.
- Footer includes company summary and contact CTA.
- SEO component supports title, description, canonical, and Open Graph basics.
- Layout works on mobile and desktop.

Verification:

- `npm run build`
- Browser check at mobile and desktop widths.

Dependencies: Tasks 1 and 2.

Files likely touched:

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/Seo.astro`
- `src/styles/global.css`

Estimated scope: Medium.

#### Task 6: Build Homepage

Description: Create the homepage with hero, service highlights, solution highlights, selected client/portfolio sections, process, and CTA.

Acceptance criteria:

- Hero communicates Motekar's positioning in one viewport.
- Primary and secondary CTAs are visible.
- Featured services, solutions, clients, and portfolio render from content collections.
- No section depends on fake data.

Verification:

- `npm run build`
- Browser check for desktop and mobile.

Dependencies: Tasks 3, 4, and 5.

Files likely touched:

- `src/pages/index.astro`
- `src/components/Hero.astro`
- `src/components/ServiceCard.astro`
- `src/components/SolutionCard.astro`
- `src/components/PortfolioCard.astro`

Estimated scope: Medium.

#### Task 7: Build Main Section Pages

Description: Create pages for Layanan, Solusi, Product, Client, Portfolio, Tentang Kami, and Kontak.

Acceptance criteria:

- Each navigation item has a working page.
- Layanan and Solusi are clearly differentiated.
- Product page does not pretend unfinished products are launched.
- Client page respects public visibility status.
- Portfolio page supports anonymized projects.
- Contact page has clear WhatsApp/email CTAs.

Verification:

- `npm run build`
- Manual navigation check across all pages.

Dependencies: Tasks 3, 4, and 5.

Files likely touched:

- `src/pages/layanan.astro`
- `src/pages/solusi.astro`
- `src/pages/product.astro`
- `src/pages/client.astro`
- `src/pages/portfolio.astro`
- `src/pages/tentang.astro`
- `src/pages/kontak.astro`

Estimated scope: Medium.

### Checkpoint: Core Site

- All top-level pages exist.
- Navigation works.
- Homepage and section pages render real structured content.
- Build passes.

### Phase 4: Polish and Verification

#### Task 8: Responsive and Accessibility Pass

Description: Review and adjust layout, contrast, focus states, headings, labels, and mobile behavior.

Acceptance criteria:

- Text does not overlap at common mobile and desktop widths.
- Buttons and links have visible focus states.
- Heading order is logical.
- Color contrast is acceptable for normal text.

Verification:

- Browser check at 430px and 1440px widths.
- `npm run build`

Dependencies: Tasks 5, 6, and 7.

Files likely touched:

- `src/components/*.astro`
- `src/pages/*.astro`
- `src/styles/global.css`
- `tailwind.config.ts`

Estimated scope: Medium.

#### Task 9: SEO and Metadata Pass

Description: Add sitemap, metadata, canonical URLs, and page descriptions.

Acceptance criteria:

- Sitemap integration is configured.
- Each page has a unique title and meta description.
- Canonical base uses `https://motekarindo.co.id`.
- Social preview metadata exists.

Verification:

- `npm run build`
- Inspect generated HTML for metadata.

Dependencies: Task 5.

Files likely touched:

- `astro.config.mjs`
- `src/components/Seo.astro`
- `src/pages/*.astro`

Estimated scope: Small.

#### Task 10: Final Build and Browser QA

Description: Run final static build and inspect the website in browser before handoff.

Acceptance criteria:

- Build succeeds.
- No critical console errors.
- Pages load and navigate correctly.
- CTA links are correct.
- Mobile and desktop screenshots look coherent.

Verification:

- `npm run build`
- `npm run dev`
- Browser QA on homepage and top-level pages.

Dependencies: All prior tasks.

Files likely touched:

- No new files expected unless QA reveals fixes.

Estimated scope: Small.

### Checkpoint: Complete

- All planned pages are implemented.
- All content collections validate.
- Static build succeeds.
- Website is ready for Netlify or Cloudflare Pages deployment.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---:|---|
| Client names/logos cannot be published yet | Medium | Use anonymized categories and public flags in content schema. |
| Product page looks empty because products are future roadmap | Medium | Use honest positioning: in development, custom application by request, and roadmap. |
| Layanan and Solusi overlap | Medium | Keep Layanan as capabilities and Solusi as bundled use cases. |
| Green palette becomes monotonous | Low | Use white, charcoal, teal, and amber accents in restrained amounts. |
| Static site later needs dynamic forms | Low | Start with WhatsApp/email CTA; add Netlify Forms or another form backend only after approval. |
| Too many pages before content is ready | Medium | Build top-level pages with collection-driven cards and concise copy first. |

## Open Questions

- What is the official WhatsApp number for CTA links?
- What is the official email address?
- Are there approved client names/logos for public display?
- Which portfolio items may be named publicly?
- Does Motekar already have an official logo?
- Does the website need Indonesian only, or Indonesian plus English later?
- Will contact form submissions use email, Netlify Forms, or WhatsApp only for version 1?

