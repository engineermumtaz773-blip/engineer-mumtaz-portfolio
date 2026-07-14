import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.3fr_.8fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 font-display text-xl font-bold">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-black">MA</span>
            {siteConfig.shortName}
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">{siteConfig.description}</p>
          <div className="mt-6 flex gap-2">
            {[{ icon: Github, label: "GitHub", href: siteConfig.social.github }, { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin }, { icon: MessageCircle, label: "WhatsApp", href: siteConfig.social.whatsapp }, { icon: Mail, label: "Email", href: siteConfig.social.email }].map(({ icon: Icon, label, href }) => (
              <Link key={label} href={href} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-white"><Icon className="h-4 w-4" /></Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display font-bold">Quick links</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {navItems.slice(0, 6).map((item) => <li key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-display font-bold">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {services.slice(0, 6).map((service) => <li key={service.title}><Link href="/services" className="transition hover:text-white">{service.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-display font-bold">Let’s build something useful.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">Share the product, website, or engineering problem you need solved.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
      <div className="container-shell flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-5"><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></div>
      </div>
    </footer>
  );
}
