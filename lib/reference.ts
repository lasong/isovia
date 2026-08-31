/**
 * Short, human-quotable reference derived from the enquiry's cuid.
 * Shown on the confirmation screen and in the notification subject so a caller
 * and the operations inbox can talk about the same enquiry over the phone.
 * Uppercase and stripped of characters that are ambiguous when read aloud.
 */
export function getEnquiryReference(id: string): string {
  const cleaned = id.replace(/[^a-z0-9]/gi, "").toUpperCase();
  const tail = cleaned.slice(-6).replace(/[OI]/g, (c) => (c === "O" ? "0" : "1"));
  return `ISO-${tail}`;
}
