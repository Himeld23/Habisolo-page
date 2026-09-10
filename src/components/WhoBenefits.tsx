import { GraduationCap, Home, KeyRound, Settings2, Users } from "lucide-react";
import SectionBadge from "./SectionBadge";

const GROUPS = [
  {
    icon: KeyRound,
    title: "Residents",
    description: "Build credibility that can support your housing journey.",
  },
  {
    icon: Home,
    title: "Hosts",
    description:
      "Understand more about the person before opening your home.",
  },
  {
    icon: GraduationCap,
    title: "Institutions",
    description:
      "Help your members establish trusted relationships and participate in their housing journey.",
  },
  {
    icon: Users,
    title: "Communities",
    description:
      "Contribute meaningful, verified relationships to the trust ecosystem.",
  },
];

export default function WhoBenefits() {
  return (
    <section id="who-benefits" className="bg-surface pt-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <SectionBadge icon={Settings2} label="Who Benefits" />
        <h2 className="mt-6 text-3xl font-bold text-ink sm:text-[42px]">
          One Trust Layer. Everyone Benefits.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          Habisolo&apos;s model is specifically designed to allow
          universities, employers, housing partners, language schools and
          community organisations to contribute to the wider trust
          ecosystem.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl bg-white p-7 shadow-sm shadow-black/[0.03]"
          >
            <group.icon
              className="h-9 w-9 text-brand-700"
              strokeWidth={1.75}
            />
            <h3 className="mt-5 text-lg font-bold text-ink">{group.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {group.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
