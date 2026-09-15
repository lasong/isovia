import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Quote } from "lucide-react";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { href } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "home");
}

/**
 * About and Responsibility are anchored sections here rather than routes. The
 * two solutions are pages of their own, reached from the Services dropdown:
 * they serve different customers, so neither belongs in the other's reading
 * flow and neither belongs in the middle of the home page.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const { hero, stats, about, emergency, responsibility, nuclearTeaser } =
    content.home;

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero-wash">
        <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow text-accent">{hero.eyebrow}</p>
            <h1 className="text-primary mt-5 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              {hero.title} <span className="text-accent">{hero.titleAccent}</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
              {hero.subtitle}
            </p>
            <Button size="lg" className="mt-9" asChild>
              <Link href={href(locale, "contact")}>
                {hero.primaryCta}
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="border-border overflow-hidden rounded-2xl border shadow-lg shadow-primary/5">
            <Image
              src="/images/hero-packages.jpg"
              alt={hero.imageAlt}
              width={1672}
              height={941}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Fact strip — deliberately factual: no availability claims the
            client's own ethics section says they will not make. */}
        <Separator />
        <div className="bg-card/60">
          <div className="container-page grid grid-cols-2 gap-6 py-7 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-primary font-display text-lg font-bold sm:text-xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1 text-xs leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Separator />
      </section>

      {/* --------------------------------------------------------------- About */}
      <section id="about" className="container-page scroll-mt-24 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-accent">{about.eyebrow}</p>
            <h2 className="text-primary mt-3 text-3xl leading-tight sm:text-4xl">
              {about.title}
            </h2>
          </div>

          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-muted-foreground text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-accent">{about.founder.eyebrow}</p>
            {/* Square source, so a fixed aspect keeps the crop predictable. */}
            <div className="border-border mt-5 max-w-[260px] overflow-hidden rounded-2xl border">
              <Image
                src="/images/alain-mugabo.jpg"
                alt={about.founder.imageAlt}
                width={1254}
                height={1254}
                sizes="260px"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-primary mt-5 text-2xl">{about.founder.name}</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {about.founder.role}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-base leading-relaxed">
              {about.founder.body}
            </p>
            <figure className="border-border bg-card mt-7 rounded-2xl border p-7">
              <Quote aria-hidden className="text-accent/50 size-7" strokeWidth={1.5} />
              <blockquote className="text-primary font-display mt-3 text-lg leading-relaxed font-semibold">
                {about.founder.quote}
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Emergency band */}
      <section className="bg-accent">
        <div className="container-page flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/75">{emergency.eyebrow}</p>
            <h2 className="mt-3 text-2xl leading-tight text-white sm:text-3xl">
              {emergency.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              {emergency.body}
            </p>
          </div>
          <Button variant="onDark" size="lg" className="shrink-0" asChild>
            <Link href={href(locale, "contact")}>
              {emergency.cta}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* ------------------------------------------------------ Responsibility */}
      <section
        id="responsibility"
        className="container-page scroll-mt-24 py-16 lg:py-24"
      >
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">{responsibility.eyebrow}</p>
          <h2 className="text-primary mt-3 text-3xl leading-tight sm:text-4xl">
            {responsibility.title}
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
            {responsibility.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {[responsibility.commitment, responsibility.ethics].map((group) => (
            <div key={group.title}>
              <h3 className="text-primary text-xl">{group.title}</h3>
              <dl className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="border-border border-b pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-foreground text-sm font-semibold">
                      {item.title}
                    </dt>
                    <dd className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------- Nuclear medicine teaser */}
      <section className="bg-muted/50 border-t">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16">
          <div className="border-border overflow-hidden rounded-2xl border">
            <Image
              src="/images/conveyor-packages.jpg"
              alt={nuclearTeaser.imageAlt}
              width={1672}
              height={941}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow text-accent">{nuclearTeaser.eyebrow}</p>
            <h2 className="text-primary mt-3 text-2xl leading-tight sm:text-3xl">
              {nuclearTeaser.title}
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed">
              {nuclearTeaser.body}
            </p>
            <Button variant="outline" className="mt-7" asChild>
              <Link href={href(locale, "nuclearMedicine")}>
                {nuclearTeaser.cta}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} content={content} />
    </>
  );
}
