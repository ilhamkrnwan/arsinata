# Arsinata — Landing Site

This is the official landing site for **CV Arsinata Cipta Saderma** (brand: **Arsinata**), a construction company based in Sleman, Yogyakarta, Indonesia.

The site introduces the company to prospective clients — government institutions, PT KAI, retail/home owners, schools, and offices — and covers its three service lines:

- **Renovasi Fasilitas** — interior, MEP, finishing
- **Konstruksi Bangunan** — structure, architecture, civil works
- **Konsultasi & Perencanaan** — RAB, BoQ, scheduling

Site content is written in **Indonesian**.

## Tech Stack

Built with a modern, static-friendly Nuxt setup:

- [Nuxt 4](https://nuxt.com) with SSR enabled and the home page prerendered
- [Nuxt UI](https://ui.nuxt.com) for components and theming
- [Tailwind CSS 4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [pnpm](https://pnpm.io) as the package manager

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, services, stats, process, work, guarantees, contact CTA |
| `/services` | Service offerings in detail |
| `/portfolio` | Selected projects |
| `/about` | Company background, values, commitments |
| `/contact` | Contact details and inquiry form |

Most sections on the home page live as components under `app/components/` (e.g. `HeroSection.vue`, `ProcessSection.vue`, `StatsBand.vue`).

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

## Useful Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the development server with hot reload |
| `pnpm build` | Build the application for production |
| `pnpm generate` | Prerender the site to static HTML in `dist/` |
| `pnpm preview` | Locally preview the production build |
| `pnpm lint` | Run ESLint across the codebase |
| `pnpm typecheck` | Check TypeScript types |

## Project Structure

```
app/                  # Nuxt application code
  assets/             # Global styles, e.g. main.css
  components/         # UI and section components (NavHeader, HeroSection, ...)
  pages/              # index, services, portfolio, about, contact
  utils/              # Shared helpers
  app.config.ts       # App-level configuration
  app.vue             # Root component
nuxt.config.ts        # Nuxt configuration
PRODUCT.md            # Source of truth for product & brand facts
public/               # Static assets served as-is
```

## Content & Brand Facts

**`PRODUCT.md`** is the single source of truth for company facts — services, commitments, contact details, statistics, and rules about what must not be invented (e.g. no fabricated clients, testimonials, or claims). When editing site content, keep it consistent with that file.

## Deployment

Any standard Nuxt deployment target works. See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for platform-specific guides. For a fully static site, prefer `pnpm generate` and host the resulting `dist/` folder.

## License

[MIT](LICENSE)