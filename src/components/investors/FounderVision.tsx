import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

export default function FounderVision() {
  return (
    <section id="founder" className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-bold text-[#282828] sm:text-[40px]">
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

      <div className="mx-auto mt-12 max-w-4xl px-6 lg:px-10">
        <div className="flex flex-col overflow-hidden rounded-2xl sm:flex-row">
          <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-64">
            <Image
              src="/images/Founder.png"
              alt="Ikpe O. Umoh, co-founder of Habisolo"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-[53px] text-left">
            <span className="text-[24px] font-bold uppercase tracking-wider text-[#2E7D32]">
              The Founder
            </span>
            <p className="mt-4 leading-relaxed text-muted">
              Ikpe O. Umoh is the co-founder of Habisolo, a technology
              platform building trust infrastructure for shared living. With
              over 12 years of experience across education, management,
              technology and international operations, he combines
              cross-cultural market knowledge with a strong focus on
              building practical solutions to real-world problems. Habisolo
              was created around a simple insight: existing housing is
              often available, but trust prevents people from sharing it.
            </p>

            <div className="mt-6 flex items-center gap-6">
              <a
                href="mailto:ikpe.umoh@habisolo.com"
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
        </div>
      </div>
    </section>
  );
}
