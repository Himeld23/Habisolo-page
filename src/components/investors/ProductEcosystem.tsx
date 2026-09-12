import Image from "next/image";
import { Boxes } from "lucide-react";
import SectionBadge from "../SectionBadge";

const NODES = [
  {
    label: "HOST",
    color: "text-brand-600",
    description: "Home owners who list and manage spaces on Habisolo.",
    top: "29%",
    left: "9%",
    direction: "up",
  },
  {
    label: "PARTNER",
    color: "text-teal-600",
    description:
      "Businesses and service providers that integrate with Habisolo.",
    top: "33%",
    left: "90%",
    direction: "up",
  },
  {
    label: "RESIDENT",
    color: "text-amber-600",
    description:
      "Students, young professionals, and individuals looking for safe, verified housing.",
    top: "77%",
    left: "26%",
    direction: "down",
  },
  {
    label: "INSTITUTION",
    color: "text-emerald-500",
    description:
      "Schools, Universities, and Organizations managing housing or members at scale.",
    top: "77%",
    left: "72%",
    direction: "down",
  },
];

export default function ProductEcosystem() {
  return (
    <section id="product-ecosystem" className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionBadge icon={Boxes} label="Product Ecosystem" />
        <h2 className="mt-6 text-3xl font-bold text-[#282828] sm:text-[40px]">
          Five interconnected products. One unified trust infrastructure.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          As more trusted hosts, residents, institutions and partners
          participate, the network has the potential to become increasingly
          valuable to each participant.
        </p>
      </div>

      <div className="relative mx-auto mt-16 hidden max-w-xl px-10 lg:block">
        <div className="relative mx-auto aspect-[816/551] w-full">
          <Image
            src="/images/Infographics.png"
            alt="Trust Passport network diagram connecting hosts, partners, residents and institutions"
            fill
            className="object-contain"
          />

          <div
            className="absolute bottom-[29%] left-[29%] flex flex-col items-center justify-center text-center leading-tight"
            style={{ top: "-18px", right: "125px" }}
          >
            <span className="text-[15px] font-extrabold text-[#282828]">TRUST</span>
            <span className="text-[15px] font-extrabold text-[#282828]">
              PASSPORT
            </span>
            <span className="my-0.5 text-[9px] font-semibold text-muted">
              =
            </span>
            <span className="text-[15px] font-extrabold text-[#282828]">TRUST</span>
            <span className="text-[15px] font-extrabold text-[#282828]">LAYER</span>
          </div>

          {NODES.map((node) => (
            <div
              key={node.label}
              className="absolute w-[150px] text-center"
              style={{
                top: node.top,
                left: node.left,
                transform:
                  node.direction === "up"
                    ? "translate(-50%, -160%)"
                    : "translate(-50%, 50%)",
              }}
            >
              <span className={`text-xs font-bold tracking-wide ${node.color}`}>
                {node.label}
              </span>
              <p className="mt-1 text-[11px] leading-snug text-muted">
                {node.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 px-6 sm:grid-cols-2 lg:hidden">
        {NODES.map((node) => (
          <div key={node.label} className="text-left">
            <span className={`text-sm font-bold tracking-wide ${node.color}`}>
              {node.label}
            </span>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {node.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
