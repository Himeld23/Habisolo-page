import Image from "next/image";
import { TrendingUp } from "lucide-react";
import SectionBadge from "../SectionBadge";

const CALLOUTS = [
  {
    key: "TAM",
    title: "Total Addressable Market",
    description:
      "The broader market opportunity Habisolo could potentially serve over time",
  },
  {
    key: "SAM",
    title: "Serviceable Available Market",
    description:
      "The portion of that opportunity relevant to Habisolo’s geographic and business scope.",
  },
  {
    key: "SOM",
    title: "Serviceable Obtainable Market",
    description:
      "The realistic initial market Habisolo can target during its early commercial phase.",
  },
];

export default function MarketOpportunity() {
  const [tam, sam, som] = CALLOUTS;

  return (
    <section id="market" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionBadge icon={TrendingUp} label="Market Opportunity" />
        <h2 className="mt-6 text-3xl font-bold text-[#282828] sm:text-[42px]">
          An underserved market at an infection point.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Aging populations + housing shortages = a generational opportunity.
        </p>
      </div>

      <div className="mx-auto mt-16 hidden max-w-4xl items-center justify-center lg:flex lg:px-10">
        <div className="w-[220px] text-right" style={{ paddingTop: 44 }}>
          <div className="text-sm font-extrabold text-[#282828]">{tam.key}</div>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            <span className="font-semibold text-[#282828]">{tam.title}</span>
            <br />
            {tam.description}
          </p>
        </div>

        <div
          className="relative shrink-0"
          style={{ height: 340, aspectRatio: "659 / 644" }}
        >
          <Image
            src="/images/infextionpointcircle.png"
            alt="TAM, SAM and SOM concentric market-size diagram"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex w-[220px] flex-col justify-between" style={{ height: 340 }}>
          <div className="text-left" style={{ paddingTop: 15 }}>
            <div className="text-sm font-extrabold text-[#282828]">{sam.key}</div>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              <span className="font-semibold text-[#282828]">{sam.title}</span>
              <br />
              {sam.description}
            </p>
          </div>
          <div className="text-left" style={{ paddingTop: 30 }}>
            <div className="text-sm font-extrabold text-[#282828]">{som.key}</div>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              <span className="font-semibold text-[#282828]">{som.title}</span>
              <br />
              {som.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl space-y-6 px-6 lg:hidden">
        {CALLOUTS.map((c) => (
          <div key={c.key} className="text-left">
            <div className="text-sm font-extrabold text-[#282828]">
              {c.key} &mdash; {c.title}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
