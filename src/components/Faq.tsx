"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "What is Habisolo Trust Passport?",
    answer:
      "The Habisolo Trust Passport is a digital trust profile that brings together your verified identity, institutional credentials, reputation and community connections into one secure, portable record you control.",
  },
  {
    question: "How is my identity verified?",
    answer:
      "We use secure document and biometric verification to confirm who you are, then let you connect institutional and reputation signals to strengthen your Trust Passport over time.",
  },
  {
    question: "Who controls my personal data?",
    answer:
      "You do. Every verification and document share requires your explicit consent, and you decide what information is included in your Trust Passport and who can see it.",
  },
  {
    question: "Can I delete my Trust Passport and Profile?",
    answer:
      "Yes. You can delete your Trust Passport and associated profile data at any time from your account settings, in line with our privacy policy and applicable data protection laws.",
  },
  {
    question: "How long does verification take?",
    answer:
      "Most identity verifications complete within minutes. Institutional and host verifications may take a little longer as they depend on the responding organization.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-bold text-ink sm:text-[42px]">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Learn how the Habisolo Trust Passport helps build confidence
          between people, hosts, partners and institutions.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-6 lg:px-10">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="border-b border-gray-200">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-ink">
                  {faq.question}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 text-base leading-relaxed text-muted">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
