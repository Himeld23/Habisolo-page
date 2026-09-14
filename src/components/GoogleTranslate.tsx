"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("English");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectLanguage(code: string, label: string) {
    setCurrent(label);
    setOpen(false);

    const trySelect = () => {
      const select = document.querySelector<HTMLSelectElement>(
        "#google_translate_element select.goog-te-combo"
      );
      if (!select) {
        setTimeout(trySelect, 200);
        return;
      }
      select.value = code;
      select.dispatchEvent(new Event("change"));
    };
    trySelect();
  }

  return (
    <div ref={wrapperRef} className="relative">
      {/* Google's real widget, kept off-screen but functional */}
      <div id="google_translate_element" className="hidden" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:border-black/20"
      >
        <Globe className="h-4 w-4" />
        {current}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => selectLanguage(lang.code, lang.label)}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-surface"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,es,fr",
                autoDisplay: false,
              },
              "google_translate_element"
            );
          }
          window.googleTranslateElementInit = googleTranslateElementInit;
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
