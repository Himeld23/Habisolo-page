import Image from "next/image";
import { Landmark } from "lucide-react";
import SectionBadge from "../SectionBadge";

const REVENUE_STREAMS = [
  { title: "Institution SaaS", image: "/images/institutionssaas.png", w: 304, h: 264 },
  { title: "Enterprise API", image: "/images/enterpriseapi.png", w: 302, h: 259 },
  { title: "Partner Subscription", image: "/images/partnersubs.png", w: 300, h: 259 },
  { title: "Premium Services", image: "/images/premiumservices.png", w: 300, h: 259 },
];

export default function BusinessModel() {
  return (
    <section id="business-model" className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <SectionBadge icon={Landmark} label="Business Model" />
        <h2 className="mt-6 text-3xl font-bold text-[#282828] sm:text-[42px]">
          A commission-free model designed around platform, institutional and
          partner revenue
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Habisolo does not charge hosts, residents or partners a commission
          on housing transactions. The model is designed to create value
          through digital trust infrastructure, institutional relationships,
          partner services and other scalable platform revenue streams.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {REVENUE_STREAMS.map((stream) => (
          <div
            key={stream.title}
            className="overflow-hidden rounded-2xl  shadow-sm shadow-black/[0.03]"
          >
            <Image
              src={stream.image}
              alt={stream.title}
              width={stream.w}
              height={stream.h}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-6xl px-6 lg:px-10">
        <span
          className="inline-block rounded-lg bg-[#282828] px-3 py-1.5 text-[20px] font-bold tracking-wide text-white"
          style={{ marginLeft: 109 }}
        >
          Trust Passport
        </span>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          The Trust Passport is Habisolo&apos;s digital trust layer, bringing
          relevant verified information and trust signals together to help
          people make more informed decisions before entering a shared-living
          relationship.
        </p>
      </div>
    </section>
  );
}
