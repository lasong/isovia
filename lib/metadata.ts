import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { defaultLocale, localeHtmlLang, locales, type Locale } from "@/lib/i18n";
import { href, siteUrl, type RouteKey } from "@/lib/site";

/**
 * Per-page metadata including hreflang alternates for all three locales.
 * Titles are `absolute` because each already carries the brand — letting the
 * layout template append "| ISOVIA" a second time would double it.
 */
export function buildMetadata(locale: Locale, key: RouteKey): Metadata {
  const content = getContent(locale);
  const page = content.meta.pages[key];
  const path = href(locale, key);

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((candidate) => [localeHtmlLang[candidate], href(candidate, key)]),
  );
  languages["x-default"] = href(defaultLocale, key);

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: path, languages },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}${path}`,
      siteName: content.meta.siteName,
      locale: localeHtmlLang[locale],
      type: "website",
      images: [
        {
          url: "/images/hero-packages.jpg",
          width: 1672,
          height: 941,
          alt: content.home.hero.imageAlt,
        },
      ],
    },
  };
}
