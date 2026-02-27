# Maison Velours — Perfume Showcase

A premium, frontend-only product showcase for a luxury perfume brand concept called **Maison Velours**. The focus is a clean design system, consistent spacing, and an editorial layout that feels intentionally composed (not templated).

## Brand concept

Maison Velours is a fictional Parisian perfume house focused on intimate, quiet luxury fragrances. The design language emphasizes restraint, editorial spacing, and tactile elegance rather than loud visual marketing.

## Tech stack (and why)

- **Next.js (App Router)**: simple routing for landing, listing, and product detail pages, with a production-grade dev/build pipeline.
- **React + TypeScript**: strict types for product data and components, safer refactors, and fewer runtime surprises.
- **CSS + design tokens**: a small palette and spacing scale (CSS variables) to keep the UI consistent and easy to extend.

## Setup (exact commands)

From the project root:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
npm run start
```

## Design decisions

- **Typeface choice**:
  - **Playfair Display** for headings (high-contrast serif, editorial feel).
  - **Inter** for body (neutral, highly legible).
  - Imported using `next/font` and exposed as CSS variables.
- **Palette rationale**:
  - Warm, parchment-like background (`--color-bg`) and near-black text (`--color-text`) for a quiet luxury baseline.
  - Gold accent (`--color-accent`) used sparingly for CTAs and hover underlines.
  - Muted copy (`--color-muted`) for secondary information.
- **Layout logic**:
  - `Container` enforces a consistent max-width and horizontal padding.
  - A strict spacing scale (`--space-*`) is used across layout, components, and sections.
  - Listing grid targets **3 / 2 / 1** columns (desktop/tablet/mobile) per assignment.
- **Imagery**:
  - Consistent placeholder images are generated as inline SVG data URIs so the UI stays cohesive and there are no missing-asset errors during review.

## Known limitations / trade-offs

- **No backend**: products are static and stored locally for predictable review.
- **Placeholders**: the inline SVG imagery is intentionally minimal; swapping to real photography is a drop-in change (update `product.image`).
- **Linting**: ESLint is configured (`next/core-web-vitals`) but rules may be tightened further depending on team conventions.

