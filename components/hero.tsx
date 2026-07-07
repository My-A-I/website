import { buildMailtoLink, heroContent, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function Hero() {
  const contactHref = buildMailtoLink({
    subject: heroContent.ctaSubject,
    body: heroContent.ctaBody,
  });

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.12),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {siteConfig.tagline}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {heroContent.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {heroContent.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={contactHref}>{heroContent.ctaLabel}</Button>
            <Button href="#how-it-works" variant="outline">
              See how it works
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Or email us directly at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
