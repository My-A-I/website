import { buildMailtoLink, ctaContent, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const contactHref = buildMailtoLink({
    subject: ctaContent.ctaSubject,
    body: ctaContent.ctaBody,
  });

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(15,23,42,0.03),rgba(13,148,136,0.08))] px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {ctaContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {ctaContent.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={contactHref}>{ctaContent.ctaLabel}</Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
