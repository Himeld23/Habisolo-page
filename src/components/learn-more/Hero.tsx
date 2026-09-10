import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 bg-[url('/images/heroframe1.png')] bg-cover bg-center">
      <div className="mx-auto max-w-[1010px] px-6 pt-16 pb-32 text-center sm:pt-20 sm:pb-40 lg:pt-24 lg:pb-56 lg:px-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
          Learn about Trust Passport
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[70px]">
          Trust should travel with you.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[20px] font-normal leading-relaxed text-white/70">
          The Habisolo Trust Passport is a digital trust profile that brings
          together verified information about you, helping hosts,
          institutions and communities understand who they can trust before a
          relationship begins.
        </p>
      </div>
    </section>
  );
}
