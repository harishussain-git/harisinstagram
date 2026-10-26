# harisinstagram

A mobile-friendly Instagram-inspired Islamic feed built with Next.js App Router, React, TypeScript, and Lucide icons. No accounts, database, or backend services.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if script execution is restricted.

## Build

```sh
npm run build
```

The app exports static files to `out/`, ready for static hosting.

## Content and behavior

Edit the `posts` and `stories` arrays in `app/page.tsx` to replace content. Images load from Unsplash; Google Fonts also require an internet connection. The architecture photos are illustrative stock images.

Likes, bookmarks, and appearance are stored on this browser. Comments and follows last for the current session. Story navigation, category filters, post search, saved posts, sharing, and mobile navigation work without signing in. The feed is intentionally finite with a caught-up message. This is an independent UI demo, not affiliated with Instagram.
