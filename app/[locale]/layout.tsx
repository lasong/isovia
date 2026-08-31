import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Archivo } from "next/font/google";
import "../globals.css";
import { getContent } from "@/lib/content";
import {
  isLocale,
  localeHtmlLang,
  locales,
  type Locale,
} from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Display face for headlines and eyebrows. The brochure uses Acumin Pro Bold,
 * an Adobe Font that cannot be self-hosted; Archivo is the closest free
 * grotesque in the same lineage. Body copy uses the Arial system stack (see
 * globals.css), exactly as the brochure does, so no second webfont is loaded.
 */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const content = getContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: content.meta.pages.home.title,
      template: `%s | ${content.meta.siteName}`,
    },
    description: content.meta.pages.home.description,
    openGraph: {
      siteName: content.meta.siteName,
      locale: localeHtmlLang[locale],
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale: Locale = raw;
  const content = getContent(locale);

  return (
    <html
      lang={localeHtmlLang[locale]}
      className={archivo.variable}
    >
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          {content.common.skipToContent}
        </a>
        <Header locale={locale} content={content} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} content={content} />
      </body>
    </html>
  );
}
