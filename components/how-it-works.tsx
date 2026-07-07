import { howItWorksContent } from "@/lib/site-config";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-b border-border py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {howItWorksContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {howItWorksContent.subtitle}
          </p>
        </div>

        <ol className="mt-12 grid gap-8 lg:grid-cols-3">
          {howItWorksContent.steps.map((step) => (
            <li key={step.step} className="relative">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Step {step.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
