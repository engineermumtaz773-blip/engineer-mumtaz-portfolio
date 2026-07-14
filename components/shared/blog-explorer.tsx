"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { EmptyState } from "@/components/ui/empty-state";

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
  const filtered = useMemo(() => posts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <><div className="flex flex-col gap-5 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} type="button" className={`rounded-full px-4 py-2 text-sm font-semibold ${category === item ? "bg-navy text-white" : "bg-slate-100 text-slate-600 hover:text-brand"}`}>{item}</button>)}</div><label className="relative block min-w-64"><span className="sr-only">Search articles</span><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-blue-300 focus:bg-white" /></label></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((post) => <article key={post.slug} className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"><Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden"><Image src={post.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-[1.035]" sizes="(max-width: 768px) 100vw, 33vw" /></Link><div className="p-6"><div className="flex items-center gap-2 text-xs font-bold text-slate-400"><span className="text-brand">{post.category}</span><span>·</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time><span>·</span><span>{post.readingTime}</span></div><h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.04em] text-navy"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-brand">Read article <ArrowUpRight className="h-4 w-4" /></Link></div></article>)}</div>{!filtered.length ? <div className="mt-8"><EmptyState title="No matching articles" description="Try another search term or category." /></div> : null}</>;
}
