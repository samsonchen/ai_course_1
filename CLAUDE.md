# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repo builds a **mobile-only static restaurant menu website** for 香茅廚房 Lemongrass Kitchen (Thai restaurant). Stack: **React 18 + TypeScript + Vite**, deployed to GitHub Pages via GitHub Actions. No backend, no API calls — all data loaded statically from `src/data/`.

## Development Commands

```bash
npm install
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # Output to dist/
npm run preview  # Preview the dist/ build locally
```

## Architecture

### Data Flow

```
src/data/menu-raw.ts   (Chinese-only, edited by restaurant staff)
        │
        ▼
src/data/menu-i18n.ts  (4-language full data: zh/en/ja/ko — translate from raw)
        │
        ▼
React components read menu-i18n.ts → render based on user's selected language
```

- **`menu-raw.ts`**: Simplified format — Chinese only, minimal nesting.
- **`menu-i18n.ts`**: Full 4-language format. Each text field is `{ zh, en, ja, ko }`. IDs are `{category}-{3-digit-sequence}`.
- **`src/data/tags.ts`**: Tag code → icon + 4-language label mapping (codes: R ⭐, 1 🌶️, 2 🌶️🌶️, 3 🔥, P 🐷, B 🐂, L 🐑, V 🥬, H ☪️).
- **`src/data/site-info.ts`**: Restaurant name, dining rules in all 4 languages.

### Language State

Managed via a React Context + custom hook (`src/hooks/useLanguage.tsx`). Language switching is in-page with no reload.

### Key UI Behaviors

- **Language switcher**: sticky at top of page
- **Category nav**: sticky tab bar below language switcher, smooth-scrolls to sections
- **Menu cards**: show image if available (`/images/{filename}`), otherwise display `emoji` enlarged; all prices prefixed with `NT$`
- **Item detail modal**: overlay with larger image supporting pinch-to-zoom; locks body scroll while open
- Images use lazy loading

## Design Reference

The `.pen` file (`menu.pen`) contains the Pencil.dev design. **Read it only via the `pencil` MCP tools** — never with `Read` or `Grep`. Design is mobile-first at 375px width.

## Deployment

Vite base is `/ai_course_1/`. GitHub Actions workflow at `.github/workflows/deploy.yml` deploys to GitHub Pages on push to `main`. Set Source to **GitHub Actions** in repo Settings → Pages.

## Images

Product images live in `public/images/`. When `image` is `null` in menu data, render the item's `emoji` as a large centered fallback.
