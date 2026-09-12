import Image from "next/image";
import { HelpCircle, ShieldCheck, Home, Landmark, Ban } from "lucide-react";
import SectionBadge from "../SectionBadge";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trust Infrastructure",
    description:
      "Habisolo puts trust, verification and relevant trust signals at the centre of the shared-living journey.",
  },
  {
    icon: Home,
    title: "Host-Centred Supply",
    description:
      "Habisolo is designed around the concerns of people who open their homes to others.",
  },
  {
    icon: Landmark,
    title: "Institutional Distribution",
    description:
      "Universities, organisations, employers and accommodation partners can become trusted channels connecting people with housing.",
  },
  {
    icon: Ban,
    title: "Commission-Free Model",
    description:
      "Habisolo does not depend on taking commissions from housing transactions.",
  },
];

export default function WhyHabisolo() {
  return (
    <section id="why-habisolo" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionBadge icon={HelpCircle} label="Why Habisolo?" />
        <h2 className="mt-6 text-3xl font-bold text-[#282828] sm:text-[40px]">
          We solve a problem that has been ignored for decades.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Housing supply exists, but trust prevents many potential
          shared-living relationships.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:px-10">
        <div>
          <h3 className="text-xl font-bold text-[#282828]">Solution</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Habisolo provides digital trust infrastructure connecting hosts,
            residents, institutions and partners.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl">
            <Image
              src="/images/solutions.png"
              alt="Shared living, family dinner together"
              width={552}
              height={347}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-surface p-6 shadow-sm shadow-black/[0.03]"
            >
              <feature.icon
                className="h-7 w-7 text-brand-600"
                strokeWidth={1.75}
              />
              <h4 className="mt-4 text-base font-bold text-[#282828]">
                {feature.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
