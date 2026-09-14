import CtaButton from "../CtaButton";

export default function TrustPassportCta() {
  return (
    <section className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[34px] bg-gradient-to-br from-brand-950 via-brand-700 to-brand-500 px-8 py-16 text-center shadow-xl sm:px-16">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-[42px]">
          Start building trust that stays with you.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
          Create your Habisolo Trust Passport and begin building a profile
          based on verified identity, trusted relationships and positive
          participation.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="https://habisolo.com" fixedWidth={false}>
            Create Your Trust Passport
          </CtaButton>
          <CtaButton
            href="https://habisolo.com"
            fixedWidth={false}
            variant="ghost"
            showArrow={false}
          >
            Explore Habisolo
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
