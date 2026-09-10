import Image from "next/image";
import { Compass } from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function Future() {
  return (
    <section className="relative isolate overflow-hidden py-28">
      <Image
        src="/images/future-bg.jpg"
        alt="Family sharing tea and time together"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-brand-950/75" />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <SectionBadge
          icon={Compass}
          label="The Future"
          className="border-white/20 bg-white/10 text-white"
        />
        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-[42px]">
          Today - Shared Living, Tomorrow - Trusted Mobility
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
          Trust Passport is shaping a future where verified identity and
          reputation make every connection safer, simpler, and more
          meaningful. From homes and communities to universities,
          workplaces, and organizations, trust becomes a portable foundation
          for better opportunities and stronger relationships.
        </p>
        <p className="mt-8 text-xl font-bold text-gold-400">
          Verify once. Build trust everywhere.
        </p>
      </div>
    </section>
  );
}
