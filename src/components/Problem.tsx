import Image from "next/image";
import { CircleHelp } from "lucide-react";
import SectionBadge from "./SectionBadge";

const WITHOUT_TRUST = ["Stress", "Risk", "Uncertainty"];
const WITH_TRUST = ["Verification", "Confidence", "Connection", "Safety"];

export default function Problem() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <SectionBadge icon={CircleHelp} label="Problem" />
        <h2 className="mt-6 text-3xl font-bold text-ink sm:text-[42px]">
          Trust is often scattered everywhere.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          When people move to a new city or country, they are often asked to
          prove themselves again and again. Identity documents, university
          enrolment, employment, references, previous housing experiences
          and community relationships can all exist separately. Habisolo
          brings relevant verified trust signals together so that
          credibility can become easier to demonstrate.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl space-y-16 px-6 lg:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -top-10 -left-2 h-16 w-16 sm:h-20 sm:w-20">
              <Image
                src="/images/problem-question-mark.png"
                alt=""
                width={260}
                height={260}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/problem-thinking-woman.jpg"
                alt="Person thinking about how to prove their trustworthiness"
                width={800}
                height={640}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-ink">Without Trust</h3>
            <ul className="mt-4 space-y-2">
              {WITHOUT_TRUST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-lg text-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-ink">
              With Trust Passport
            </h3>
            <ul className="mt-4 space-y-2">
              {WITH_TRUST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-lg text-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 overflow-hidden rounded-2xl md:order-2">
            <Image
              src="/images/problem-laptop-check.jpg"
              alt="Verification confirmed while working on a laptop"
              width={800}
              height={640}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
