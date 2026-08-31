import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "nuclearMedicine");
}

export default async function NuclearMedicinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const nm = content.nuclearMedicine;
  const { lead, diagnostics, radionuclides, theranostics, whyLogistics } = nm;

  return (
    <>
      <PageHero eyebrow={nm.eyebrow} title={nm.title} intro={nm.intro} />

      <section className="container-page py-16 lg:py-24">
        <p className="container-prose px-0 font-display text-xl leading-relaxed text-primary sm:text-2xl">
          {lead}
        </p>

        <div className="container-prose mt-14 px-0">
          <h2 className="text-2xl text-primary sm:text-3xl">
            {diagnostics.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {diagnostics.body}
          </p>
        </div>
      </section>

      {/* Radionuclides */}
      <section className="border-y border-border bg-muted/50">
        <div className="container-page py-16 lg:py-24">
          <h2 className="text-2xl text-primary sm:text-3xl">
            {radionuclides.title}
          </h2>

          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {radionuclides.items.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <dt className="mt-4 font-display text-lg text-primary">
                  {item.name}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Theranostics */}
      <section className="container-page py-16 lg:py-24">
        <div className="container-prose px-0">
          <h2 className="text-2xl text-primary sm:text-3xl">
            {theranostics.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {theranostics.body}
          </p>
        </div>
      </section>

      {/* Why logistics matters */}
      <section className="border-t border-border bg-primary">
        <div className="container-page py-16 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="mt-5 font-display text-2xl leading-tight text-white sm:text-3xl">
              {whyLogistics.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              {whyLogistics.body}
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {whyLogistics.affected.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl border-l-2 border-accent pl-6 text-base leading-relaxed text-white">
            {whyLogistics.closing}
          </p>
        </div>
      </section>

      <CtaBand locale={locale} content={content} />
    </>
  );
}
