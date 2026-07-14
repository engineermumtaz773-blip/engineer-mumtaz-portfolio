import { trustedBy } from "@/data/site";

export function LogoMarquee() {
  const items = [...trustedBy, ...trustedBy];
  return (
    <section id="trusted" className="overflow-hidden border-b border-slate-200 bg-white py-8" aria-label="Trusted audience">
      <p className="container-shell mb-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Built for ambitious teams and clients</p>
      <div className="relative"><div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" /><div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" /><div className="marquee-track flex w-max items-center"><div className="flex items-center">{items.map((item, index) => <div key={`${item}-${index}`} className="mx-4 flex h-14 min-w-48 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-8 font-display text-sm font-bold text-slate-500">{item}</div>)}</div></div></div>
    </section>
  );
}
