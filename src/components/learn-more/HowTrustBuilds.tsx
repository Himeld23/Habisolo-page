import { ArrowRight } from "lucide-react";

const STEPS = [
  "Verify yourself",
  "Build yourself",
  "Connect with trusted communities",
  "Participate",
  "Build history",
  "Strengthen your trust profile",
];

export default function HowTrustBuilds() {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-bold text-ink sm:text-[42px]">
          How Trust Builds
        </h2>
        <p className="mt-4 text-lg text-muted">
          Trust grows with your journey.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4 px-6 lg:px-10">
        {STEPS.map((step, index) => (
          <div key={step} className="flex items-center gap-4">
            <span className="rounded-full bg-brand-100 px-5 py-3 text-sm font-semibold text-ink">
              {step}
            </span>
            {index < STEPS.length - 1 && (
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-600" />
            )}
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl px-6 text-center leading-relaxed text-muted lg:px-10">
        Habisolo&apos;s underlying trust architecture is designed so that
        trust indicators can accumulate over time rather than being
        repeatedly rebuilt for every housing journey.
      </p>
    </section>
  );
}
