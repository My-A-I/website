import { industriesContent } from "@/lib/site-config";

export function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-20 border-b border-border bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {industriesContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {industriesContent.subtitle}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {industriesContent.industries.map((industry) => (
            <li
              key={industry.name}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {industry.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {industry.example}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
