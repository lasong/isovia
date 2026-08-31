/** Banner at the top of the pages that are not the one-pager. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="hero-wash border-b">
      <div className="container-page py-14 lg:py-20">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="text-primary mt-4 max-w-3xl text-4xl leading-[1.12] sm:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
          {intro}
        </p>
      </div>
    </section>
  );
}
