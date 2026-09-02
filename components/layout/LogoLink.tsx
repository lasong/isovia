"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * The logo always returns you to the top of the home page.
 *
 * Navigating from another route is enough on its own — Next scrolls to top.
 * The case that needs handling is being *already* on the home page, where
 * clicking a link to the current route does nothing: if the visitor has
 * scrolled down, or followed a #services anchor, the page would just sit
 * there. So on the home page the click is intercepted, any lingering hash is
 * dropped from the URL (otherwise a reload jumps back down), and the page
 * scrolls up.
 */
export function LogoLink({
  homeHref,
  label,
  children,
  className,
  onNavigate,
}: {
  homeHref: string;
  label: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onNavigate?.();

    if (pathname !== homeHref) return; // let Next navigate and scroll to top

    event.preventDefault();

    if (window.location.hash) {
      window.history.replaceState(null, "", homeHref);
    }

    // globals.css sets scroll-behavior: smooth, which this inherits.
    window.scrollTo({ top: 0 });
  }

  return (
    <Link
      href={homeHref}
      aria-label={label}
      onClick={handleClick}
      className={cn("flex items-center", className)}
    >
      {children}
    </Link>
  );
}
