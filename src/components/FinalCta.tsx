import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section id="cta" className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-950 via-brand-700 to-brand-500 px-8 py-16 text-center shadow-xl sm:px-16">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-[42px]">
          Ready to build
          <br />
          trusted shared living?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
          Verify your identity today and your Trust Passport starts building
          itself from your very next booking.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <CtaButton href="#top" />
          <a
            href="#"
            className="font-semibold text-white/90 underline-offset-4 hover:underline"
          >
            Download App
          </a>
        </div>
      </div>
    </section>
  );
}
