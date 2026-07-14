import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ message: "Please review the form fields and try again.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    if (parsed.data.website) return NextResponse.json({ message: "Message received." });
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) return NextResponse.json({ message: "The contact service is not configured yet. Add the Resend environment variables before launch." }, { status: 503 });
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `[Portfolio enquiry] ${parsed.data.subject}`,
      text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone || "Not provided"}\n\n${parsed.data.message}`
    });
    if (error) return NextResponse.json({ message: "The email provider rejected the message. Please try again later." }, { status: 502 });
    return NextResponse.json({ message: "Thank you. Your message has been sent successfully." });
  } catch {
    return NextResponse.json({ message: "The request could not be processed." }, { status: 500 });
  }
}
