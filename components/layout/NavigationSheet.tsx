"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Phone } from "lucide-react";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavMenu } from "@/components/layout/NavMenu";

export function NavigationSheet({
  locale,
  content,
}: {
  locale: Locale;
  content: Content;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on navigation, otherwise the panel stays over the new page.
  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label={content.common.menuOpen}
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="gap-0">
        <VisuallyHidden>
          <SheetTitle>{content.common.menuOpen}</SheetTitle>
        </VisuallyHidden>

        <div className="p-5">
          <Image
            src="/logo.svg"
            alt={SITE.name}
            width={151}
            height={76}
            className="h-12 w-auto"
          />
        </div>

        <Separator />

        <nav className="px-5 py-6">
          <NavMenu
            locale={locale}
            content={content}
            orientation="vertical"
            className="max-w-none [&_a]:py-2 [&_a]:text-base"
            onItemClick={close}
          />
        </nav>

        <div className="mt-auto space-y-4 p-5">
          <Separator />
          <Button variant="accent" className="w-full" asChild>
            <a href={`tel:${SITE.phone.raw}`} onClick={close}>
              <Phone />
              {SITE.phone.display}
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
