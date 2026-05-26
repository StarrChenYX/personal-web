# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Static personal website for a collaborative pianist's SMLLC, built with Next.js 16 (App Router, Turbopack), React 19, TypeScript, and Tailwind CSS 4. No database, no external APIs, no authentication required.

### Development commands

All standard commands are in `package.json`:

- `npm run dev` — starts dev server on port 3000 (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript type-checking (`tsc --noEmit`)

### Notes

- Node.js v22+ and npm are sufficient; no other system dependencies needed.
- The dev server uses Turbopack and starts quickly (~250ms). Hot reload works automatically for all `src/` files.
- No environment variables or secrets are required.
- The site is fully static with all content hardcoded in `src/data/`. No CMS or database.
