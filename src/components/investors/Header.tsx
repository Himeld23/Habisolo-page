"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CtaButton from "../CtaButton";
import GoogleTranslate from "../GoogleTranslate";

const NAV_LINKS = [
  { label: "Why Habisolo", href: "#why-habisolo" },
  { label: "Product Ecosystem", href: "#product-ecosystem" },
  { label: "Market", href: "#market" },
  { label: "Business Model", href: "#business-model" },
  { label: "Current Validation", href: "#validation" },
  { label: "Why Now", href: "#why-now" },
];

export default function InvestorHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
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

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-gray-600 transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <GoogleTranslate />
          <CtaButton href="mailto:support@habisolo.com" fixedWidth={false} variant="flat">
            Book a Meeting
          </CtaButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-4 xl:hidden">
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
            <div className="mt-2">
              <GoogleTranslate />
            </div>
            <CtaButton
              href="mailto:support@habisolo.com"
              fixedWidth={false}
              className="mt-2"
              onClick={() => setOpen(false)}
              variant="flat"
            >
              Book a Meeting
            </CtaButton>
          </nav>
        </div>
      )}
    </header>
  );
}
