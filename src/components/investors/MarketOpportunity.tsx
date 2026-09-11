import Image from "next/image";
import { TrendingUp } from "lucide-react";
import SectionBadge from "../SectionBadge";

const CALLOUTS = [
  {
    key: "TAM",
    title: "Total Addressable Market",
    description:
      "The broader market opportunity Habisolo could potentially serve over time",
    top: "44%",
    left: "0%",
    side: "left",
  },
  {
    key: "SAM",
    title: "Serviceable Available Market",
    description:
      "The portion of that opportunity relevant to Habisolo’s geographic and business scope.",
    top: "7%",
    left: "98%",
    side: "right",
  },
  {
    key: "SOM",
    title: "Serviceable Obtainable Market",
    description:
      "The realistic initial market Habisolo can target during its early commercial phase.",
    top: "85%",
    left: "98%",
    side: "right",
  },
];

export default function MarketOpportunity() {
  return (
    <section id="market" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionBadge icon={TrendingUp} label="Market Opportunity" />
        <h2 className="mt-6 text-3xl font-bold text-ink sm:text-[42px]">
          An underserved market at an infection point.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Aging populations + housing shortages = a generational opportunity.
        </p>
      </div>

      <div className="relative mx-auto mt-16 hidden max-w-2xl px-28 lg:block">
        <div className="relative mx-auto aspect-[659/644] w-full max-w-[340px]">
          <Image
            src="/images/infextionpointcircle.png"
            alt="TAM, SAM and SOM concentric market-size diagram"
            fill
            className="object-contain"
          />
        </div>

        {CALLOUTS.map((c) => (
          <div
            key={c.key}
            className={`absolute w-[220px] ${c.side === "left" ? "text-right" : "text-left"}`}
            style={{
              top: c.top,
              left: c.left,
              transform:
                c.side === "left"
                  ? "translate(-100%, -50%)"
                  : "translate(0%, -50%)",
            }}
          >
            <div className="text-sm font-extrabold text-ink">{c.key}</div>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              <span className="font-semibold text-ink">{c.title}</span>
              <br />
              {c.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-2xl space-y-6 px-6 lg:hidden">
        {CALLOUTS.map((c) => (
          <div key={c.key} className="text-left">
            <div className="text-sm font-extrabold text-ink">
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
