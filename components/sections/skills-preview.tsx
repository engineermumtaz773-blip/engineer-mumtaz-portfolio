import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/shared/reveal";

export function SkillsPreview() {
  return <section className="section-space relative overflow-hidden bg-navy text-white"><div className="page-grid absolute inset-0 opacity-30" /><div className="container-shell relative"><div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><SectionHeading dark eyebrow="Skills" title="A cross-functional toolkit for modern web delivery." description="Strongest where engineering, design quality, content systems, responsive behavior, and business requirements meet." /><Button asChild variant="dark"><Link href="/skills">Full skill dashboard <ArrowRight className="h-4 w-4" /></Link></Button></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skillGroups.slice(0, 6).map((group, index) => <Reveal key={group.title} delay={index * 0.04}><div className="glass-panel h-full rounded-[24px] p-6"><h3 className="font-display text-xl font-bold">{group.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p><div className="mt-6 space-y-5">{group.skills.slice(0, 4).map((skill) => <div key={skill.name}><div className="mb-2 flex justify-between text-xs"><span className="font-semibold text-slate-200">{skill.name}</span><span className="text-slate-500">{skill.level}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/8"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" style={{ width: `${skill.level}%` }} /></div></div>)}</div></div></Reveal>)}</div></div></section>;
}
