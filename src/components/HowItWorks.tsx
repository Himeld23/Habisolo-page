import Image from "next/image";
import { ClipboardCheck } from "lucide-react";
import SectionBadge from "./SectionBadge";

const STEPS = [
  {
    title: "Create Profile",
    description: "Build your profile and introduce yourself with confidence.",
  },
  {
    title: "Verify Identity",
    description: "Confirm who you are and build a foundation of trust.",
  },
  {
    title: "Trust Passport",
    description:
      "Carry your verified identity and trust credentials wherever you go.",
  },
  {
    title: "Institution Verification",
    description:
      "Validate your education, work, or organizational affiliation.",
  },
  {
    title: "Host Review",
    description:
      "See trusted feedback from hosts and previous experiences.",
  },
  {
    title: "Trusted Match",
    description:
      "Connect with verified people and find relationships built on trust.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <SectionBadge icon={ClipboardCheck} label="How it Works" />
        <h2 className="mt-6 text-3xl font-bold text-ink sm:text-[42px]">
          One identity, strengthened by everything you do.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          A Trust Passport is a single verified document that proves
          you&apos;re a reliable housing participant. Hosts see it. Partners
          trust it.
          Residents build a reputation.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start lg:px-10">
        <ol className="space-y-10">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#2E7D32] bg-[#E5E7EB] text-lg font-bold text-brand-700">
                {index + 1}
              </span>
              <div>
                <h3 className="text-[20px] font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-[16px] text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="overflow-hidden rounded-3xl lg:sticky lg:top-24 lg:w-[453px]">
          <Image
            src="/images/biometric-id-verification.png"
            alt="Facial verification confirming identity"
            width={453}
            height={647}
            className="h-auto w-full object-cover lg:h-[647px] lg:w-[453px]"
          />
        </div>
      </div>
    </section>
  );
}
