"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CtaButton from "./CtaButton";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who Benefits", href: "#who-benefits" },
  { label: "Privacy", href: "#privacy" },
  { label: "Frequently Asked Questions", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
        <Link href="#top" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Habisolo"
            width={222}
            height={141}
            className="h-11 w-auto object-contain lg:h-12"
            unoptimized
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-semibold text-gray-600 transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <CtaButton />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-gray-600"
              >
                {link.label}
              </a>
            ))}
            <CtaButton className="mt-2" onClick={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}
