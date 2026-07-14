import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <section className="relative grid min-h-[88vh] place-items-center overflow-hidden bg-navy px-4 pt-24 text-center text-white"><div className="page-grid absolute inset-0 opacity-35" /><div className="relative max-w-3xl"><p className="font-display text-[clamp(7rem,25vw,15rem)] font-black leading-none tracking-[-0.09em] text-white/8">404</p><div className="-mt-10 sm:-mt-20"><Search className="mx-auto h-10 w-10 text-cyan-300" /><h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-6xl">This page is outside the system.</h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">The address may be outdated, mistyped, or moved. Return to the portfolio and continue from a verified page.</p><Button asChild size="lg" className="mt-8"><Link href="/"><ArrowLeft className="h-4 w-4" /> Back to home</Link></Button></div></div></section>;
}
