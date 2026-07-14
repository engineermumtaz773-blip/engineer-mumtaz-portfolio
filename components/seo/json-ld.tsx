import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${absoluteUrl()}#person`,
        name: siteConfig.name,
        url: absoluteUrl(),
        jobTitle: "Software Engineer and Full Stack Web Developer",
        description: siteConfig.description,
        knowsAbout: ["Software Engineering", "Full Stack Development", "WordPress", "WooCommerce", "React", "Next.js", "Technical SEO"]
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl()}#website`,
        url: absoluteUrl(),
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${absoluteUrl()}#person` }
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
