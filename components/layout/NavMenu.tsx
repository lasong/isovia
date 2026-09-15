"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import {
  href,
  navHref,
  primaryNav,
  sections,
  type NavItem,
  type RouteKey,
} from "@/lib/site";
import { useActiveSection } from "@/lib/use-active-section";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

/** Ids of the home page's anchored sections. */
const sectionIds = primaryNav
  .filter(
    (item): item is Extract<NavItem, { kind: "section" }> =>
      item.kind === "section",
  )
  .map((item) => sections[item.key]);

export function NavMenu({
  locale,
  content,
  onItemClick,
  orientation = "horizontal",
  // `content` is omitted from the Radix props because the underlying <nav>
  // already declares an HTML `content` attribute typed as string.
  ...props
}: Omit<NavigationMenuProps, "content"> & {
  locale: Locale;
  content: Content;
  onItemClick?: () => void;
}) {
  const pathname = usePathname();
  const homePath = href(locale, "home");
  const onHome = pathname === homePath;
  const activeSection = useActiveSection(sectionIds, onHome);
  const vertical = orientation === "vertical";

  const marker = vertical
    ? {
        base: "before:bg-accent before:absolute before:-left-3 before:top-1/2 before:w-0.5 before:-translate-y-1/2 before:transition-all",
        on: "before:h-5",
        off: "before:h-0 hover:before:h-5",
      }
    : {
        base: "after:bg-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:transition-all",
        on: "after:w-full",
        off: "after:w-0 hover:after:w-full",
      };

  const labelClass = (isActive: boolean) =>
    cn(
      "relative py-1 text-sm font-medium transition-colors",
      marker.base,
      isActive
        ? cn("text-primary", marker.on)
        : cn("text-foreground hover:text-primary", marker.off),
    );

  const solutionLink = (key: RouteKey) => {
    const target = href(locale, key);
    const isActive = pathname === target;
    return (
      <NavigationMenuLink key={key} asChild active={isActive || undefined}>
        <Link
          href={target}
          onClick={onItemClick}
          className={
            vertical
              ? labelClass(isActive)
              : cn(
                  "hover:bg-muted block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground",
                )
          }
        >
          {content.nav[key]}
        </Link>
      </NavigationMenuLink>
    );
  };

  return (
    <NavigationMenu orientation={orientation} {...props}>
      <NavigationMenuList className="gap-6 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-1">
        {primaryNav.map((item) => {
          if (item.kind === "menu") {
            const childActive = item.children.some(
              (key) => pathname === href(locale, key),
            );

            // A hover dropdown has nowhere to open inside the sheet, so on
            // mobile the two solutions are listed under their label instead.
            if (vertical) {
              return (
                <NavigationMenuItem key={item.key} className="w-full py-2">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {content.nav[item.key]}
                  </p>
                  <div className="mt-2 flex flex-col items-start gap-1">
                    {item.children.map(solutionLink)}
                  </div>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuTrigger
                  className={cn("h-auto px-0", labelClass(childActive))}
                >
                  {content.nav[item.key]}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-72 flex-col gap-1">
                    {item.children.map(solutionLink)}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          const target = navHref(locale, item);
          const isActive =
            item.kind === "route"
              ? pathname === target
              : activeSection === sections[item.key];

          return (
            <NavigationMenuItem key={`${item.kind}:${item.key}`}>
              <NavigationMenuLink asChild active={isActive || undefined}>
                <Link
                  href={target}
                  onClick={onItemClick}
                  className={labelClass(isActive)}
                >
                  {content.nav[item.key]}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
