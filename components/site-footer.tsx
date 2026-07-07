import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/20 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-base font-semibold text-foreground">
            {siteConfig.companyName}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © {siteConfig.copyrightYear} {siteConfig.companyName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
