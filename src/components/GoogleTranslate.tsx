"use client";

import Script from "next/script";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate() {
  return (
    <>
      <div
        id="google_translate_element"
        className="[&_.goog-te-gadget-simple]:!rounded-md [&_.goog-te-gadget-simple]:!border [&_.goog-te-gadget-simple]:!border-black/10 [&_.goog-te-gadget-simple]:!bg-white [&_.goog-te-gadget-simple]:!px-2 [&_.goog-te-gadget-simple]:!py-1.5 [&_.goog-te-gadget-simple]:!text-sm"
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,es,fr",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
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
    </>
  );
}
