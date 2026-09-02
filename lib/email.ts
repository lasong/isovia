import "server-only";
import { createElement } from "react";
import { BrevoClient } from "@getbrevo/brevo";
import { render } from "@react-email/render";
import {
  EnquiryNotification,
  type EnquiryEmailProps,
} from "@/emails/EnquiryNotification";
import { SITE } from "@/lib/site";

/**
 * Sends the enquiry notification to Operations via Brevo.
 *
 * Brevo is a French company storing personal data in the EU, which is what
 * lets section 5 of the privacy policy state that no third-country transfer
 * takes place for email — unlike a US provider, where an EU "sending region"
 * governs only dispatch and not storage.
 *
 * Throws on failure. The caller in actions/contact.ts deliberately swallows
 * that: by then the enquiry is already committed to the database, and telling
 * someone their time-critical request failed when it is safely stored would be
 * worse than a delayed notification.
 */
export async function sendEnquiryNotification(
  props: EnquiryEmailProps,
): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.CONTACT_SENDER_EMAIL;
  const fromName = process.env.CONTACT_SENDER_NAME ?? SITE.name;

  // CONTACT_RECIPIENT_EMAIL takes a comma-separated list, so a notification
  // can reach several inboxes (Operations plus the founder, for instance)
  // without redeploying.
  const addresses = (process.env.CONTACT_RECIPIENT_EMAIL ?? SITE.email)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  const to = (addresses.length > 0 ? addresses : [SITE.email]).map((email) => ({
    email,
  }));

  // Local development without credentials: log instead of sending, so the
  // whole form can be exercised end to end without a Brevo account.
  if (!apiKey || !fromEmail) {
    console.info(
      `[email] BREVO_API_KEY/CONTACT_SENDER_EMAIL not set — enquiry ${props.reference} not emailed.`,
      {
        to: to.map((recipient) => recipient.email),
        enquiryType: props.enquiryType,
        company: props.company,
      },
    );
    return;
  }

  const subject =
    props.enquiryType === "EMERGENCY"
      ? `[NOTFALL] ${props.reference} — ${props.company}: ${props.material}`
      : `${props.reference} — ${props.company}: ${props.material}`;

  // Brevo takes HTML and text rather than a React element, so the same
  // template is rendered to both.
  const element = createElement(EnquiryNotification, props);
  const [htmlContent, textContent] = await Promise.all([
    render(element),
    render(element, { plainText: true }),
  ]);

  const brevo = new BrevoClient({
    apiKey,
    timeoutInSeconds: 30,
    maxRetries: 3,
  });

  try {
    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: fromEmail, name: fromName },
      to,
      // Lets Operations reply straight to the enquirer.
      replyTo: { email: props.email, name: props.name },
      subject,
      htmlContent,
      textContent,
      // Surfaces the enquiry type in Brevo's own reporting.
      tags: [props.enquiryType.toLowerCase()],
    });
  } catch (cause) {
    const detail = cause instanceof Error ? cause.message : String(cause);
    throw new Error(`Brevo rejected the message: ${detail}`, { cause });
  }
}
