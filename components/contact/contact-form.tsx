"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";

const fields = [
  { name: "name" as const, label: "Name", type: "text", placeholder: "Your full name" },
  { name: "email" as const, label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "phone" as const, label: "Phone", type: "tel", placeholder: "+00 000 000 000" },
  { name: "subject" as const, label: "Subject", type: "text", placeholder: "Project, role, or consultation" }
];

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema), defaultValues: { website: "" } });
  const onSubmit = async (values: ContactFormValues) => {
    setStatus(null);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Message could not be sent.");
      setStatus({ type: "success", message: result.message || "Your message has been sent." });
      reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Message could not be sent." });
    }
  };

  return <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8" noValidate><div className="grid gap-5 sm:grid-cols-2">{fields.map((field) => <label key={field.name} className="block"><span className="mb-2 block text-sm font-bold text-navy">{field.label}</span><input type={field.type} placeholder={field.placeholder} {...register(field.name)} aria-invalid={Boolean(errors[field.name])} className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100" />{errors[field.name] ? <span className="mt-2 block text-xs font-medium text-red-600">{errors[field.name]?.message}</span> : null}</label>)}</div><label className="mt-5 block"><span className="mb-2 block text-sm font-bold text-navy">Message</span><textarea rows={7} placeholder="Describe the current situation, required outcome, preferred timeline, and any useful links." {...register("message")} aria-invalid={Boolean(errors.message)} className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100" />{errors.message ? <span className="mt-2 block text-xs font-medium text-red-600">{errors.message.message}</span> : null}</label><input tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />{status ? <div role="status" className={`mt-5 rounded-2xl px-4 py-3 text-sm font-medium ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>{status.message}</div> : null}<Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>{isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}{isSubmitting ? "Sending…" : "Send message"}</Button><p className="mt-4 text-xs leading-6 text-slate-500">Your information is used only to respond to this enquiry. Do not include passwords or sensitive credentials.</p></form>;
}
