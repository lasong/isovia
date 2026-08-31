"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
  locales,
  localeNames,
  localeShortNames,
  withLocale,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Swaps the locale segment while preserving the rest of the path, so switching
 * language on /en/nuclear-medicine lands on /de/nuclear-medicine rather than
 * the home page. Writing NEXT_LOCALE means the middleware honours the choice
 * on any later visit to an unprefixed URL.
 */
export function LanguageSwitcher({
  current,
  label,
  className,
}: {
  current: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  function remember(locale: Locale) {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax`;
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Globe
        aria-hidden
        className="mr-1 size-4 text-muted-foreground"
        strokeWidth={1.75}
      />
      <span className="sr-only">{label}</span>
      {locales.map((locale) => {
        const isActive = locale === current;
        return (
          <Link
            key={locale}
            href={withLocale(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "true" : undefined}
            onClick={() => remember(locale)}
            className={cn(
              "rounded px-1.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
              isActive
                ? "bg-primary-tint text-primary"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            <span aria-hidden>{localeShortNames[locale]}</span>
            <span className="sr-only">{localeNames[locale]}</span>
          </Link>
        );
      })}
    </div>
  );
}
