import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().min(3, "Please add a subject.").max(120),
  message: z.string().trim().min(20, "Please provide at least 20 characters.").max(3000),
  website: z.string().max(0).optional()
});

export type ContactFormValues = z.infer<typeof contactSchema>;
