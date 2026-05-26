# personal-web

Minimal, elegant website foundation for a collaborative pianist SMLLC, built with
Next.js App Router, Tailwind CSS, and Lucide React.

## Step 1: Project structure

Place files in the following locations:

```txt
/
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── src
    ├── app
    │   ├── about/page.tsx
    │   ├── contact/page.tsx
    │   ├── media/page.tsx
    │   ├── repertoire/page.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   └── layout
    │       ├── Footer.tsx
    │       └── Navbar.tsx
    └── data
        └── site.ts
```

## Step 2: Base configuration

- `next.config.ts` enables a strict Next.js app foundation.
- `postcss.config.mjs` wires Tailwind CSS into Next.js.
- `tailwind.config.js` defines the monochrome gallery palette plus a muted gold
  accent color.
- `src/app/globals.css` imports Tailwind and applies the base typography,
  selection color, and global page background.
- `tsconfig.json` enables strict TypeScript and the `@/*` import alias.

## Step 3: Routes

The App Router pages are:

- `/` -> `src/app/page.tsx`
- `/about` -> `src/app/about/page.tsx`
- `/repertoire` -> `src/app/repertoire/page.tsx`
- `/media` -> `src/app/media/page.tsx`
- `/contact` -> `src/app/contact/page.tsx`

## Step 4: Component and data separation

- Shared layout components live in `src/components/layout`.
- Navigation, business identity, repertoire placeholders, media placeholders, and
  contact data live in `src/data/site.ts`.
- Route files compose UI from the data module instead of hard-coding repeated
  site-wide values in multiple places.

## Step 5: Local development

```bash
npm run dev
```

Then open `http://localhost:3000`.
