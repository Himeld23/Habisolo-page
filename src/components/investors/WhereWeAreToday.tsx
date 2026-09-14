import Image from "next/image";

const CARDS = [
  {
    image: "/images/productbuilt.png",
    title: "Product Built",
    description: "The Habisolo platform and core trust infrastructure are operational.",
  },
  {
    image: "/images/firsthost.png",
    title: "€7.99 First Host Verification",
    description:
      "Our first host has completed the €7.99 one-time verification, providing our first direct commercial validation.",
  },
  {
    image: "/images/Demand.png",
    title: "Demand Identified",
    description:
      "International students are actively seeking trusted shared accommodation in Spain, creating an initial demand pipeline.",
  },
  {
    image: "/images/Creativity.png",
    title: "Creativity",
    description:
      "Habisolo is developing relationships with hosts, institutions, accommodation providers and strategic partners to establish its distribution network.",
  },
];

const STAGES = [
  {
    key: "Current",
    image: "/images/Current.png",
    items: [
      "Platform operational",
      "First paying host",
      "Initial housing demand",
      "Early partner/institutional outreach",
    ],
  },
  {
    key: "Next",
    image: "/images/Next.png",
    items: [
      "Repeatable host acquisition",
      "Commercial validation",
      "Institutional distribution",
      "Trust Passport expansion",
    ],
  },
  {
    key: "Vision",
    image: "/images/Vision.png",
    items: ["European trust infrastructure for shared living"],
  },
];

export default function WhereWeAreToday() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-[#282828] sm:text-[42px]">
          Where We Are Today
        </h2>

        <div className="mt-10 rounded-3xl bg-[#E5E7EB] p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 overflow-hidden rounded-2xl bg-white  shadow-sm shadow-black/[0.03]"
              >
                <Image
                  src={card.image}  alt="" width={44} height={44} className="w-[70px] h-[70px] shrink-0"
                />
                <div className=" py-4">
                  <h3 className="text-base font-bold text-[#282828]">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-start">
          {STAGES.map((stage) => (
            <div key={stage.key} className="flex-1">
              <Image
                src={stage.image}
                alt={stage.key}
                width={370}
                height={141}
                className="h-auto w-full"
              />
              <h3 className="mt-4 text-lg font-bold text-[#282828]">{stage.key}</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted">
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
