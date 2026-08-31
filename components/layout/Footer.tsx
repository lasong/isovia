import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { SITE, href, legalNav, navHref, primaryNav } from "@/lib/site";

export function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content: Content;
}) {
  return (
    <footer className="mt-auto bg-footer text-white/70">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl text-white">{SITE.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{content.footer.tagline}</p>
          <p className="mt-5 text-xs uppercase tracking-wider text-white/45">
            {content.common.serviceAreaLabel}
          </p>
          <p className="mt-1 text-sm">{content.common.serviceArea}</p>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2
            id="footer-nav"
            className="eyebrow font-eyebrow text-white/45"
          >
            {content.footer.navTitle}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNav.map((item) => (
              <li key={`${item.kind}:${item.key}`}>
                <Link
                  href={navHref(locale, item)}
                  className="transition-colors hover:text-white"
                >
                  {content.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow font-eyebrow text-white/45">
            {content.footer.contactTitle}
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
              <span>
                {SITE.legalName}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0" strokeWidth={1.75} />
              <a
                href={`tel:${SITE.phone.raw}`}
                className="transition-colors hover:text-white"
              >
                {SITE.phone.display}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0" strokeWidth={1.75} />
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-labelledby="footer-legal">
          <h2
            id="footer-legal"
            className="eyebrow font-eyebrow text-white/45"
          >
            {content.footer.legalTitle}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalNav.map((key) => (
              <li key={key}>
                <Link
                  href={href(locale, key)}
                  className="transition-colors hover:text-white"
                >
                  {content.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {content.footer.copyright}.{" "}
            {content.footer.disclaimer}
          </p>
          <p>
            {SITE.register.court} · {SITE.register.number}
          </p>
        </div>
      </div>
    </footer>
  );
}
