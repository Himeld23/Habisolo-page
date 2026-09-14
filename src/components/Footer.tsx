import Image from "next/image";
import GoogleTranslate from "./GoogleTranslate";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Who Benefits", href: "#who-benefits" },
      { label: "Trust Layer", href: "#top" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "What is Habisolo", href: "#top" },
      { label: "Why Habisolo Exist", href: "#top" },
      { label: "How it Work", href: "#how-it-works" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "https://habisolo.com/en/privacy-policy" },
      { label: "Terms of service", href: "https://habisolo.com/en/terms-and-conditions" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
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
              The Habisolo Trust Passport is a digital trust profile that
              brings together verified information and trust signals about a
              user within the Habisolo ecosystem.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold tracking-wider text-white/50 uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Habisolo. All rights reserved.</p>
          <p>Trust Passport is part of the Habisolo ecosystem.</p>
          <GoogleTranslate />
        </div>
      </div>
    </footer>
  );
}
