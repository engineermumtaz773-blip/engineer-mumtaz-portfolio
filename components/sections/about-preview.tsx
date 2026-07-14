import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { stats } from "@/data/site";

export function AboutPreview() {
  return <section className="section-space bg-white"><div className="container-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><Reveal><div className="relative rounded-[32px] bg-surface p-5 sm:p-8"><div className="page-grid absolute inset-0 opacity-60" /><div className="relative grid grid-cols-2 gap-4">{stats.map((stat) => <div key={stat.label} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><p className="font-display text-3xl font-bold tracking-[-0.05em] text-navy sm:text-4xl"><Counter value={stat.value} suffix={stat.suffix} /></p><p className="mt-2 text-sm leading-6 text-slate-500">{stat.label}</p></div>)}</div></div></Reveal><Reveal delay={0.08}><SectionHeading eyebrow="About" title="A practical engineer with a product-quality mindset." description="My work combines software engineering, responsive interface design, WordPress expertise, and business-focused problem solving. I care about how a system looks, how it performs, how it is maintained, and whether it creates a clear result." /><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Clean, scalable component architecture", "Responsive behavior across real screens", "Accessible interactions and semantic structure", "Performance and SEO built into delivery"].map((item) => <div key={item} className="flex gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{item}</div>)}</div><Button asChild variant="secondary" className="mt-8"><Link href="/about">Explore my journey <ArrowRight className="h-4 w-4" /></Link></Button></Reveal></div></section>;
}
