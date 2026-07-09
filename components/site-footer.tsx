import Link from "next/link";
import { legalConfig, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/20 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-base font-semibold text-foreground">
              {siteConfig.companyName}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            {legalConfig.legalEntityName !== siteConfig.companyName ? (
              <p className="mt-2 text-xs text-muted-foreground">
                {siteConfig.companyName} is a service of{" "}
                {legalConfig.legalEntityName}.
              </p>
            ) : null}
          </div>
          <nav aria-label="Legal">
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        <p className="text-sm text-muted-foreground">
          © {siteConfig.copyrightYear} {siteConfig.companyName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
