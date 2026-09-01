import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalMarkdown } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { Markdown } from "@/components/Markdown";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "imprint");
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const markdown = await getLegalMarkdown(locale, "imprint");

  return (
    <div className="container-page py-16 lg:py-24">
      {/* Same left gutter as the header, footer and every other page; the
          measure is capped so the legal text stays readable. */}
      <div className="max-w-3xl">
        <Markdown content={markdown} />
      </div>
    </div>
  );
}
