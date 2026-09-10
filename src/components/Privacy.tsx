import Image from "next/image";
import { Fingerprint, Lock, ShieldCheck } from "lucide-react";
import SectionBadge from "./SectionBadge";

const CARDS = [
  {
    image: "/images/privacy-gdpr.jpg",
    title: "GDPR",
    description:
      "Your personal data is handled responsibly and in line with global privacy standards.",
  },
  {
    image: "/images/privacy-secure-storage.jpg",
    title: "Secure Storage",
    description:
      "Your information is securely stored and protected from unauthorized access.",
  },
  {
    image: "/images/privacy-consent.jpg",
    title: "Consent-based verification",
    description:
      "All documents and verifications require your approval before proceeding.",
  },
  {
    image: "/images/privacy-audit-logs.jpg",
    title: "Audit Logs",
    description:
      "Keep a transparent record of verification activity for greater accountability.",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <SectionBadge icon={Lock} label="Privacy" />
          <h2 className="mt-6 text-3xl font-bold leading-tight text-ink sm:text-[42px]">
            Your information.
            <br />
            Your trust.
            <br />
            Your control
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            A trust layer only works if people feel safe using it. Trust
            Passport is designed around consent, trusted verification
            designed to protect your identity and privacy.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-brand-600">
            <Fingerprint className="h-5 w-5" strokeWidth={2} />
            <span className="font-semibold">Consent-first by design</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative isolate overflow-hidden rounded-2xl p-5"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-brand-950/75" />
              <ShieldCheck className="h-6 w-6 text-emerald-400" strokeWidth={1.75} />
              <h3 className="mt-16 text-base font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
