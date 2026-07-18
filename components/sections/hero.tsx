"use client";

import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  const socialProfiles = [
    { icon: Github, label: "GitHub", href: "https://github.com/engineermumtaz773-blip/engineer-mumtaz-portfolio" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/engineer-mumtaz" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/923040537000" },
    { icon: Mail, label: "Email", href: "mailto:engineermumtaz773@gmail.com" },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-navy text-white">
      <div className="container-shell">
        <h1 className="text-6xl font-bold">Engineering digital products.</h1>
        <p className="mt-6 text-slate-300">I build production-ready web applications and responsive interfaces.</p>
        
        <div className="mt-9 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Connect</span>
          {socialProfiles.map(({ icon: Icon, label, href }) => (
            <a 
              key={label} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}