# Joel Sundarsingh A — Portfolio

Football-themed (Madrid white, gold and royal blue) personal portfolio built with **Next.js 15, TypeScript and Tailwind v4**.

- **Frontend:** single page — Kick-off (hero + player card), Scouting Report (attributes + skills), Career (transfer history), Signature Goals (projects), Silverware (awards, certifications, hackathons, publications), Off the Pitch (football, cricket), Sign Me (contact).
- **Backend:** `POST /api/contact` (`src/app/api/contact/route.ts`) — validation, honeypot bot filter, per-IP rate limit, email delivery through [Resend](https://resend.com).
- **Content:** everything lives in `src/data/profile.ts`. Edit that file to update the site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. vercel.com → **Add New → Project** → import the repository → **Deploy** (framework: Next.js, no settings needed).
3. Optional, to receive contact-form emails: create a free Resend account and API key, then in Vercel → Project → **Settings → Environment Variables** add:
   - `RESEND_API_KEY` — your Resend key
   - `CONTACT_TO_EMAIL` — where messages should arrive
   - `CONTACT_FROM_EMAIL` — optional, e.g. `Portfolio <hello@yourdomain.com>` (default: Resend's test sender)

   Redeploy. Without these, the form still works and messages appear in Vercel's function logs.

Fan-made styling; not affiliated with Real Madrid C.F.
