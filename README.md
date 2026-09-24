# Digital Chautari — Next.js

Next.js App Router + TypeScript + Tailwind CSS v4 port of `reference/digital-chautari.html`.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npx tsc --noEmit
npm run build
```

## Structure

- `app/` — routes: `/`, `/services`, `/products` (`?tab=eco|studio|physio`), `/about`, `/contact`, `api/contact`
- `components/ui` — primitives (Button, Card, Hero, Reveal, ...)
- `components/layout` — Header (client), Footer, Logo
- `components/<page>` — page sections
- `lib/data` — all page copy as typed data
- `lib/validation.ts` — shared by the form and the API route

## Placeholders to replace

- Emails, phone number, and address in `lib/data/contact.ts`
- Testimonials and blog posts in `lib/data/home.ts`
- Legal, FAQ, and blog "Read more" links (marked `TODO`)
- Email delivery in `app/api/contact/route.ts` (marked `TODO`)
# digital-chautari
# digital-chautari
# digital-chautari
# digital-chautari
# digital-chautari
# digital-chautari
