import type { MetadataRoute } from "next";
import { defaultLocale, localeHtmlLang, locales } from "@/lib/i18n";
import { href, routes, siteUrl, type RouteKey } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(routes) as RouteKey[];

  return locales.flatMap((locale) =>
    keys.map((key) => ({
      url: `${siteUrl}${href(locale, key)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((candidate) => [
              localeHtmlLang[candidate],
              `${siteUrl}${href(candidate, key)}`,
            ]),
          ),
          "x-default": `${siteUrl}${href(defaultLocale, key)}`,
        },
      },
    })),
  );
}
