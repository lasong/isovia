import "server-only";
import { createElement } from "react";
import { Resend } from "resend";
import {
  EnquiryNotification,
  type EnquiryEmailProps,
} from "@/emails/EnquiryNotification";
import { SITE } from "@/lib/site";

/**
 * Throws on failure. The caller in actions/contact.ts deliberately swallows
 * that: by then the enquiry is already committed to the database, and telling
 * someone their time-critical request failed when it is safely stored would be
 * worse than a delayed notification.
 */
export async function sendEnquiryNotification(
  props: EnquiryEmailProps,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECIPIENT_EMAIL ?? SITE.email;
  const fromEmail = process.env.CONTACT_SENDER_EMAIL;
  const fromName = process.env.CONTACT_SENDER_NAME ?? SITE.name;

  // Local development without credentials: log instead of sending, so the
  // whole form can be exercised end to end without a Resend account.
  if (!apiKey || !fromEmail) {
    console.info(
      `[email] RESEND_API_KEY/CONTACT_SENDER_EMAIL not set — enquiry ${props.reference} not emailed.`,
      { to, enquiryType: props.enquiryType, company: props.company },
    );
    return;
  }

  const subject =
    props.enquiryType === "EMERGENCY"
      ? `[NOTFALL] ${props.reference} — ${props.company}: ${props.material}`
      : `${props.reference} — ${props.company}: ${props.material}`;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: [to],
    // Lets Operations reply straight to the enquirer.
    replyTo: props.email,
    subject,
    react: createElement(EnquiryNotification, props),
  });

  if (error) {
    throw new Error(`Resend rejected the message: ${error.message}`);
  }
}
