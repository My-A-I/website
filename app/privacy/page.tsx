import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { privacyPageContent } from "@/lib/privacy-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.companyName}`,
  description: `How ${siteConfig.companyName} collects and uses information on our website.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Back to home
          </Link>
          <h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {privacyPageContent.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective {privacyPageContent.effectiveDate}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {privacyPageContent.intro}
          </p>
          <div className="mt-10 space-y-8">
            {privacyPageContent.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
