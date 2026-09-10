import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackHomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex h-[50px] w-[164px] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[linear-gradient(90deg,var(--color-brand-600)_0%,rgba(228,192,98,0.7)_100%)] px-3 py-4 text-base font-semibold text-white shadow-[0px_8px_32px_4px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.02]"
    >
      <ArrowLeft className="h-4 w-4 shrink-0" />
      Back Home
    </Link>
  );
}
