"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { m, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { professionalTitles, siteConfig } from "@/data/site";

function TypingTitle() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = professionalTitles[index];
    const completed = text === current;
    const empty = text.length === 0;
    const delay = completed && !deleting ? 1400 : deleting ? 28 : 55;
    const timer = window.setTimeout(() => {
      if (completed && !deleting) setDeleting(true);
      else if (empty && deleting) {
        setDeleting(false);
        setIndex((value) => (value + 1) % professionalTitles.length);
      } else setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, index, text]);

  return <span className="gradient-text">{text}<span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-300" /></span>;
}

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-navy pb-20 pt-32 text-white sm:pt-36 lg:flex lg:min-h-screen lg:items-center lg:py-28" onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); x.set((event.clientX - rect.left) / rect.width - 0.5); y.set((event.clientY - rect.top) / rect.height - 0.5); }}>
      <div className="page-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <m.div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-600/22 blur-[110px]" animate={{ scale: [1, 1.18, 1], x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} aria-hidden="true" />
      <m.div className="absolute bottom-[8%] right-[7%] h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" animate={{ scale: [1.1, 0.95, 1.1], y: [0, -25, 0] }} transition={{ duration: 12, repeat: Infinity }} aria-hidden="true" />
      
      <div className="container-shell relative grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            {siteConfig.availability}
          </m.div>
          <m.h1 className="mt-7 max-w-4xl font-display text-[clamp(3.35rem,7vw,6.8rem)] font-bold leading-[0.9] tracking-[-0.065em] text-balance" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }}>
            Engineering digital products that feel <span className="text-white/45">clear, fast, and dependable.</span>
          </m.h1>
          <m.p className="mt-7 min-h-8 font-display text-xl font-semibold sm:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}><TypingTitle /></m.p>
          <m.p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">I build production-ready web applications, WordPress systems, WooCommerce experiences, and responsive interfaces for international clients, product teams, and growing businesses.</m.p>
          
          <m.div className="mt-9 flex flex-wrap gap-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <Button asChild size="lg"><Link href="/contact">Hire Me <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="dark"><Link href="/projects">View Projects</Link></Button>
            <Button asChild size="lg" variant="dark"><a href="/resume/Engineer-Mumtaz-Ali-Resume.pdf" download>Download CV <Download className="h-4 w-4" /></a></Button>
          </m.div>

          {/* Social Connect Section - UPDATED */}
          <m.div className="mt-9 flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <span className="mr-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Connect</span>
            
            <a href="https://github.com/engineermumtaz773-blip/engineer-mumtaz-portfolio" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com/in/engineer-mumtaz" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <a href="https://wa.me/923040537000" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="mailto:engineermumtaz773@gmail.com" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-white"><Mail className="h-4 w-4" /></a>
          </m.div>
        </div>

        {/* Hero Image Section */}
        <m.div className="relative mx-auto w-full max-w-[520px] perspective-[1200px]" style={{ rotateX, rotateY }}>
          <div className="absolute -inset-7 rounded-[44px] bg-gradient-to-br from-blue-500/24 to-cyan-400/10 blur-2xl" aria-hidden="true" />
          <div className="glass-panel relative overflow-hidden rounded-[36px] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[29px] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950">
              <Image src="/mumtaz-profile.jpg" alt="Professional portrait of Engineer Mumtaz Ali" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-center" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-slate-950/70 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4"><div><p className="font-display text-lg font-bold">Engineer Mumtaz Ali</p><p className="mt-1 text-xs text-slate-400">Software Engineering · Web Products · WordPress</p></div><div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 p-[1px]"><div className="grid h-full w-full place-items-center rounded-full bg-navy text-xs font-black">MA</div></div></div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}