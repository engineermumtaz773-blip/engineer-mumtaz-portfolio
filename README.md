# Engineer Mumtaz Ali - Premium Portfolio

A production-oriented portfolio built with Next.js 15 App Router, TypeScript, Tailwind CSS v4, Motion for React, React Hook Form, Zod, and Resend.

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize before deployment

1. Update `data/site.ts` with verified contact details and social URLs.
2. Replace `public/images/profile.svg` with the final portrait while keeping the same path, or update the path in `components/sections/hero.tsx`.
3. Replace project and certificate data in `data/projects.ts` and `data/certificates.ts`.
4. Replace `public/resume/Engineer-Mumtaz-Ali-Resume.pdf` with the final signed CV if needed.
5. Copy `.env.example` to `.env.local` and configure Resend.
6. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

## Contact form
## Contact form

The API route validates input with Zod. When Resend environment variables are configured, the route sends the message via Resend.

Required environment variables (set in Vercel):

- `RESEND_API_KEY` — Resend API key used to authenticate requests.
- `RESEND_FROM` — Sender email address.
- `RESEND_TO` — Recipient email address.

This project uses the standard Resend environment variable names. Ensure `RESEND_API_KEY`, `RESEND_FROM`, and `RESEND_TO` are set in Vercel for both Preview and Production deployments. If the required environment variables are missing, the API returns HTTP 503 with a clear configuration message instead of silently discarding messages.

## Deployment

Deploy to Vercel, add the environment variables, and connect the final domain. `robots.ts`, `sitemap.ts`, Open Graph metadata, JSON-LD, canonical URLs, and a web manifest are included.

## Typography

The CSS uses `Inter`, `Manrope`, and `Space Grotesk` font stacks with system fallbacks, so builds do not depend on a live Google Fonts request. Add your own properly licensed, locally hosted webfont setup if exact font rendering is required on every device.
