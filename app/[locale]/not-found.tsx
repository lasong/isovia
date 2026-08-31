import Link from "next/link";
import { defaultLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { href } from "@/lib/site";
import { Button } from "@/components/ui/button";

/**
 * Rendered inside the locale layout, which has already resolved a locale for
 * the shell. The page body itself falls back to German, since a 404 can be
 * reached by a URL whose locale segment was never valid.
 */
export default function NotFound() {
  const content = getContent(defaultLocale);

  return (
    <div className="container-page flex flex-col items-start py-24 lg:py-32">
      <p className="eyebrow font-eyebrow text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl text-primary sm:text-5xl">
        Seite nicht gefunden · Page not found
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Diese Seite existiert nicht oder wurde verschoben. This page does not exist
        or has been moved.
      </p>
      <Button size="lg" className="mt-9" asChild>
        <Link href={href(defaultLocale, "home")}>{content.nav.home}</Link>
      </Button>
    </div>
  );
}
