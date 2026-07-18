import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  const socialProfiles = [
    { icon: Github, label: "GitHub", href: "https://github.com/engineermumtaz773-blip/engineer-mumtaz-portfolio" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/engineer-mumtaz" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/923040537000" },
    { icon: Mail, label: "Email", href: "mailto:engineermumtaz773@gmail.com" },
  ];

  return (
    <footer className="bg-navy text-white border-t border-white/10">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.3fr_.8fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 font-display text-xl font-bold">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-black">MA</span>
            {siteConfig.shortName}
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">{siteConfig.description}</p>
          <div className="mt-6 flex gap-2">
            {socialProfiles.map(({ icon: Icon, label, href }) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={label} 
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
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
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </footer>
  );
}