import { Braces, Database, Gauge, Globe2, LayoutDashboard, PanelsTopLeft, SearchCheck, ShoppingBag, Wrench, Zap } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Full Stack Development",
    description: "Scalable web products with a clean frontend, reliable backend, secure data flow, and maintainable architecture.",
    benefits: ["End-to-end ownership", "Typed APIs", "Reusable systems"],
    stack: ["Next.js", "TypeScript", "Node.js", "MySQL"],
    icon: Braces
  },
  {
    title: "WordPress Development",
    description: "Custom, editor-friendly WordPress builds that protect performance, brand consistency, and future maintainability.",
    benefits: ["Custom themes", "Elementor systems", "Plugin integration"],
    stack: ["WordPress", "PHP", "ACF", "Elementor"],
    icon: Globe2
  },
  {
    title: "WooCommerce Engineering",
    description: "Conversion-focused commerce experiences with dependable product, cart, checkout, and operational workflows.",
    benefits: ["Custom product logic", "Checkout optimization", "Store performance"],
    stack: ["WooCommerce", "PHP", "REST API", "Stripe"],
    icon: ShoppingBag
  },
  {
    title: "React & Next.js",
    description: "Fast application interfaces built with server rendering, component architecture, accessibility, and modern interaction design.",
    benefits: ["App Router", "SEO foundations", "Component systems"],
    stack: ["React", "Next.js", "Tailwind", "Motion"],
    icon: PanelsTopLeft
  },
  {
    title: "API & Backend Development",
    description: "Secure backend services, third-party integrations, authentication flows, and structured business logic.",
    benefits: ["Validation", "Error handling", "Documented endpoints"],
    stack: ["Node.js", "Express", "PHP", "REST"],
    icon: Database
  },
  {
    title: "Dashboard Development",
    description: "Clear operational dashboards that turn complex data and workflows into focused, usable interfaces.",
    benefits: ["Role-based UX", "Data visualization", "Responsive tables"],
    stack: ["React", "TypeScript", "Charts", "APIs"],
    icon: LayoutDashboard
  },
  {
    title: "Performance Optimization",
    description: "Evidence-based improvements for Core Web Vitals, asset delivery, rendering, caching, and runtime efficiency.",
    benefits: ["Faster loading", "Reduced layout shift", "Lean bundles"],
    stack: ["Lighthouse", "Web Vitals", "Caching", "CDN"],
    icon: Gauge
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, semantic structure, metadata, schema, crawlability, and content-ready page foundations.",
    benefits: ["Structured data", "Indexability", "Share previews"],
    stack: ["JSON-LD", "Sitemap", "Open Graph", "Analytics"],
    icon: SearchCheck
  },
  {
    title: "Maintenance & Bug Fixing",
    description: "Systematic debugging, safe updates, regression prevention, and practical maintenance for production websites.",
    benefits: ["Root-cause fixes", "Backup discipline", "Stable releases"],
    stack: ["Git", "Testing", "Monitoring", "Backups"],
    icon: Wrench
  },
  {
    title: "Landing Page Engineering",
    description: "High-trust landing pages with sharp messaging, responsive visual hierarchy, purposeful motion, and measurable CTAs.",
    benefits: ["Conversion structure", "Fast delivery", "Analytics-ready"],
    stack: ["Next.js", "WordPress", "Elementor", "GA4"],
    icon: Zap
  }
];
