import Image from "next/image";

const COLUMNS = [
  {
    title: "Investor Resources",
    links: [
      { label: "Investor Overview", href: "#top" },
      { label: "Book Investor Meeting", href: "mailto:support@habisolo.com" },
      { label: "Investment Opportunity", href: "#cta" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Habisolo?", href: "#why-habisolo" },
      { label: "Market Opportunity", href: "#market" },
      { label: "Traction", href: "#validation" },
      { label: "Product Ecosystem", href: "#product-ecosystem" },
      { label: "Business Model", href: "#business-model" },
      { label: "Why Invest Now?", href: "#why-now" },
      { label: "The Founder", href: "#top" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Privacy Policy", href: "https://habisolo.com/en/privacy-policy" },
      { label: "Terms of Service", href: "https://habisolo.com/en/terms-and-conditions" },
    ],
  },
];

export default function InvestorFooter() {
  return (
    <footer className="bg-[#2A2A2A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Habisolo"
              width={222}
              height={141}
              className="h-11 w-auto object-contain"
              unoptimized
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Habisolo Is Building The Trust Infrastructure For Shared
              Living, Beginning In Spain And Designed For European
              Expansion.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white"
                    >
                      &bull; {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Habisolo. All rights reserved.</p>
          <p>Figures shown are illustrative and provided for investor discussion.</p>
        </div>
      </div>
    </footer>
  );
}
