import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/shared/motion-provider";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";
import { Analytics } from "@/components/shared/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: { default: `${siteConfig.name} | Software Engineer`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { title: siteConfig.name, description: siteConfig.description, url: absoluteUrl(), siteName: siteConfig.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning><a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-xl transition focus:translate-y-0">Skip to content</a><MotionProvider><ScrollProgress /><Header /><main id="main-content">{children}</main><Footer /><BackToTop /></MotionProvider><JsonLd /><Analytics /></body></html>;
}
