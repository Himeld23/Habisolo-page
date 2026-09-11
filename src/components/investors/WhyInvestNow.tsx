import {
  Rocket,
  Cpu,
  ClipboardCheck,
  BadgeCheck,
  TrendingUp,
  Globe,
} from "lucide-react";
import SectionBadge from "../SectionBadge";

const REASONS = [
  {
    icon: Cpu,
    title: "Product Development",
    description:
      "Habisolo's core platform is live, with the technology, user experience and trust infrastructure in place to support our next phase of commercial growth.",
  },
  {
    icon: ClipboardCheck,
    title: "Product Operational",
    description:
      "Habisolo is now moving from product development into active market acquisition, with a focus on onboarding hosts, students and strategic distribution partners.",
  },
  {
    icon: BadgeCheck,
    title: "Commercial Validation",
    description:
      "Habisolo is now moving from product development into active market acquisition, with a focus on onboarding hosts, students and strategic distribution partners.",
  },
  {
    icon: TrendingUp,
    title: "Commercial Scale",
    description:
      "We are developing relationships across education, housing, real estate and social impact ecosystems to create multiple channels for user and host acquisition.",
  },
  {
    icon: Globe,
    title: "European Expansion",
    description:
      "Habisolo is designed as a technology platform that can scale across cities and countries, connecting users, hosts and institutions through a common trust infrastructure.",
  },
];

export default function WhyInvestNow() {
  return (
    <section id="why-now" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionBadge icon={Rocket} label="Why Invest Now?" />
        <h2 className="mt-6 text-3xl font-bold text-ink sm:text-[42px]">
          The product is built. The market is now being validated.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Habisolo has developed the infrastructure to connect housing supply
          and demand through trust. The immediate opportunity is to
          establish repeatable host acquisition, validate institutional
          distribution and build commercial traction in Spain.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {REASONS.map((reason) => (
          <div
            key={reason.title}
            className="rounded-2xl bg-surface p-6 shadow-sm shadow-black/[0.03]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600">
              <reason.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-base font-bold text-ink">
              {reason.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
