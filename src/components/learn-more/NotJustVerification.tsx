import Image from "next/image";

export default function NotJustVerification() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-[42px]">
            Trust Passport &ne; Just Verification
          </h2>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03]">
              <h3 className="text-[24px] font-bold text-brand-700">
                Verification
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Verification tells you something has been checked.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm shadow-black/[0.03]">
              <h3 className="text-[24px] font-bold text-brand-700">
                Trust Passport
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                The Trust Passport brings multiple trust signals together
                and allows that trust profile to evolve.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/girlImage.png"
            alt="Facial verification technology overlay"
            width={618}
            height={454}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
