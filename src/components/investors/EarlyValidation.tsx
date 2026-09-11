import { CheckCircle2, TrendingUp } from "lucide-react";
import SectionBadge from "../SectionBadge";

const EVIDENCE = [
  { label: "Product evidence:", text: "the platform is operational." },
  {
    label: "Supply evidence:",
    text: "hosts are being approached and onboarded.",
  },
  {
    label: "Payment evidence:",
    text: "the first host has actually paid €7.99 for verification.",
  },
  {
    label: "Strategic evidence:",
    text: "We are developing conversations with institutions, accommodation providers, partners and other organizations.",
  },
];

export default function EarlyValidation() {
  return (
    <section id="validation" className="bg-brand-800 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionBadge icon={CheckCircle2} label="Early Validation" variant="dark" />
        <h2 className="mt-6 text-3xl font-bold text-white sm:text-[42px]">
          Early Momentum, Strong Foundation
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          Habisolo has moved from building the product to validating the
          market, with the platform operational, its first paying host
          onboarded and active demand for trusted shared accommodation
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="flex aspect-[816/551] items-center justify-center overflow-hidden rounded-3xl bg-white/5">
          <TrendingUp className="h-24 w-24 text-brand-400" strokeWidth={1.25} />
        </div>

        <div className="space-y-4">
          {EVIDENCE.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white/10 px-6 py-4 text-white/90"
            >
              <span className="font-bold text-white">{item.label}</span>{" "}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
