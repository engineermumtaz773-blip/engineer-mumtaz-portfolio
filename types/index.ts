import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string };
export type Stat = { value: number; suffix?: string; label: string };
export type Service = {
  title: string;
  description: string;
  benefits: string[];
  stack: string[];
  icon: LucideIcon;
};
export type ProjectCategory = "React" | "Next.js" | "WordPress" | "WooCommerce" | "Full Stack" | "UI Design" | "API" | "Dashboard";
export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};
export type SkillGroup = {
  title: string;
  description: string;
  skills: { name: string; level: number }[];
};
export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  category: string;
  image: string;
};
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  content: string[];
};
