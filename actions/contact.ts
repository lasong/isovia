"use server";

import { getContent } from "@/lib/content";
import { sendEnquiryNotification } from "@/lib/email";
import { isLocale, type Locale } from "@/lib/i18n";
import { prisma } from "@/lib/prisma";
import { getEnquiryReference } from "@/lib/reference";
import {
  buildContactSchema,
  type ContactFieldName,
  type ContactInput,
} from "@/lib/validation/contact";

export type ContactPayload = ContactInput & { locale: Locale };

export type ContactResult =
  | { success: true; reference: string }
  | {
      success: false;
      errors: Partial<Record<ContactFieldName | "root", string>>;
    };

export async function submitEnquiry(
  payload: ContactPayload,
): Promise<ContactResult> {
  const locale = isLocale(payload.locale) ? payload.locale : "de";
  const messages = getContent(locale).contact.form.errors;

  // Honeypot: report success without storing anything, so a bot gets no
  // signal that it was filtered.
  if (payload.website) {
    return { success: true, reference: getEnquiryReference("botsubmission") };
  }

  const parsed = buildContactSchema(messages).safeParse(payload);

  if (!parsed.success) {
    const errors: Partial<Record<ContactFieldName, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactFieldName | undefined;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { success: false, errors };
  }

  const data = parsed.data;
  const optional = (value?: string) => (value?.trim() ? value.trim() : null);

  let enquiry;
  try {
    enquiry = await prisma.contactEnquiry.create({
      data: {
        company: data.company,
        name: data.name,
        position: optional(data.position),
        email: data.email,
        phone: optional(data.phone),
        origin: data.origin,
        destination: data.destination,
        material: data.material,
        frequency: optional(data.frequency),
        temperature: optional(data.temperature),
        enquiryType: data.enquiryType,
        message: optional(data.message),
        locale,
      },
    });
  } catch (error) {
    // The database is the only step whose failure genuinely loses the enquiry,
    // so this is the one that surfaces to the visitor.
    console.error("[contact] Failed to store enquiry", error);
    return { success: false, errors: { root: messages.submit } };
  }

  const reference = getEnquiryReference(enquiry.id);

  try {
    await sendEnquiryNotification({
      reference,
      enquiryType: enquiry.enquiryType,
      locale,
      submittedAt: enquiry.createdAt.toISOString().replace("T", " ").slice(0, 16),
      company: enquiry.company,
      name: enquiry.name,
      position: enquiry.position,
      email: enquiry.email,
      phone: enquiry.phone,
      origin: enquiry.origin,
      destination: enquiry.destination,
      material: enquiry.material,
      frequency: enquiry.frequency,
      temperature: enquiry.temperature,
      message: enquiry.message,
    });

    await prisma.contactEnquiry.update({
      where: { id: enquiry.id },
      data: { notified: true },
    });
  } catch (error) {
    // Deliberately not surfaced. The enquiry is stored; `notified` stays false
    // so undelivered ones can be found with a single query and followed up.
    console.error(
      `[contact] Enquiry ${reference} stored but notification failed`,
      error,
    );
  }

  return { success: true, reference };
}
