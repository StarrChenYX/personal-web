# personal-web

Minimal, elegant website foundation for a collaborative pianist, built with
Vite, React Router, Tailwind CSS, and Lucide React.

## Step 1: Project structure

Place files in the following locations:

```txt
/
├── index.html
├── package.json
├── postcss.config.mjs
├── public
│   └── _redirects
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── src
    ├── App.tsx
    ├── main.tsx
    ├── components
    │   ├── AboutPreview.tsx
    │   ├── AboutSection.tsx
    │   ├── BookingGuide.tsx
    │   ├── ContactCard.tsx
    │   ├── Hero.tsx
    │   ├── MediaGrid.tsx
    │   ├── RepertoireList.tsx
    │   ├── ServicesOverview.tsx
    │   └── layout
    │       ├── Footer.tsx
    │       └── Navbar.tsx
    ├── data
    │   ├── about.ts
    │   ├── contact.ts
    │   ├── home.ts
    │   ├── media.ts
    │   ├── repertoire.json
    │   └── site.ts
    ├── pages
    │   ├── AboutPage.tsx
    │   ├── ContactPage.tsx
    │   ├── HomePage.tsx
    │   ├── MediaPage.tsx
    │   └── RepertoirePage.tsx
    └── styles
        └── globals.css
```

## Step 2: Base configuration

- `vite.config.ts` enables React support and the `@/*` import alias.
- `postcss.config.mjs` wires Tailwind CSS into Vite.
- `tailwind.config.js` defines the monochrome gallery palette plus a muted gold
  accent color.
- `src/styles/globals.css` imports Tailwind and applies the base typography,
  selection color, and global page background.
- `tsconfig.json` enables strict TypeScript and the `@/*` import alias.
- `public/_redirects` lets Cloudflare Pages serve `index.html` for client-side
  routes such as `/about`.

## Step 3: Routes

The React Router routes are:

- `/` -> `src/pages/HomePage.tsx`
- `/about` -> `src/pages/AboutPage.tsx`
- `/repertoire` -> `src/pages/RepertoirePage.tsx`
- `/media` -> `src/pages/MediaPage.tsx`
- `/contact` -> `src/pages/ContactPage.tsx`

## Step 4: Component and data separation

- Shared layout components live in `src/components/layout`.
- Home page sections live in `src/components/Hero.tsx`,
  `src/components/AboutPreview.tsx`, and `src/components/ServicesOverview.tsx`.
- About page sections live in `src/components/AboutSection.tsx`, with copy in
  `src/data/about.ts`.
- Repertoire display lives in `src/components/RepertoireList.tsx`, with
  maintainable work entries in `src/data/repertoire.json`.
- Media video placeholders live in `src/components/MediaGrid.tsx`, with embed
  metadata in `src/data/media.ts`.
- Contact conversion sections live in `src/components/ContactCard.tsx` and
  `src/components/BookingGuide.tsx`, with inquiry data in `src/data/contact.ts`.
- Home-specific copy and services data live in `src/data/home.ts`.
- Navigation and business identity live in `src/data/site.ts`.
- Route files compose UI from the data module instead of hard-coding repeated
  site-wide values in multiple places.

## Step 5: Local development

```bash
pnpm dev
```

Then open the Vite local URL printed in the terminal, usually
`http://localhost:5173`.

## Step 6: Cloudflare Pages

Use these build settings:

- Package manager: `pnpm`
- Build command: `pnpm build`
- Build output directory: `dist`
