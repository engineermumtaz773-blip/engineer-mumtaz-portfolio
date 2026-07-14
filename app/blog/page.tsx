import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { BlogExplorer } from "@/components/shared/blog-explorer";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Blog", "Articles on software engineering, WordPress, responsive design, Next.js architecture, e-commerce QA, performance, and technical SEO.", "/blog");

export default function BlogPage() {
  const featured = posts.find((post) => post.featured) || posts[0];
  return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} /><PageHero eyebrow="Engineering notes" title="Practical thinking about modern web delivery." description="Focused articles on architecture, WordPress systems, responsive interfaces, performance, SEO, and production quality." /><section className="section-space bg-white"><div className="container-shell"><article className="grid overflow-hidden rounded-[30px] border border-slate-200 bg-surface lg:grid-cols-2"><div className="relative min-h-80"><Image src={featured.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div><div className="p-8 sm:p-12"><span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Featured article</span><h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] text-navy">{featured.title}</h2><p className="mt-5 leading-8 text-slate-600">{featured.excerpt}</p><p className="mt-5 text-sm font-semibold text-slate-400">{formatDate(featured.publishedAt)} · {featured.readingTime}</p><Button asChild className="mt-7"><Link href={`/blog/${featured.slug}`}>Read featured article <ArrowRight className="h-4 w-4" /></Link></Button></div></article></div></section><section className="section-space bg-surface"><div className="container-shell"><BlogExplorer /></div></section><section className="bg-white py-20"><div className="container-shell rounded-[28px] border border-slate-200 bg-surface p-8 text-center sm:p-12"><h2 className="font-display text-3xl font-bold tracking-[-0.045em] text-navy">Newsletter-ready foundation</h2><p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Connect your preferred email platform to turn new engineering articles into a focused newsletter. The interface is intentionally omitted until a verified list and consent workflow are configured.</p></div></section></>;
}
