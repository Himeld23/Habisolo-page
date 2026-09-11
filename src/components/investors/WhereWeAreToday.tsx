import { Layers, Euro, Users2, Handshake } from "lucide-react";

const CARDS = [
  {
    icon: Layers,
    title: "Product Built",
    description: "The Habisolo platform and core trust infrastructure are operational.",
  },
  {
    icon: Euro,
    title: "€7.99 First Host Verification",
    description:
      "Our first host has completed the €7.99 one-time verification, providing our first direct commercial validation.",
  },
  {
    icon: Users2,
    title: "Demand Identified",
    description:
      "International students are actively seeking trusted shared accommodation in Spain, creating an initial demand pipeline.",
  },
  {
    icon: Handshake,
    title: "Creativity",
    description:
      "Habisolo is developing relationships with hosts, institutions, accommodation providers and strategic partners to establish its distribution network.",
  },
];

const STAGES = [
  {
    key: "Current",
    color: "bg-brand-600",
    items: [
      "Platform operational",
      "First paying host",
      "Initial housing demand",
      "Early partner/institutional outreach",
    ],
  },
  {
    key: "Next",
    color: "bg-amber-600",
    items: [
      "Repeatable host acquisition",
      "Commercial validation",
      "Institutional distribution",
      "Trust Passport expansion",
    ],
  },
  {
    key: "Vision",
    color: "bg-sky-600",
    items: ["European trust infrastructure for shared living"],
  },
];

export default function WhereWeAreToday() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-ink sm:text-[42px]">
          Where We Are Today
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-4 rounded-2xl bg-surface p-6 shadow-sm shadow-black/[0.03]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <card.icon className="h-5 w-5 text-brand-600" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {STAGES.map((stage) => (
            <div key={stage.key} className={`rounded-2xl ${stage.color} p-6 text-white`}>
              <h3 className="text-lg font-bold">{stage.key}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/90">
                {stage.items.map((item) => (
                  <li key={item}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
