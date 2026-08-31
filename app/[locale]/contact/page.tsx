import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone, Siren } from "lucide-react";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const { direct, emergency } = content.contact;

  return (
    <>
      <PageHero
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        intro={content.contact.intro}
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:py-24">
        <ContactForm locale={locale} content={content} />

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <section className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-xl text-primary">{direct.title}</h2>
            <p className="mt-4 text-sm font-medium text-foreground">
              {direct.company}
            </p>

            <address className="mt-4 space-y-3.5 text-sm not-italic text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} />
                <span>
                  {direct.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" strokeWidth={1.75} />
                <a
                  href={`tel:${SITE.phone.raw}`}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {SITE.phone.display}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" strokeWidth={1.75} />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-foreground transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </p>
            </address>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {content.common.serviceAreaLabel}
              </p>
              <p className="mt-1.5 text-sm text-foreground">
                {content.common.serviceArea}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-accent/25 bg-accent-tint p-7">
            <Siren className="size-6 text-accent" strokeWidth={1.75} />
            <h2 className="mt-4 font-display text-lg text-accent-dark">
              {emergency.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {emergency.body}
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}
