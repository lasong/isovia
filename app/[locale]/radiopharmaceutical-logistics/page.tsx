import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SolutionDetail } from "@/components/sections/SolutionDetail";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "radiopharmaLogistics");
}

export default async function RadiopharmaceuticalLogisticsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const solution = content.radiopharmaLogistics;

  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        intro={solution.intro}
      />
      <SolutionDetail solution={solution} />
      <CtaBand locale={locale} content={content} />
    </>
  );
}
