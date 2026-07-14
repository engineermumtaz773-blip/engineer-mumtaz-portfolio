# Production Checklist

## Verified in this package

- Next.js 15.5.20 production compilation completed.
- TypeScript strict-mode check completed without errors.
- npm production dependency audit: 0 known vulnerabilities.
- 31 routes generated, including static pages, project case studies, blog articles, robots.txt, sitemap.xml, manifest, Open Graph image, and the contact API.
- Home, About, Projects, Blog, Contact, robots.txt, and sitemap.xml returned successful HTTP responses in local smoke testing.
- Custom 404 returned the correct HTTP 404 status.
- Contact validation works. Without Resend environment variables, the endpoint returns HTTP 503 with an explicit configuration message instead of silently discarding leads.
- The downloadable resume PDF was rendered and visually checked on both pages.

## Required before public launch

- Add verified email, phone, GitHub, LinkedIn, WhatsApp, location, domain, experience dates, employers, education, and project links.
- Replace `public/images/profile.svg` with the final professional portrait.
- Replace representative project and certificate records with verified work.
- Configure the environment variables from `.env.example`.
- Connect a verified Google Maps location only when an office or meeting address is approved for publication.
- Obtain legal review for the Privacy Policy and Terms & Conditions and add the business identity, jurisdiction, and effective date.
- Connect newsletter consent and email-list logic before enabling a newsletter form.
- Run Lighthouse against the final deployed domain because third-party scripts, the final portrait, production hosting, and analytics configuration affect real scores.

## Recommended Vercel settings

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output: Next.js default
- Node.js: current Vercel-supported LTS
