import type { Metadata } from "next";
import TrustPassportHeader from "@/components/learn-more/Header";
import Hero from "@/components/learn-more/Hero";
import WhatIsTrustPassport from "@/components/learn-more/WhatIsTrustPassport";
import HowTrustBuilds from "@/components/learn-more/HowTrustBuilds";
import AlternativeSignals from "@/components/learn-more/AlternativeSignals";
import NotJustVerification from "@/components/learn-more/NotJustVerification";
import BiggerVision from "@/components/learn-more/BiggerVision";
import Cta from "@/components/learn-more/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What is Trust Passport | Habisolo",
  description:
    "Learn how the Habisolo Trust Passport brings verified identity, reputation and trust signals together into one portable profile.",
};

export default function TrustPassportPage() {
  return (
    <>
      <TrustPassportHeader />
      <main className="flex-1">
        <Hero />
        <WhatIsTrustPassport />
        <HowTrustBuilds />
        <AlternativeSignals />
        <NotJustVerification />
        <BiggerVision />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
