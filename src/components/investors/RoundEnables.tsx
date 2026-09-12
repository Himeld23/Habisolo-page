import {
  Users,
  Cpu,
  ShieldCheck,
  Handshake,
  Globe2,
} from "lucide-react";

const ITEMS = [
  {
    icon: Users,
    title: "Commercial Acquisition",
    description: "Build repeatable host and resident acquisition channels.",
  },
  {
    icon: Cpu,
    title: "Product & Technology",
    description:
      "Continue developing the Habisolo platform and Trust Passport infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Protection Infrastructure",
    description:
      "Develop verification, risk, support and protection capabilities around shared living.",
  },
  {
    icon: Handshake,
    title: "Institutional Partnerships",
    description:
      "Develop distribution relationships with universities, organisations and strategic partners.",
  },
  {
    icon: Globe2,
    title: "Market Expansion",
    description:
      "Establish Habisolo's position in Spain before expanding into additional European markets.",
  },
];

export default function RoundEnables() {
  return (
    <section className="relative overflow-hidden bg-[#292F3A] py-24">
      <div className="absolute inset-0 bg-[url('/images/section_benefits.png')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="max-w-md text-3xl font-bold text-white sm:text-[42px]">
          What This Round Enables
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3D5A3E]">
                <item.icon className="h-5 w-5 text-brand-400" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
