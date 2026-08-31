"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href, navHref, primaryNav } from "@/lib/site";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function NavMenu({
  locale,
  content,
  onItemClick,
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

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-1">
        {primaryNav.map((item) => {
          const target = navHref(locale, item);

          // A section link is "current" only while the home page is showing,
          // since that is the only page those anchors exist on.
          const isActive =
            item.kind === "route" ? pathname === target : onHome;

          return (
            <NavigationMenuItem key={`${item.kind}:${item.key}`}>
              <NavigationMenuLink asChild active={isActive || undefined}>
                <Link
                  href={target}
                  onClick={onItemClick}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors",
                    // Coral underline on the active route, growing on hover —
                    // the one place the accent appears in the chrome.
                    "after:bg-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:transition-all",
                    item.kind === "route" && isActive
                      ? "text-primary after:w-full"
                      : "text-foreground hover:text-primary after:w-0 hover:after:w-full",
                  )}
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
