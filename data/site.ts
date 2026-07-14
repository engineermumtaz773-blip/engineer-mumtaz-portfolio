import type { NavItem, Stat } from "@/types";

export const siteConfig = {
  name: "Engineer Mumtaz Ali",
  shortName: "Mumtaz Ali",
  description: "Software Engineer and Full Stack Web Developer building fast, accessible, scalable digital products and conversion-focused WordPress experiences.",
  location: "Remote · Available worldwide",
  availability: "Available for selected projects and engineering roles",
  emailLabel: "Use the secure contact form",
  phoneLabel: "Available after project qualification",
  social: {
    github: "/contact",
    linkedin: "/contact",
    whatsapp: "/contact",
    email: "/contact"
  }
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const professionalTitles = [
  "Software Engineer",
  "Full Stack Web Developer",
  "WordPress & WooCommerce Developer",
  "React and Next.js Developer",
  "Responsive Web Designer"
];

export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Core disciplines" },
  { value: 40, suffix: "+", label: "Reusable systems built" },
  { value: 95, suffix: "+", label: "Performance target" },
  { value: 100, suffix: "%", label: "Responsive delivery" }
];

export const trustedBy = ["Product Teams", "Startups", "Agencies", "E-commerce Brands", "Remote Clients", "Recruiters"];
