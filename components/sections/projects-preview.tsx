import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/shared/reveal";

export function ProjectsPreview() {
  return <section className="section-space bg-white"><div className="container-shell"><div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Selected work" title="Systems and experiences built to solve real product problems." description="Representative work across full stack applications, premium WordPress builds, WooCommerce, dashboards, APIs, and responsive interface systems." /><Button asChild variant="secondary"><Link href="/projects">View all projects <ArrowRight className="h-4 w-4" /></Link></Button></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{projects.filter((item) => item.featured).map((project, index) => <Reveal key={project.slug} delay={index * 0.06}><ProjectCard project={project} /></Reveal>)}</div></div></section>;
}
