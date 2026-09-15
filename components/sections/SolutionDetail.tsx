import { Check, ChevronRight } from "lucide-react";
import type { Solution } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Body of a solution page: the numbered service areas, then the supply chain
 * where the solution has one. Shared by both solutions so the two pages cannot
 * drift apart in layout, only in copy.
 */
export function SolutionDetail({ solution }: { solution: Solution }) {
  const { areas, chain } = solution;

  return (
    <>
      <section className="container-page py-16 lg:py-24">
        <div className="space-y-12">
          {areas.map((area, index) => {
            // The middle area carries the coral: it keeps the page symmetrical
            // and lands on the service where a delay costs the most.
            const isTinted = index === 1;
            return (
              <article
                key={area.number}
                className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
              >
                <div>
                  <p
                    className={cn(
                      "font-display text-5xl font-bold",
                      isTinted ? "text-accent" : "text-primary/25",
                    )}
                  >
                    {area.number}
                  </p>
                  <h2 className="text-primary mt-3 text-xl leading-tight sm:text-2xl">
                    {area.title}
                  </h2>
                </div>

                <div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {area.intro}
                  </p>
                  <ul
                    className={cn(
                      "mt-6 grid gap-2.5 rounded-2xl border p-6 sm:grid-cols-2",
                      isTinted
                        ? "border-accent/25 bg-accent-tint"
                        : "border-border bg-card",
                    )}
                  >
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="text-foreground flex items-start gap-2.5 text-sm"
                      >
                        <Check
                          className={cn(
                            "mt-0.5 size-4 shrink-0",
                            isTinted ? "text-accent" : "text-primary",
                          )}
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {chain ? (
        <section className="border-border bg-muted/50 border-y">
          <div className="container-page py-16 lg:py-24">
            <h2 className="text-primary text-2xl sm:text-3xl">{chain.title}</h2>
            <ol className="mt-8 flex flex-col gap-2 lg:flex-row lg:items-center">
              {chain.steps.map((step, index) => {
                const isIsovia = step === "ISOVIA";
                return (
                  <li key={step} className="flex items-center gap-2 lg:flex-1">
                    <div
                      className={cn(
                        "w-full rounded-xl border px-5 py-3.5 text-center text-sm font-medium",
                        isIsovia
                          ? "border-accent bg-accent text-white"
                          : "border-border bg-card text-foreground",
                      )}
                    >
                      {step}
                    </div>
                    {index < chain.steps.length - 1 ? (
                      <ChevronRight
                        aria-hidden
                        className="text-muted-foreground size-5 shrink-0 rotate-90 lg:rotate-0"
                        strokeWidth={2}
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      ) : null}
    </>
  );
}
