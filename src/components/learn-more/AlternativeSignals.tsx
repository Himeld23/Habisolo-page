const ITEMS = [
  "Verified university enrolment",
  "Employment affiliation",
  "Community membership",
  "Successful stays",
  "Positive platform participation",
  "Verified identity",
  "Housing history",
];

export default function AlternativeSignals() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-bold text-ink sm:text-[42px]">
          Alternative Trust Signals
        </h2>
        <p className="mt-4 text-lg text-muted">Trust is more than a payslip.</p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl px-6 lg:px-10">
        <p className="leading-relaxed text-muted">
          Not everyone has a long housing history, a local guarantor or
          extensive financial documentation—especially international
          students and newly relocated residents.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Habisolo can recognise additional forms of credibility, such as:
        </p>

        <ul className="mt-6 space-y-3">
          {ITEMS.map((item) => (
            <li key={item} className="text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
