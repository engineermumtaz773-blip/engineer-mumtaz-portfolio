"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, MessageCircle, Mail } from "lucide-react";
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
      
      {/* Background Animation: Aurora gradient, animated mesh, floating light blobs, glowing particles & radial lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="page-grid absolute inset-0 opacity-40" />
        
        {/* Aurora & Mesh Gradient Background Shimmers */}
        <div className="absolute -top-[40%] -left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/20 blur-[120px] animate-pulse duration-1000" />
        <div className="absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-blue-600/15 via-teal-500/10 to-cyan-400/20 blur-[140px] animate-pulse duration-700" />
        
        {/* Floating Light Blobs & Moving Radial Lights */}
        <m.div 
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]"
        />
        <m.div 
          animate={{ x: [0, -60, 40, 0], y: [0, 50, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-indigo-500/10 blur-[120px]"
        />

        {/* Tiny Glowing Particles */}
        <div className="absolute top-20 left-[15%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee] animate-ping opacity-60" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-[25%] w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_12px_#93c5fd] animate-pulse opacity-70" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-[30%] w-1.5 h-1.5 rounded-full bg-teal-300 shadow-[0_0_10px_#5eead4] animate-ping opacity-50" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 right-[10%] w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_12px_#d8b4fe] animate-pulse opacity-60" style={{ animationDuration: '6s' }} />
      </div>
      
      <div className="container-shell relative z-10 grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            {siteConfig.availability}
          </m.div>

          {/* Heading Fix: Responsive font size */}
          <m.h1 className="mt-7 max-w-4xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em]" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }}>
            Engineering digital products that feel <span className="text-white/45">clear, fast, and dependable.</span>
          </m.h1>

          <m.p className="mt-7 min-h-8 font-display text-xl font-semibold sm:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}><TypingTitle /></m.p>
          <m.p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">I build production-ready web applications, WordPress systems, WooCommerce experiences, and responsive interfaces for international clients, product teams, and growing businesses.</m.p>
          
          <m.div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link href="/contact">Hire Me <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="dark"><Link href="/projects">View Projects</Link></Button>
            <Button asChild size="lg" variant="dark"><a href="/resume/Engineer-Mumtaz-Ali-Resume.pdf" download>Download CV <Download className="h-4 w-4" /></a></Button>
          </m.div>

          {/* Social Icons Fix: Premium modern glassmorphism 3D-styled icons */}
          <div className="mt-12 flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Connect</span>
            <div className="flex gap-3">
                {/* GitHub */}
                <a href="https://github.com/engineermumtaz773-blip/engineer-mumtaz-portfolio" target="_blank" rel="noopener noreferrer" className="group relative grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-gradient-to-b from-white/10 to-white/5 text-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
                
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/engineer-mumtaz" target="_blank" rel="noopener noreferrer" className="group relative grid h-11 w-11 place-items-center rounded-full border border-blue-500/30 bg-gradient-to-b from-blue-500/20 to-blue-600/10 text-blue-400 shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/923040537000" target="_blank" rel="noopener noreferrer" className="group relative grid h-11 w-11 place-items-center rounded-full border border-emerald-500/30 bg-gradient-to-b from-emerald-500/20 to-emerald-600/10 text-emerald-400 shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-400 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>

                {/* Gmail (Updated link as requested) */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=engineermumtaz773@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative grid h-11 w-11 place-items-center rounded-full border border-rose-500/30 bg-gradient-to-b from-rose-500/20 to-rose-600/10 text-rose-400 shadow-[0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-rose-400 hover:text-white hover:shadow-[0_0_20px_rgba(244,63,94,0.5)]">
                  <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
            </div>
          </div>
        </div>

        {/* Right Side: Circular Profile Image with Hover crossfade & around-image decorative animations */}
        <m.div className="relative mx-auto w-full max-w-[520px] perspective-[1200px] flex items-center justify-center py-10" style={{ rotateX, rotateY }}>
          
          {/* Decorative Background Glow & Rotating Gradient Ring */}
          <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-indigo-500/30 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
          
          {/* Orbiting Glowing Dots */}
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite] pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          </div>
          <div className="absolute inset-0 animate-[spin_16s_linear_infinite_reverse] pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc]" />
          </div>

          {/* Floating Coding Icons Around Profile */}
          <m.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 left-6 z-20 px-3 py-1.5 rounded-xl border border-white/15 bg-navy/80 backdrop-blur-md text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            &lt;/React.js&gt;
          </m.div>
          <m.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-2 right-6 z-20 px-3 py-1.5 rounded-xl border border-white/15 bg-navy/80 backdrop-blur-md text-xs font-mono text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            Next.js 15
          </m.div>
          <m.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -right-6 z-20 px-3 py-1.5 rounded-xl border border-white/15 bg-navy/80 backdrop-blur-md text-xs font-mono text-blue-300 shadow-[0_0_15px_rgba(96,165,250,0.3)]">
            Tailwind
          </m.div>

          {/* Main Circular Profile Image Container with Glass & Gradient Border */}
          <m.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full p-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-xl transition-all duration-500 ${isHovered ? 'shadow-[0_0_60px_rgba(34,211,238,0.5)] scale-[1.02]' : ''}`}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-navy">
               
               {/* Default Profile Image */}
               <div className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${isHovered ? 'opacity-0 scale-105 rotate-2' : 'opacity-100 scale-100 rotate-0'}`}>
                 <Image src="/mumtaz-profile.jpg" alt="Engineer Mumtaz Ali" fill priority className="object-cover" />
               </div>

               {/* Hover Profile Image (profile2.png) with 500ms duration, smooth crossfade, scale to 105% & slight rotation */}
               <div className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 scale-105 rotate-2' : 'opacity-0 scale-100 rotate-0'}`}>
                 <Image src="/profile2.png" alt="Engineer Mumtaz Ali Hover" fill priority className="object-cover" />
               </div>

            </div>
          </m.div>
        </m.div>

      </div>
    </section>
  );
}