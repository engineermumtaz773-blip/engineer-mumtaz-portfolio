import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
      <div className="page-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="absolute left-[-8rem] top-14 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-10rem] right-[-6rem] h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" aria-hidden="true" />
      <div className="container-shell relative">
        <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span aria-current="page" className="text-slate-200">{title}</span>
        </nav>
        <Badge className="border-white/15 bg-white/10 text-cyan-200">{eyebrow}</Badge>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}
