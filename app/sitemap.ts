import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/projects", "/skills", "/resume", "/certificates", "/blog", "/contact", "/privacy-policy", "/terms-and-conditions"];
  return [
    ...pages.map((path) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...posts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(post.publishedAt), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...projects.map((project) => ({ url: absoluteUrl(`/projects/${project.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }))
  ];
}
