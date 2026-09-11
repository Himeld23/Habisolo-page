import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

export default function FounderVision() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-bold text-ink sm:text-[42px]">
          Founder &amp; Vision
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted">
          Habisolo was founded around a simple observation: homes already
          exist, and people who need them already exist, but trust often
          prevents those relationships from forming. Habisolo is building
          the infrastructure that helps people establish confidence before
          sharing a home.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center px-6 text-center lg:px-10">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
          The Founder
        </span>

        <div className="mt-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-brand-100">
          <Image
            src="/images/Founder.png"
            alt="Ikpe O. Umoh, co-founder of Habisolo"
            width={416}
            height={521}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mt-6 leading-relaxed text-muted">
          Ikpe O. Umoh is the co-founder of Habisolo, a technology platform
          building trust infrastructure for shared living. With over 12
          years of experience across education, management, technology and
          international operations, he combines cross-cultural market
          knowledge with a strong focus on building practical solutions to
          real-world problems. Habisolo was created around a simple insight:
          existing housing is often available, but trust prevents people
          from sharing it.
        </p>

        <div className="mt-6 flex items-center gap-6">
          <a
            href="mailto:founder@habisolo.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
          >
            <Mail className="h-4 w-4" />
            Email the founder
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}
