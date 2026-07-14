import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "commerce-command-center",
    title: "Commerce Command Center",
    category: "Dashboard",
    description: "An operations dashboard for product, revenue, fulfillment, and customer-support workflows.",
    image: "/images/project-dashboard.svg",
    technologies: ["Next.js", "TypeScript", "MySQL", "Charts"],
    features: ["Role-based navigation", "Live KPI views", "Responsive data tables"],
    liveUrl: "/contact",
    githubUrl: "/contact",
    featured: true
  },
  {
    slug: "premium-woocommerce-store",
    title: "Premium WooCommerce Store",
    category: "WooCommerce",
    description: "A refined e-commerce experience with custom product logic, cart interactions, and optimized checkout flow.",
    image: "/images/project-commerce.svg",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
    features: ["Custom variants", "Cart drawer logic", "Conversion-focused checkout"],
    liveUrl: "/contact",
    githubUrl: "/contact",
    featured: true
  },
  {
    slug: "saas-product-site",
    title: "SaaS Product Website",
    category: "Next.js",
    description: "A premium marketing site with modular sections, technical SEO, animation, and performance-first delivery.",
    image: "/images/project-saas.svg",
    technologies: ["Next.js", "Tailwind CSS", "Motion", "JSON-LD"],
    features: ["Composable content", "Animated product storytelling", "SEO metadata system"],
    liveUrl: "/contact",
    githubUrl: "/contact",
    featured: true
  },
  {
    slug: "elementor-design-system",
    title: "Elementor Design System",
    category: "WordPress",
    description: "A reusable page-building system for consistent sections, spacing, typography, and responsive behavior.",
    image: "/images/project-elementor.svg",
    technologies: ["Elementor", "WordPress", "CSS", "ACF"],
    features: ["Global tokens", "Reusable sections", "Editor-friendly controls"],
    liveUrl: "/contact",
    githubUrl: "/contact"
  },
  {
    slug: "client-portal-api",
    title: "Client Portal API",
    category: "API",
    description: "A validated service layer for projects, files, messages, and account-specific operations.",
    image: "/images/project-api.svg",
    technologies: ["Node.js", "Express", "Zod", "MongoDB"],
    features: ["Typed validation", "Structured errors", "Secure route patterns"],
    liveUrl: "/contact",
    githubUrl: "/contact"
  },
  {
    slug: "developer-portfolio-system",
    title: "Developer Portfolio System",
    category: "React",
    description: "A content-driven portfolio with filtering, motion, accessible navigation, and reusable presentation components.",
    image: "/images/project-portfolio.svg",
    technologies: ["React", "TypeScript", "Motion", "Tailwind CSS"],
    features: ["Project filtering", "Accessible motion", "Data-driven content"],
    liveUrl: "/contact",
    githubUrl: "/contact"
  },
  {
    slug: "conversion-landing-suite",
    title: "Conversion Landing Suite",
    category: "UI Design",
    description: "A set of focused product landing pages designed around clarity, proof, objections, and action.",
    image: "/images/project-ui.svg",
    technologies: ["Figma", "Next.js", "CSS", "Analytics"],
    features: ["Purposeful hierarchy", "Trust modules", "Responsive conversion flow"],
    liveUrl: "/contact",
    githubUrl: "/contact"
  },
  {
    slug: "service-booking-platform",
    title: "Service Booking Platform",
    category: "Full Stack",
    description: "A scheduling workflow connecting service discovery, booking, validation, notifications, and administration.",
    image: "/images/project-booking.svg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Email API"],
    features: ["Availability logic", "Booking validation", "Automated confirmation"],
    liveUrl: "/contact",
    githubUrl: "/contact"
  }
];
