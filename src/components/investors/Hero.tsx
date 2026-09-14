import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 bg-[url('/images/heroimagebg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32 lg:px-10">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]">
          Building the{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-2">Trust</span>
            <span className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-[50%] border-[3px] border-[#4A9958]" />
          </span>
          <br />
          Infrastructure for Shared Living
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Helping institutions, hosts and residents establish trusted
          relationships before they share a home.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:support@habisolo.com"
            className="inline-flex h-[50px] w-fit items-center justify-center gap-2.5 rounded-xl bg-[#2E7D32] px-6 py-4 text-[20px] font-semibold text-white shadow-[0px_8px_32px_4px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.02]"
          >
            Book a Meeting
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </div>

        <a
          href="#why-habisolo"
          className="mt-14 flex flex-col items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          Scroll Down
          <Image
            src="/images/mouse-scroll.png"
            alt=""
            width={30}
            height={65}
            className="h-[65px] w-[30px] animate-bounce"
            unoptimized
          />
        </a>
      </div>
    </section>
  );
}
