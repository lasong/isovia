import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { SITE, href } from "@/lib/site";
import { Button } from "@/components/ui/button";

/** Closing call to action, at the foot of the home and nuclear medicine pages. */
export function CtaBand({
  locale,
  content,
}: {
  locale: Locale;
  content: Content;
}) {
  const { finalCta } = content.home;

  return (
    <section className="bg-primary">
      <div className="container-page py-14 lg:py-16">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl leading-tight text-white sm:text-3xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {finalCta.body}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button variant="accent" size="lg" asChild>
              <Link href={href(locale, "contact")}>
                {finalCta.primaryCta}
                <ArrowRight />
              </Link>
            </Button>
            <Button variant="onDarkOutline" size="lg" asChild>
              <a href={`tel:${SITE.phone.raw}`}>
                <Phone />
                {SITE.phone.display}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
