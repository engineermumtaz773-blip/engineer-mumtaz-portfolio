"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const next = () => setIndex((value) => (value + 1) % testimonials.length);
  const previous = () => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);
  return <section className="section-space bg-surface"><div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><SectionHeading eyebrow="Testimonials" title="Professional trust is earned in the details." description="Representative stakeholder feedback reflecting the delivery standards behind each engagement." /><div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[var(--shadow-soft)] sm:p-10"><Quote className="h-10 w-10 text-blue-200" /><AnimatePresence mode="wait"><m.div key={index} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.3 }}><div className="mt-5 flex gap-1" aria-label={`${item.rating} out of 5 stars`}>{Array.from({ length: item.rating }).map((_, star) => <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div><blockquote className="mt-5 font-display text-2xl font-semibold leading-10 tracking-[-0.035em] text-navy sm:text-3xl">“{item.quote}”</blockquote><div className="mt-7"><p className="font-bold text-navy">{item.name}</p><p className="mt-1 text-sm text-slate-500">{item.role}</p></div></m.div></AnimatePresence><div className="mt-8 flex gap-2"><button type="button" onClick={previous} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-brand"><ChevronLeft className="h-4 w-4" /></button><button type="button" onClick={next} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-brand"><ChevronRight className="h-4 w-4" /></button></div></div></div></section>;
}
