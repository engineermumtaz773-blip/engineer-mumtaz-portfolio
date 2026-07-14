"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { navItems, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-60 transition-all duration-300", scrolled || open ? "border-b border-slate-200/80 bg-white/92 shadow-sm backdrop-blur-xl" : "bg-transparent")}>
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Link href="/" className={cn("group flex items-center gap-3 font-display font-bold tracking-[-0.03em]", scrolled || open ? "text-navy" : "text-white")} aria-label={`${siteConfig.name} home`}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-black text-white shadow-lg shadow-blue-600/20">MA</span>
          <span className="hidden sm:block">{siteConfig.shortName}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("rounded-full px-3 py-2 text-[13px] font-semibold transition", scrolled ? "text-slate-600 hover:bg-slate-100 hover:text-navy" : "text-slate-300 hover:bg-white/10 hover:text-white", active && (scrolled ? "bg-blue-50 text-brand" : "bg-white/10 text-white"))}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex"><Link href="/contact">Hire Me</Link></Button>
          <button type="button" className={cn("grid h-11 w-11 place-items-center rounded-full xl:hidden", scrolled || open ? "bg-slate-100 text-navy" : "bg-white/10 text-white")} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <m.nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white xl:hidden" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
            <div className="container-shell grid gap-1 py-5 sm:grid-cols-2">
              {navItems.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return <Link key={item.href} href={item.href} className={cn("rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100", active && "bg-blue-50 text-brand")}>{item.label}</Link>;
              })}
              <Button asChild className="mt-2 sm:col-span-2"><Link href="/contact">Start a project</Link></Button>
            </div>
          </m.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
