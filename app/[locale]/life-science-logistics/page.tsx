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
  return buildMetadata(locale, "lifeScienceLogistics");
}

export default async function LifeScienceLogisticsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const solution = content.lifeScienceLogistics;

  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        intro={solution.intro}
        image={
          solution.imageAlt
            ? {
                src: "/images/life-science-cryogenic.jpg",
                alt: solution.imageAlt,
                width: 1536,
                height: 1024,
              }
            : undefined
        }
      />
      <SolutionDetail solution={solution} />
      <CtaBand locale={locale} content={content} />
    </>
  );
}
