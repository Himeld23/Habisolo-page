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
    <section className="bg-[#F1F5F9] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <span className="block pb-[65px] text-[40px] font-bold text-[#282828]">
          Pre-Seed Investment Stage
        </span>
        <h2 className="mt-2 text-2xl font-bold text-[#282828] sm:text-[32px]">
          Pre-Seed Investment Round
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Habisolo is raising its Pre-Seed round to accelerate commercial
          validation, strengthen its trust infrastructure and establish its
          position in the Spanish market before expanding across Europe.
        </p>
        <p className="mt-4 font-semibold text-[#282828]">
          The investment will support:
        </p>

        <div className="mt-8 grid items-start gap-4 sm:grid-cols-2">
          {ITEMS.map((item, index) => {
            const flipped = index % 2 === 1;
            return (
              <div
                key={item}
                className={
                  flipped
                    ? "flex items-center bg-[linear-gradient(90deg,#9CDB9F_0%,#E5E7EB_100%)] py-4 pl-10 pr-6 text-sm font-semibold text-[#282828] [clip-path:polygon(100%_0,8%_0,0_50%,8%_100%,100%_100%)] sm:mt-10"
                    : "flex items-center bg-[linear-gradient(90deg,#E5E7EB_0%,#9CDB9F_100%)] py-4 pl-6 pr-10 text-sm font-semibold text-[#282828] [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)]"
                }
              >
                {index + 1}. {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
