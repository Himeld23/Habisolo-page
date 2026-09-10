import { Award, IdCard, Landmark, ShieldCheck, UserCheck, Users } from "lucide-react";
import SectionBadge from "./SectionBadge";

const NODES = [
  {
    icon: UserCheck,
    title: "Identity",
    description: "Establish a trusted digital identity that represents who you are.",
    color: "text-emerald-600",
    bar: "bg-emerald-500",
    stroke: "#10b981",
    x: 36,
    y: 14,
  },
  {
    icon: Landmark,
    title: "Institution",
    description:
      "Connect verified identities with trusted schools, employers, and organizations.",
    color: "text-red-600",
    bar: "bg-red-500",
    stroke: "#ef4444",
    x: 66,
    y: 10,
  },
  {
    icon: Users,
    title: "Community",
    description: "Build meaningful connections within a trusted network.",
    color: "text-fuchsia-600",
    bar: "bg-fuchsia-500",
    stroke: "#d946ef",
    x: 90,
    y: 50,
  },
  {
    icon: Award,
    title: "Reputation",
    description: "Build credibility through verified experiences and interactions.",
    color: "text-violet-600",
    bar: "bg-violet-500",
    stroke: "#8b5cf6",
    x: 36,
    y: 86,
  },
  {
    icon: IdCard,
    title: "Verification",
    description: "Confirm key details with secure and reliable verification.",
    color: "text-blue-600",
    bar: "bg-blue-500",
    stroke: "#3b82f6",
    x: 66,
    y: 90,
  },
];

const HUB = { x: 6, y: 50 };

export default function TrustLayer() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <SectionBadge icon={ShieldCheck} label="Trust Layer" />
        <h2 className="mt-6 text-3xl font-bold text-ink sm:text-[42px]">
          A Smarter Foundation for Trust
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          Trust Passport brings identity, verification, reputation, and
          institutional credentials together in one secure trust layer. It
          helps people and organizations make informed decisions, build
          credibility, and connect with greater confidence.
        </p>
      </div>

      {/* Diagram: hub-and-spoke network (desktop) */}
      <div className="relative mx-auto mt-24 hidden max-w-6xl px-6 lg:block lg:px-10">
        <div className="relative h-[560px]">
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {NODES.map((node) => (
              <line
                key={node.title}
                x1={HUB.x}
                y1={HUB.y}
                x2={node.x}
                y2={node.y}
                stroke={node.stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          <div
            className="absolute z-10 w-fit -translate-y-1/2 rounded-2xl bg-ink px-8 py-6 text-center shadow-lg"
            style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
          >
            <span className="whitespace-nowrap text-lg font-extrabold tracking-wide text-white">
              TRUST PASSPORT
            </span>
          </div>

          {NODES.map((node) => (
            <div
              key={node.title}
              className="absolute z-10 w-[210px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/[0.03]"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className={`h-1.5 w-full ${node.bar}`} />
              <div className="p-5">
                <node.icon className={`h-7 w-7 ${node.color}`} strokeWidth={1.75} />
                <h3 className="mt-3 text-base font-bold text-ink">
                  {node.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple stacked cards (mobile / tablet) */}
      <div className="mx-auto mt-16 max-w-6xl px-6 lg:hidden">
        <div className="mx-auto mb-10 w-fit rounded-2xl bg-ink px-10 py-6 text-center shadow-lg">
          <span className="text-xl font-extrabold tracking-wide text-white">
            TRUST PASSPORT
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {NODES.map((node) => (
            <div
              key={node.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/[0.03]"
            >
              <div className={`h-1.5 w-full ${node.bar}`} />
              <div className="p-6">
                <node.icon className={`h-8 w-8 ${node.color}`} strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-bold text-ink">
                  {node.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
