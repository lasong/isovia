export const locales = ["de", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

/** German first: the company is in Bonn and its first market is NRW/Hesse/RLP. */
export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
};

/** Short labels for the header switcher, where horizontal space is tight. */
export const localeShortNames: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
};

/** BCP 47 tags for <html lang> and hreflang alternates. */
export const localeHtmlLang: Record<Locale, string> = {
  de: "de-DE",
  en: "en",
  fr: "fr",
};

export function isLocale(value: string | undefined): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

/**
 * Pick the best locale from an Accept-Language header, falling back to German.
 * Deliberately small: we only need to rank three languages, so a full RFC 4647
 * lookup would be more machinery than the problem deserves.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="))
        ?.slice(2);
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q) : 1 };
    })
    .filter((entry) => entry.tag && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}

/**
 * Swap the locale segment of a pathname, keeping the rest of the route intact
 * so the language switcher never dumps the visitor back on the home page.
 */
export function withLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}`;
}
