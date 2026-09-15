import Image from "next/image";

/**
 * Banner at the top of the pages that are not the one-pager. Pages that have
 * a photograph to show pass `image` and get the two-column treatment; the
 * others stay full-width text.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: { src: string; alt: string; width: number; height: number };
}) {
  const copy = (
    <>
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h1
        className={`text-primary mt-4 text-4xl leading-[1.12] sm:text-5xl ${
          image ? "" : "max-w-3xl"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-muted-foreground mt-6 text-lg leading-relaxed ${
          image ? "" : "max-w-2xl"
        }`}
      >
        {intro}
      </p>
    </>
  );

  return (
    <section className="hero-wash border-b">
      {image ? (
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div>{copy}</div>
          <div className="border-border shadow-primary/5 overflow-hidden rounded-2xl border shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="container-page py-14 lg:py-20">{copy}</div>
      )}
    </section>
  );
}
