import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "building-premium-wordpress-sites-without-bloat",
    title: "Building Premium WordPress Sites Without Bloat",
    excerpt: "A practical framework for balancing editor freedom, visual quality, performance, and long-term maintainability.",
    category: "WordPress",
    tags: ["WordPress", "Performance", "Elementor"],
    publishedAt: "2026-06-20",
    readingTime: "7 min read",
    image: "/images/blog-wordpress.svg",
    featured: true,
    content: [
      "Premium WordPress work is not created by adding more plugins or visual effects. It comes from a controlled system: clear design tokens, reusable sections, intentional content structure, and strict performance decisions.",
      "The first engineering decision is to define ownership. Global typography, spacing, colors, buttons, containers, and responsive rules should be managed centrally. Page-level overrides should be rare and documented.",
      "Elementor can remain editor-friendly without becoming inconsistent. Reusable containers, global widgets, constrained controls, and a small custom CSS layer give content teams flexibility while protecting the design system.",
      "Performance work should start before launch. Compress assets, avoid duplicate libraries, minimize third-party scripts, test Core Web Vitals, and verify the real mobile experience instead of relying only on desktop previews."
    ]
  },
  {
    slug: "responsive-design-is-a-system-not-a-media-query",
    title: "Responsive Design Is a System, Not a Media Query",
    excerpt: "Why strong responsive interfaces begin with content priority, flexible constraints, and predictable component behavior.",
    category: "Frontend",
    tags: ["CSS", "Responsive Design", "Accessibility"],
    publishedAt: "2026-05-18",
    readingTime: "6 min read",
    image: "/images/blog-responsive.svg",
    content: [
      "Responsive quality is determined before the breakpoint is written. A component needs clear minimum and maximum constraints, sensible content behavior, and a hierarchy that survives reduced space.",
      "Fluid type, flexible grids, intrinsic sizing, and container-aware layouts often remove the need for large breakpoint matrices. Breakpoints should respond to layout failure, not device brand names.",
      "The final test is operational: keyboard access, long text, slow networks, zoom, small screens, landscape orientation, and real content. A layout that only works with ideal copy is not responsive."
    ]
  },
  {
    slug: "nextjs-architecture-for-maintainable-marketing-sites",
    title: "Next.js Architecture for Maintainable Marketing Sites",
    excerpt: "A scalable App Router structure for teams that need speed, SEO, reusable sections, and clean content ownership.",
    category: "Next.js",
    tags: ["Next.js", "TypeScript", "Architecture"],
    publishedAt: "2026-04-12",
    readingTime: "8 min read",
    image: "/images/blog-nextjs.svg",
    content: [
      "A maintainable marketing site separates content, presentation, behavior, and metadata. Data files or a CMS own content; section components own visual composition; utilities own cross-cutting concerns.",
      "Server Components should remain the default. Client Components are best reserved for interaction, browser APIs, and animation. This boundary reduces shipped JavaScript and keeps pages easier to reason about.",
      "Metadata, sitemap generation, structured data, redirects, analytics, and image strategy are architecture concerns, not launch-day additions. Building them into the project structure prevents fragile SEO patches later."
    ]
  },
  {
    slug: "technical-checklist-before-launching-an-ecommerce-site",
    title: "Technical Checklist Before Launching an E-commerce Site",
    excerpt: "A focused pre-launch checklist covering product logic, checkout, email, analytics, performance, and recovery planning.",
    category: "E-commerce",
    tags: ["WooCommerce", "QA", "Conversion"],
    publishedAt: "2026-03-03",
    readingTime: "9 min read",
    image: "/images/blog-commerce.svg",
    content: [
      "E-commerce QA must follow customer journeys, not isolated pages. Test discovery, product configuration, cart changes, discounts, shipping, payment, transactional email, account behavior, refunds, and failure states.",
      "Use real device and network conditions. Verify price calculations, stock rules, tax logic, address edge cases, and duplicate submission protection. Every error should explain what happened and what the customer can do next.",
      "Before launch, confirm analytics events, backups, rollback steps, monitoring, ownership, and support escalation. A launch is an operational event, not only a design handoff."
    ]
  }
];
