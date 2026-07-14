"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";

const categories = ["All", "React", "Next.js", "WordPress", "WooCommerce", "Full Stack", "UI Design", "API", "Dashboard"] as const;
const pageSize = 6;

export function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => projects.filter((project) => {
    const matchesCategory = category === "All" || project.category === category;
    const haystack = `${project.title} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [category, query]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const changeCategory = (value: (typeof categories)[number]) => { setCategory(value); setPage(1); };

  return <div><div className="flex flex-col gap-5 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => changeCategory(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-brand"}`}>{item}</button>)}</div><label className="relative block min-w-64"><span className="sr-only">Search projects</span><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search projects" className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-blue-300 focus:bg-white" /></label></div>
  <AnimatePresence mode="wait"><m.div key={`${category}-${query}-${page}`} className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</m.div></AnimatePresence>
  {!visible.length ? <div className="mt-8"><EmptyState title="No matching projects" description="Try a different category or search term." /></div> : null}
  {pageCount > 1 ? <nav aria-label="Project pagination" className="mt-10 flex justify-center gap-2">{Array.from({ length: pageCount }).map((_, index) => <Button key={index} type="button" size="sm" variant={page === index + 1 ? "primary" : "secondary"} onClick={() => setPage(index + 1)} aria-current={page === index + 1 ? "page" : undefined}>{index + 1}</Button>)}</nav> : null}</div>;
}
