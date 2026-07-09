# shalom.design

This repo is **shalom.design** — the design practice of Shalom Ormsby. It's the seller: the personal brand under which client work is offered.

## Three-layer architecture

- **shalom.design** *(this repo)* — the practice. The seller, the personal brand.
- **[PreflightUX](https://github.com/preflightux/preflightux)** — a separate instrument/protocol with its own repo. Not merged, vendored, or referenced here.
- **[OpenCosmos](https://opencosmos.ai/)** — the MIT substrate, consumed only as published npm packages (`@opencosmos/ui`). Its internals are never copied into this repo.

## Status

Site content is intentionally minimal. The practice's offer language — service descriptions, pricing, positioning — is pending customer validation and deliberately unwritten. What ships here is a truthful placeholder, not a marketing site.

## Stack

Next.js (App Router) + TypeScript, styled with `@opencosmos/ui` design tokens and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deployment

Deployed on Vercel. The `shalom.design` domain is connected via the Vercel dashboard.
