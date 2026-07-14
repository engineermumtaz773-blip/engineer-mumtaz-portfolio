import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { ContactCta } from "@/components/sections/contact-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Services", "Full stack, WordPress, WooCommerce, React, Next.js, API, dashboard, SEO, performance, and website maintenance services.", "/services");

export default function ServicesPage() {
  return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} /><PageHero eyebrow="Engineering services" title="Focused capabilities for websites, products, and growth systems." description="Choose a targeted engagement or combine disciplines into a complete delivery plan." /><section className="section-space bg-surface"><div className="container-shell grid gap-6 md:grid-cols-2">{services.map((service, index) => { const Icon = service.icon; return <article key={service.title} className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[var(--shadow-card)] sm:p-9"><div className="flex items-start justify-between gap-5"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-brand"><Icon className="h-6 w-6" /></span><span className="font-display text-sm font-bold text-slate-300">{String(index + 1).padStart(2, "0")}</span></div><h2 className="mt-7 font-display text-2xl font-bold tracking-[-0.04em] text-navy">{service.title}</h2><p className="mt-4 leading-8 text-slate-600">{service.description}</p><div className="mt-6 grid gap-3">{service.benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" />{benefit}</div>)}</div><div className="mt-6 flex flex-wrap gap-2">{service.stack.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">{item}</span>)}</div><Button asChild variant="secondary" className="mt-8"><Link href={`/contact?service=${encodeURIComponent(service.title)}`}>Discuss this service <ArrowRight className="h-4 w-4" /></Link></Button></article>; })}</div></section><ContactCta /></>;
}
