import { z } from "zod";
import type { Content } from "@/content/types";

export const enquiryTypes = ["REGULAR", "EMERGENCY", "BACKUP"] as const;
export type EnquiryTypeValue = (typeof enquiryTypes)[number];

type Messages = Content["contact"]["form"]["errors"];

/**
 * Built from the active locale's error strings so the same schema can validate
 * on the client (for instant feedback) and again in the server action (which
 * is the only check that actually protects the database). Sharing one factory
 * means the two can never drift apart.
 */
export function buildContactSchema(messages: Messages) {
  return z.object({
    company: z.string().trim().min(2, messages.company),
    name: z.string().trim().min(2, messages.name),
    position: z.string().trim().max(120).optional().or(z.literal("")),
    email: z.string().trim().pipe(z.email(messages.email)),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    origin: z.string().trim().min(2, messages.origin),
    destination: z.string().trim().min(2, messages.destination),
    material: z.string().trim().min(2, messages.material),
    frequency: z.string().trim().max(120).optional().or(z.literal("")),
    temperature: z.string().trim().max(120).optional().or(z.literal("")),
    enquiryType: z.enum(enquiryTypes, { error: messages.enquiryType }),
    message: z.string().trim().max(4000).optional().or(z.literal("")),
    privacyAccepted: z.literal(true, { error: messages.privacy }),
    /**
     * Honeypot. Permissive on purpose: a filled value is handled in the server
     * action (which reports success without storing) rather than rejected here,
     * so a bot gets no signal that it was caught.
     */
    website: z.string().optional(),
  });
}

export type ContactInput = z.infer<ReturnType<typeof buildContactSchema>>;

export type ContactFieldName = keyof ContactInput;
