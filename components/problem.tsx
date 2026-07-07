import { problemContent } from "@/lib/site-config";

export function Problem() {
  return (
    <section
      id="problem"
      className="scroll-mt-20 border-b border-border bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {problemContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {problemContent.subtitle}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problemContent.pains.map((pain) => (
            <li
              key={pain.title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {pain.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pain.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
