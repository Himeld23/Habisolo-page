import Image from "next/image";
import Link from "next/link";
import BackHomeButton from "./BackHomeButton";
import GoogleTranslate from "../GoogleTranslate";

export default function TrustPassportHeader() {
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

        <div className="flex items-center gap-4">
          <GoogleTranslate />
          <BackHomeButton />
        </div>
      </div>
    </header>
  );
}
