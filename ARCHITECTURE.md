# Architecture

- `app/`: App Router pages, metadata routes, dynamic article/project pages, and contact API.
- `components/layout/`: site-wide navigation and footer.
- `components/sections/`: homepage and reusable marketing sections.
- `components/ui/`: typed UI primitives and page heading patterns.
- `components/projects/`, `components/certificates/`, `components/contact/`: feature-specific interactive components.
- `components/shared/`: motion, analytics, counters, scroll behavior, and print actions.
- `components/seo/`: reusable structured data.
- `data/`: centralized content for services, projects, skills, posts, certificates, testimonials, and identity settings.
- `lib/`: metadata helpers, validation, URLs, formatting, and class utilities.
- `public/`: local optimized SVG assets and downloadable resume.

Server Components remain the default. Client Components are limited to interaction, forms, animation, browser APIs, filtering, and dialogs.
