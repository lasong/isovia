import { promises as fs } from "fs";
import path from "path";
import { de } from "@/content/de";
import { en } from "@/content/en";
import { fr } from "@/content/fr";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const dictionaries: Record<Locale, Content> = { de, en, fr };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type LegalDocument = "imprint" | "privacy";

/**
 * Load a legal page's markdown for a locale and substitute the contact
 * placeholders, so the Impressum and privacy policy stay in step with
 * lib/site.ts rather than repeating the address in six files.
 */
export async function getLegalMarkdown(
  locale: Locale,
  document: LegalDocument,
): Promise<string> {
  const filePath = path.join(process.cwd(), "content", locale, `${document}.md`);
  const raw = await fs.readFile(filePath, "utf8");

  return raw
    .replaceAll("{{LEGAL_NAME}}", SITE.legalName)
    .replaceAll("{{OWNER}}", SITE.owner)
    .replaceAll("{{STREET}}", SITE.address.street)
    .replaceAll("{{POSTCODE}}", SITE.address.postalCode)
    .replaceAll("{{CITY}}", SITE.address.city)
    .replaceAll("{{REGION}}", SITE.address.region)
    .replaceAll("{{PHONE}}", SITE.phone.display)
    .replaceAll("{{EMAIL}}", SITE.email)
    .replaceAll("{{REGISTER_COURT}}", SITE.register.court)
    .replaceAll("{{REGISTER_NUMBER}}", SITE.register.number);
}
