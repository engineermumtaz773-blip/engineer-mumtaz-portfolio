import { PageHero } from "@/components/ui/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Privacy Policy", "Privacy policy for the Engineer Mumtaz Ali portfolio website.", "/privacy-policy");
const sections = [
  ["Information collected", "The website may collect information you submit through the contact form, including your name, email address, phone number, subject, and message. Basic analytics data may be collected only when the configured analytics services are enabled."],
  ["How information is used", "Submitted information is used to respond to enquiries, evaluate project or role fit, maintain communication, protect the website from abuse, and improve the website experience."],
  ["Third-party services", "The production deployment may use Vercel for hosting, Resend for contact email delivery, Google Analytics 4, and Microsoft Clarity. Each service processes data under its own privacy terms and should be configured only after review."],
  ["Retention and security", "Enquiry information should be retained only as long as needed for communication, legal obligations, or legitimate business records. Reasonable technical and organizational controls should be used, but no online transmission can be guaranteed completely secure."],
  ["Your choices", "You may request access, correction, or deletion of information submitted through the website, subject to applicable law and legitimate record-keeping requirements."],
  ["Policy updates", "This policy may be updated when website features, analytics, service providers, or legal requirements change. The production owner should add an effective date before launch."]
];
export default function PrivacyPage() { return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} /><PageHero eyebrow="Legal" title="Privacy Policy" description="A clear summary of how information submitted through this portfolio may be handled." /><section className="section-space bg-white"><div className="container-shell max-w-4xl"><div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-900">Review this policy with a qualified legal professional and add the verified business identity, jurisdiction, contact details, cookie practices, and effective date before production launch.</div><div className="prose-content mt-10">{sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}</div></div></section></>; }
