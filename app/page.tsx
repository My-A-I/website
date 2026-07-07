import { Benefits } from "@/components/benefits";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Industries } from "@/components/industries";
import { Problem } from "@/components/problem";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Industries />
        <Benefits />
        <Faq />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
