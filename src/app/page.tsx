import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhoBenefits from "@/components/WhoBenefits";
import TrustLayer from "@/components/TrustLayer";
import Privacy from "@/components/Privacy";
import Future from "@/components/Future";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <WhoBenefits />
        <TrustLayer />
        <Privacy />
        <Future />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
