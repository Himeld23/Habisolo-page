const ITEMS = [
  "Product and technology development",
  "Host and resident acquisition",
  "Institutional and strategic partnerships",
  "Trust Passport development",
  "Insurance and protection infrastructure",
  "Commercial expansion in Spain",
];

export default function PreSeedStage() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
          Pre-Seed Investment Stage
        </span>
        <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
          Pre-Seed Investment Round
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Habisolo is raising its Pre-Seed round to accelerate commercial
          validation, strengthen its trust infrastructure and establish its
          position in the Spanish market before expanding across Europe.
        </p>
        <p className="mt-4 font-semibold text-ink">
          The investment will support:
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ITEMS.map((item, index) => (
            <div
              key={item}
              className={`flex items-center bg-gradient-to-r from-brand-600 to-brand-400 py-4 pl-6 pr-10 text-sm font-semibold text-white [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)] ${
                index % 2 === 1 ? "sm:mt-10" : ""
              }`}
            >
              {index + 1}. {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
