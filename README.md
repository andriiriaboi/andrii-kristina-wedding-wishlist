# Wedding Wishlist

Production-ready one-page React + Vite + TypeScript website prepared for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Personal details

Names, initials, date, contact destinations, default language, and image paths are kept in `src/config/weddingConfig.ts`.

The supplied portrait is used only on the opening screen and is loaded eagerly. To replace it, place an optimized file in `public/images/` and update its path in the configuration file.

## Vercel

Import the project into Vercel. The included `vercel.json` selects the Vite build and `dist` output automatically.
