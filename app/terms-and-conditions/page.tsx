import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Terms & Conditions", "Terms and conditions for use of the Engineer Mumtaz Ali portfolio website.", "/terms-and-conditions");
const sections = [
  ["Website purpose", "This website presents professional information, representative capabilities, services, articles, and portfolio material. Content is provided for general information and does not create a client, employment, partnership, or advisory relationship."],
  ["Enquiries and proposals", "Submitting a contact form does not guarantee acceptance of a project or role. Scope, responsibilities, timelines, fees, ownership, confidentiality, and deliverables should be confirmed in a separate written agreement."],
  ["Intellectual property", "Website design, original text, code presentation, and branded materials are protected by applicable intellectual-property law. Project trademarks and third-party technologies remain the property of their respective owners."],
  ["Portfolio representations", "Representative projects and sample interface visuals should be updated with verified client permissions, accurate links, and correct project descriptions before public launch."],
  ["External links", "External links may lead to third-party websites. The website owner is not responsible for third-party availability, content, security, or privacy practices."],
  ["Limitation of liability", "To the extent permitted by law, the website and its content are provided without guarantees regarding uninterrupted availability, completeness, or suitability for a particular purpose."],
  ["Changes", "These terms may change when the website, service model, or legal requirements change. Add a governing law, jurisdiction, business identity, and effective date before launch."]
];
export default function TermsPage() { return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms-and-conditions" }]} /><PageHero eyebrow="Legal" title="Terms & Conditions" description="General conditions for using this portfolio and initiating professional enquiries." /><section className="section-space bg-white"><div className="container-shell max-w-4xl"><div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-900">This is a production-ready policy structure, not jurisdiction-specific legal advice. Have it reviewed and complete the owner, jurisdiction, and effective-date details before launch.</div><div className="prose-content mt-10">{sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}</div></div></section></>; }
