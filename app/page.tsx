import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesPreview } from "@/components/sections/services-preview";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return <><Hero /><LogoMarquee /><AboutPreview /><ServicesPreview /><ProjectsPreview /><SkillsPreview /><Testimonials /><ContactCta /></>;
}
