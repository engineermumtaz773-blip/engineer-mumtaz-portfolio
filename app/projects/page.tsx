import { PageHero } from "@/components/ui/page-hero";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { ContactCta } from "@/components/sections/contact-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Projects", "Explore representative React, Next.js, WordPress, WooCommerce, full stack, API, dashboard, and UI design projects.", "/projects");

export default function ProjectsPage() {
  return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]} /><PageHero eyebrow="Selected projects" title="Work organized by problem, system, and technology." description="Search, filter, and review representative implementation patterns across product engineering and website delivery." /><section className="section-space bg-surface"><div className="container-shell"><ProjectsExplorer /></div></section><ContactCta /></>;
}
