import CtaButton from "../CtaButton";

export default function InvestorCta() {
  return (
    <section id="cta" className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[34px] bg-[radial-gradient(circle_at_30%_20%,#2c7a3c_0%,#0a1c10_70%)] px-8 py-16 text-center shadow-xl sm:px-16">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-[42px]">
          Interested in investing in Habisolo?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
          Learn more about the opportunity, our current position, the market
          and our growth plan.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-8">
          <CtaButton href="mailto:ikpe.umoh@habisolo.com" fixedWidth={false}>
            Discuss the Investment Opportunity
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
