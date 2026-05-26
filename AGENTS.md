<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

### Tech stack
- **Framework:** Next.js 16 (App Router, Turbopack) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`
- **Linting:** ESLint 9 with `eslint-config-next`

### Common commands
| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (default port 3000) |
| Lint | `npm run lint` |
| Type-check | `npx tsc --noEmit` |
| Build | `npm run build` |
| Start prod | `npm run start` |

### Notes
- The dev server uses Turbopack by default in Next.js 16 — no extra flags needed.
- Source code lives under `src/app/` (App Router with `src` directory).
- No database or external services are required; the site is fully static.
- After installing new npm packages, the running dev server picks up changes automatically via HMR — no restart needed.
