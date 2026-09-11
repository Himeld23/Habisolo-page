import type { Metadata } from "next";
import Header from "@/components/investors/Header";
import Hero from "@/components/investors/Hero";
import WhyHabisolo from "@/components/investors/WhyHabisolo";
import ProductEcosystem from "@/components/investors/ProductEcosystem";
import MarketOpportunity from "@/components/investors/MarketOpportunity";
import BusinessModel from "@/components/investors/BusinessModel";
import EarlyValidation from "@/components/investors/EarlyValidation";
import WhyInvestNow from "@/components/investors/WhyInvestNow";
import RoundEnables from "@/components/investors/RoundEnables";
import WhereWeAreToday from "@/components/investors/WhereWeAreToday";
import PreSeedStage from "@/components/investors/PreSeedStage";
import FounderVision from "@/components/investors/FounderVision";
import Cta from "@/components/investors/Cta";
import Footer from "@/components/investors/Footer";

export const metadata: Metadata = {
  title: "Investors | Habisolo",
  description:
    "Habisolo is building the trust infrastructure for shared living. Learn about our product ecosystem, market opportunity and Pre-Seed investment round.",
};

export default function InvestorsPage() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <WhyHabisolo />
        <ProductEcosystem />
        <MarketOpportunity />
        <BusinessModel />
        <EarlyValidation />
        <WhyInvestNow />
        <RoundEnables />
        <WhereWeAreToday />
        <PreSeedStage />
        <FounderVision />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
