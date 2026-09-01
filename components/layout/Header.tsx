import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { SITE, href } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NavMenu } from "@/components/layout/NavMenu";
import { NavigationSheet } from "@/components/layout/NavigationSheet";

export function Header({
  locale,
  content,
}: {
  locale: Locale;
  content: Content;
}) {
  return (
    <header className="bg-background/95 sticky top-0 z-40 backdrop-blur-sm">
      {/* Utility bar: the phone number is the fastest route for a time-critical
          request, so it stays visible above the fold on every page. */}
      <div className="hidden lg:block">
        <div className="container-page text-muted-foreground flex h-9 items-center justify-between text-xs">
          <p>
            <span className="text-foreground font-medium">
              {content.common.serviceAreaLabel}:
            </span>{" "}
            {content.common.serviceArea}
          </p>
          <LanguageSwitcher
            current={locale}
            label={content.common.languageLabel}
          />
        </div>
        <Separator />
      </div>

      <div className="container-page flex h-20 items-center justify-between gap-4 lg:h-24 lg:gap-6">
        {/* logo.svg is trimmed to the artwork (no padding), so the height
            class is the height of the lockup itself, not of a larger box. */}
        <Link
          href={href(locale, "home")}
          className="flex items-center"
          aria-label={SITE.name}
        >
          <Image
            src="/logo.svg"
            alt={`${SITE.name} — ${content.meta.tagline}`}
            width={183}
            height={60}
            priority
            className="h-7 w-auto lg:h-9"
          />
        </Link>

        <NavMenu
          locale={locale}
          content={content}
          className="hidden lg:flex"
          aria-label={content.nav.home}
        />

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            current={locale}
            label={content.common.languageLabel}
            className="lg:hidden"
          />
          <Button variant="accent" size="sm" className="hidden sm:inline-flex" asChild>
            <a href={`tel:${SITE.phone.raw}`}>
              <Phone />
              <span className="hidden md:inline">{SITE.phone.display}</span>
              <span className="md:hidden">{content.common.phoneLabel}</span>
            </a>
          </Button>
          <NavigationSheet locale={locale} content={content} />
        </div>
      </div>

      <Separator />
    </header>
  );
}
