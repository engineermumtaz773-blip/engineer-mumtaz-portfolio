import { PageHero } from "@/components/ui/page-hero";
import { CertificateGallery } from "@/components/certificates/certificate-gallery";
import { ContactCta } from "@/components/sections/contact-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Certificates",
  "Browse Engineer Mumtaz Ali's development, WordPress, responsive design, automation, JavaScript, and SEO certificates.",
  "/certificates"
);

export default function CertificatesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Certificates", path: "/certificates" }]} />
      <PageHero description="A searchable gallery of training and capability-building credentials." eyebrow="Professional development" title="Certificates and focused learning milestones." />
      <section className="section-space bg-surface">
        <div className="container-shell">
          <CertificateGallery />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
