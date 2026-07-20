"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-navy pb-20 pt-32 text-white sm:pt-36 lg:flex lg:min-h-screen lg:items-center lg:py-28" onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); x.set((event.clientX - rect.left) / rect.width - 0.5); y.set((event.clientY - rect.top) / rect.height - 0.5); }}>
      
      {/* Complete Background Animation with rich multi-color aurora mesh, glowing orbs & particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="page-grid absolute inset-0 opacity-40" />
        
        {/* Multi-color shifting background gradients */}
        <div className="absolute -top-[50%] -left-[30%] w-[110vw] h-[110vw] rounded-full bg-gradient-to-tr from-cyan-600/30 via-indigo-600/25 to-fuchsia-600/30 blur-[140px] animate-pulse duration-1000" />
        <div className="absolute top-[10%] -right-[30%] w-[100vw] h-[100vw] rounded-full bg-gradient-to-br from-blue-600/25 via-teal-500/20 to-pink-500/25 blur-[160px] animate-pulse duration-700" />
        <div className="absolute -bottom-[40%] left-[20%] w-[90vw] h-[90vw] rounded-full bg-gradient-to-r from-purple-600/25 via-blue-500/20 to-emerald-500/25 blur-[150px] animate-pulse duration-900" />
        
        {/* Floating animated color blobs */}
        <m.div 
          animate={{ x: [0, 90, -70, 0], y: [0, -70, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] rounded-full bg-cyan-400/15 blur-[130px]"
        />
        <m.div 
          animate={{ x: [0, -80, 70, 0], y: [0, 80, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-pink-500/15 blur-[140px]"
        />

        {/* Ambient glowing multi-color particles */}
        <div className="absolute top-16 left-[10%] w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee] animate-ping opacity-80" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-pink-300 shadow-[0_0_20px_#f472b6] animate-pulse opacity-80" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-20 left-[25%] w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_20px_#34d399] animate-ping opacity-70" style={{ animationDuration: '4.5s' }} />
        <div className="absolute top-2/3 right-[30%] w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_20px_#fcd34d] animate-pulse opacity-70" style={{ animationDuration: '4s' }} />
      </div>
      
      <div className="container-shell relative z-10 grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            {siteConfig.availability}
          </m.div>

          <m.h1 className="mt-7 max-w-4xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em]" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }}>
            Engineering digital products that feel <span className="text-white/45">clear, fast, and dependable.</span>
          </m.h1>

          <m.p className="mt-7 min-h-8 font-display text-xl font-semibold sm:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}><TypingTitle /></m.p>
          <m.p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">I build production-ready web applications, WordPress systems, WooCommerce experiences, and responsive interfaces for international clients, product teams, and growing businesses.</m.p>
          
          {/* Buttons with added smooth hover color transitions and scale animations */}
          <m.div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"><Link href="/contact">Hire Me <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="dark" className="transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"><Link href="/projects">View Projects</Link></Button>
            <Button asChild size="lg" variant="dark" className="transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"><a href="/resume/Engineer-Mumtaz-Ali-Resume.pdf" download>Download CV <Download className="h-4 w-4" /></a></Button>
          </m.div>

          {/* Social Icons matching exact 3D glossy style with animations & correct original Gmail icon */}
          <div className="mt-12 flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Connect</span>
            <div className="flex items-center gap-3">
                {/* GitHub */}
                <a href="https://github.com/engineermumtaz773-blip/engineer-mumtaz-portfolio" target="_blank" rel="noopener noreferrer" className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-300 text-slate-900 shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]">
                  <svg className="h-6 w-6 fill-slate-900 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/engineer-mumtaz" target="_blank" rel="noopener noreferrer" className="group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-[#2296ed] via-[#0a66c2] to-[#084e96] text-white shadow-[0_8px_20px_rgba(10,102,194,0.5),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(10,102,194,0.8)]">
                  <svg className="h-6 w-6 fill-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/923040537000" target="_blank" rel="noopener noreferrer" className="group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-[#33eb77] via-[#25d366] to-[#128c7e] text-white shadow-[0_8px_20px_rgba(37,211,102,0.5),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.8)]">
                  <svg className="h-6 w-6 fill-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>

                {/* Gmail (Original branded multi-color Gmail icon matching link requirements) */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=engineermumtaz773@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-300 shadow-[0_8px_20px_rgba(234,67,53,0.3),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(234,67,53,0.6)]">
                  <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 12.713l-11.985-7.59c-.01,1.06-.01,1.72-.01,2.78l11.995 7.63 11.985-7.63c0-1.06 0-1.72-.01-2.78l-11.984 7.59z"/><path fill="#4285F4" d="M23.98 5.123c0-.98-.44-1.85-1.13-2.43l-10.85 7.31-10.85-7.31c-.69.58-1.13 1.45-1.13 2.43 0 .42.08.81.23 1.17l11.75 7.91 11.75-7.91c.15-.36.23-.75.23-1.17z"/><path fill="#FBBC05" d="M.01 5.123v13.75c0 .98.79 1.77 1.77 1.77h3.84v-9.68l-5.61-3.79c-.03.22-.04.47-.04.75z"/><path fill="#34A853" d="M23.99 5.123v13.75c0 .98-.79 1.77-1.77 1.77h-3.84v-9.68l5.61-3.79c.03.22.04.47.04.75z"/><path fill="#C5221F" d="M18.38 10.963v9.69h3.84c.98 0 1.77-.79 1.77-1.77v-13.75l-5.61 5.83z"/></svg>
                </a>
            </div>
          </div>
        </div>

        {/* Right Side: Circular Profile Image from public/mumtaz/ folder with Hover Crossfade from public/images/ */}
        <m.div className="relative mx-auto w-full max-w-[520px] perspective-[1200px] flex items-center justify-center py-10" style={{ rotateX, rotateY }}>
          
          <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-indigo-500/30 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
          
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite] pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          </div>
          <div className="absolute inset-0 animate-[spin_16s_linear_infinite_reverse] pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc]" />
          </div>

          <m.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full p-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-xl transition-all duration-500 ${isHovered ? 'shadow-[0_0_60px_rgba(34,211,238,0.5)] scale-[1.02]' : ''}`}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-navy">
               {/* Default profile image from the public root */}
               <div className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 scale-105 rotate-2' : 'opacity-100 scale-100 rotate-0'}`}>
                 <Image src="/mumtaz-profilo.jpg" alt="Engineer Mumtaz Ali" fill priority className="object-cover" />
               </div>
               {/* Hover profile image from the public images folder */}
               <div className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 scale-105 rotate-2' : 'opacity-0 scale-100 rotate-0'}`}>
                 <Image src="/images/profile.svg" alt="Engineer Mumtaz Ali Hover" fill priority className="object-cover" />
               </div>
            </div>
          </m.div>
        </m.div>

      </div>
    </section>
  );
}