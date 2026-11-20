# Indigo Labs

Next.js (App Router), TypeScript, and Tailwind CSS v4. Ready for Vercel.

## Run locally

    npm install
    npm run dev

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository at vercel.com/new. Vercel detects Next.js, so no settings need changing.
3. Optional: add the variables from `.env.example` under Project Settings, Environment Variables, so the
   contact form sends email through Resend. Without them, requests are logged in the Vercel function logs.

## Where things live

- `lib/content.ts` holds all services, reasons, process steps, and FAQ copy.
- `app/globals.css` holds the color and font tokens.
- `components/PlateDrawing.tsx` is the hero drawing.
