import type { Locale } from "@/lib/i18n";

/**
 * Single source of truth for contact details, so the header, footer, contact
 * page, Impressum and notification email can never drift apart.
 * Values come from the client's Impressum (section 6 of the content documents).
 */
export const SITE = {
  name: "ISOVIA",
  legalName: "Medical Products & Services Mugabo e.K.",
  owner: "Alain Mugabo",
  phone: {
    /** For tel: links — no spaces. */
    raw: "+4915153781930",
    display: "+49 151 53781930",
  },
  email: "operations@isovia.eu",
  address: {
    street: "Oberaustrasse 98",
    postalCode: "53179",
    city: "Bonn",
    region: "Nordrhein-Westfalen",
    country: "DE",
  },
  register: {
    court: "Amtsgericht Bonn",
    number: "HRA 10361",
  },
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://isovia.eu";

export const routes = {
  home: "",
  radiopharmaLogistics: "radiopharmaceutical-logistics",
  lifeScienceLogistics: "life-science-logistics",
  nuclearMedicine: "nuclear-medicine",
  contact: "contact",
  imprint: "imprint",
  privacy: "privacy",
} as const;

export type RouteKey = keyof typeof routes;

/** Anchored sections of the home page. */
export const sections = {
  about: "about",
  responsibility: "responsibility",
} as const;

export type SectionKey = keyof typeof sections;

export function href(locale: Locale, key: RouteKey): string {
  const segment = routes[key];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function sectionHref(locale: Locale, key: SectionKey): string {
  return `/${locale}#${sections[key]}`;
}

export type NavItem =
  | { kind: "section"; key: SectionKey }
  | { kind: "route"; key: RouteKey }
  /** A label that opens a dropdown rather than going anywhere itself. */
  | { kind: "menu"; key: "services"; children: RouteKey[] };

/** Header and footer navigation, in order. */
export const primaryNav: NavItem[] = [
  { kind: "section", key: "about" },
  { kind: "section", key: "responsibility" },
  {
    kind: "menu",
    key: "services",
    children: ["radiopharmaLogistics", "lifeScienceLogistics"],
  },
  { kind: "route", key: "nuclearMedicine" },
  { kind: "route", key: "contact" },
];

/**
 * Footer navigation: the dropdown has no destination of its own, so it
 * flattens into the two solution pages rather than appearing as a dead label.
 */
export const footerNav: Exclude<NavItem, { kind: "menu" }>[] =
  primaryNav.flatMap((item) =>
    item.kind === "menu"
      ? item.children.map((key) => ({ kind: "route" as const, key }))
      : [item],
  );

export const legalNav: RouteKey[] = ["imprint", "privacy"];

/** Resolve a nav item to its href. Menu labels have none — they open. */
export function navHref(
  locale: Locale,
  item: Exclude<NavItem, { kind: "menu" }>,
): string {
  return item.kind === "route"
    ? href(locale, item.key)
    : sectionHref(locale, item.key);
}
