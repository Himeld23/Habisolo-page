const ITEMS = [
  "Identity verification",
  "Verification status",
  "University or institutional affiliation",
  "Community membership",
  "Successful stays",
  "Housing participation",
  "Reputation indicators",
  "Trust achievements",
];

export default function WhatIsTrustPassport() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-extrabold text-ink sm:text-[42px]">
          What Is the Trust Passport?
        </h2>
        <p className="mt-4 text-lg text-muted">
          One profile. Multiple trust signals.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl px-6 font-normal lg:max-w-[1136px] lg:px-10">
        <p className="leading-relaxed text-muted">
          The Trust Passport is Habisolo&apos;s portable digital trust
          identity. It brings together verified information and positive
          participation into one structured profile.
        </p>

        <p className="mt-5 leading-relaxed text-muted">
          Depending on what a user has completed or verified, the profile
          may include:
        </p>

        <ul className="mt-5 space-y-2">
          {ITEMS.map((item) => (
            <li key={item} className="text-ink">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 leading-relaxed text-muted">
          The profile evolves as the person participates in the Habisolo
          ecosystem.
        </p>

        <a
          href="https://habisolo.com"
          className="mt-2 inline-block font-semibold text-brand-700 hover:underline"
        >
          HABISOLO MASTER CORPORATE DOCUMENT.pdf
        </a>
      </div>
    </section>
  );
}
