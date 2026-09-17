import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";
import CtaButton from "./CtaButton";

const STATS = [
  { value: "4", label: "signal categories" },
  { value: "1", label: "verification, reused" },
  { value: "0", label: "documents exposed" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-950 bg-[url('/images/bgheroFrame.png')] bg-cover bg-center"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28 lg:px-10">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
            Habisolo&apos;s signature trust layer
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-[60px]">
            Trust should
            <br />
            travel with you.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            The Habisolo Trust Passport is a digital trust profile that
            brings together verified information about you, helping hosts,
            institutions and communities understand who they can trust
            before a relationship begins.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <CtaButton href="https://habisolo.com" fixedWidth={false} />
            <a
              href="/learn-more"
              className="font-semibold text-white/90 underline-offset-4 hover:underline"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 inline-flex flex-wrap gap-6 rounded-2xl border border-white/15 bg-white/5 px-6 py-5 sm:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
            <Image
              src="/images/hero-network.jpg"
              alt="Verified people connected through Habisolo Trust Passport"
              width={1200}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-950/90 px-5 py-4 shadow-xl backdrop-blur">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <div className="text-xs text-white/60">Trust standing</div>
              <div className="text-sm font-semibold text-white">
                Verified &middot; Established &middot; Growing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
