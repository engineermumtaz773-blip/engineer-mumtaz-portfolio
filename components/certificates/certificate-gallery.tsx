"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Search, X, ZoomIn } from "lucide-react";
import { useMemo, useState } from "react";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/types";
import { EmptyState } from "@/components/ui/empty-state";

export function CertificateGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Certificate | null>(null);
  const categories = ["All", ...Array.from(new Set(certificates.map((item) => item.category)))];
  const filtered = useMemo(() => certificates.filter((item) => (category === "All" || item.category === category) && `${item.title} ${item.issuer}`.toLowerCase().includes(query.toLowerCase())), [category, query]);

  return <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}><div className="flex flex-col gap-5 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-semibold ${category === item ? "bg-navy text-white" : "bg-slate-100 text-slate-600 hover:text-brand"}`}>{item}</button>)}</div><label className="relative block min-w-64"><span className="sr-only">Search certificates</span><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search certificates" className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-300 focus:bg-white" /></label></div>
  <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">{filtered.map((certificate, index) => <button key={certificate.title} type="button" onClick={() => setSelected(certificate)} className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-[24px] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"><div className={`relative ${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}><Image src={certificate.image} alt={`${certificate.title} certificate`} fill className="object-cover transition duration-500 group-hover:scale-[1.02]" sizes="(max-width: 640px) 100vw, 33vw" /><div className="absolute inset-0 grid place-items-center bg-navy/0 transition group-hover:bg-navy/35"><span className="grid h-12 w-12 scale-75 place-items-center rounded-full bg-white text-navy opacity-0 transition group-hover:scale-100 group-hover:opacity-100"><ZoomIn className="h-5 w-5" /></span></div></div><div className="p-5"><span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{certificate.category}</span><h3 className="mt-2 font-display text-lg font-bold text-navy">{certificate.title}</h3><p className="mt-2 text-sm text-slate-500">{certificate.issuer} · {certificate.year}</p></div></button>)}</div>
  {!filtered.length ? <EmptyState title="No matching certificates" description="Try another search term or category." /> : null}
  <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-[80] bg-slate-950/80 backdrop-blur-sm" /><Dialog.Content className="fixed left-1/2 top-1/2 z-[81] w-[min(94vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-white p-3 shadow-2xl focus:outline-none"><Dialog.Title className="sr-only">{selected?.title}</Dialog.Title>{selected ? <div><div className="relative aspect-[16/11] overflow-hidden rounded-[20px] bg-slate-100"><Image src={selected.image} alt={`${selected.title} enlarged certificate`} fill className="object-contain" sizes="90vw" /></div><div className="p-5"><h2 className="font-display text-2xl font-bold text-navy">{selected.title}</h2><p className="mt-2 text-slate-500">{selected.issuer} · {selected.year}</p></div></div> : null}<Dialog.Close className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-navy text-white" aria-label="Close certificate"><X className="h-4 w-4" /></Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>;
}
