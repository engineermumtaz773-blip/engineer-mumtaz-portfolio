import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Contact", "Contact Engineer Mumtaz Ali about software engineering roles, web development projects, WordPress, WooCommerce, React, or Next.js work.", "/contact");

const faqs = [
  { q: "What information should I include?", a: "Describe the current situation, required outcome, timeline, budget range if available, and any relevant website, design, repository, or technical constraints." },
  { q: "Do you work with international clients?", a: "Yes. The portfolio is structured for remote collaboration with international clients, agencies, recruiters, startups, and product teams." },
  { q: "Can you work on an existing website?", a: "Yes. Existing systems can be audited, debugged, optimized, extended, redesigned selectively, or migrated depending on the technical condition and business need." },
  { q: "Which projects are the best fit?", a: "Projects that value responsive quality, maintainable implementation, WordPress or WooCommerce expertise, frontend engineering, performance, or a cross-functional delivery partner." }
];

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: "Email", value: siteConfig.emailLabel, href: siteConfig.social.email },
    { icon: Phone, label: "Phone", value: siteConfig.phoneLabel, href: "/contact" },
    { icon: MapPin, label: "Location", value: siteConfig.location, href: "/contact" },
    { icon: Github, label: "GitHub", value: "Verified profile link can be configured", href: siteConfig.social.github },
    { icon: Linkedin, label: "LinkedIn", value: "Verified profile link can be configured", href: siteConfig.social.linkedin },
    { icon: MessageCircle, label: "WhatsApp", value: "Available after initial qualification", href: siteConfig.social.whatsapp }
  ];
  return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} /><PageHero eyebrow="Start a conversation" title="Share the role, project, problem, or opportunity." description="A useful first message includes the current situation, expected outcome, timeline, and any technical constraints." /><section className="section-space bg-surface"><div className="container-shell grid gap-8 lg:grid-cols-[.72fr_1.28fr]"><div><div className="rounded-[28px] bg-navy p-7 text-white sm:p-9"><ShieldCheck className="h-8 w-8 text-cyan-300" /><h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.04em]">Serious enquiries receive a structured response.</h2><p className="mt-4 leading-8 text-slate-300">Your message will be reviewed for fit, scope, constraints, and the most useful next action.</p><div className="mt-8 space-y-4">{channels.map(({ icon: Icon, label, value, href }) => <Link key={label} href={href} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-200"><Icon className="h-4 w-4" /></span><span><span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</span><span className="mt-1 block text-sm text-slate-200">{value}</span></span></Link>)}</div></div><div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-7"><h2 className="font-display text-xl font-bold text-navy">Map & meeting location</h2><p className="mt-3 text-sm leading-7 text-slate-600">Work is coordinated remotely. Add a verified office or meeting address before embedding Google Maps; this avoids publishing an inaccurate location.</p><div className="mt-5 grid h-48 place-items-center rounded-2xl bg-[radial-gradient(circle_at_center,rgba(37,99,235,.12),transparent_60%),linear-gradient(135deg,#f8fafc,#e2e8f0)] text-center"><div><MapPin className="mx-auto h-7 w-7 text-brand" /><p className="mt-2 text-sm font-bold text-navy">Remote · Worldwide</p></div></div></div></div><ContactForm /></div></section><section className="section-space bg-white"><div className="container-shell"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">FAQ</p><h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-navy sm:text-5xl">Useful answers before you enquire.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{faqs.map((item) => <details key={item.q} className="group rounded-[22px] border border-slate-200 bg-surface p-6"><summary className="cursor-pointer list-none font-display text-lg font-bold text-navy">{item.q}</summary><p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p></details>)}</div></div></section></>;
}
