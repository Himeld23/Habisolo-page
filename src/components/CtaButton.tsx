import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export default function CtaButton({
  href = "#cta",
  children = "Create Trust Passport",
  className = "",
  onClick,
  fixedWidth = true,
  variant = "solid",
  showArrow = true,
  textSize = "base",
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  fixedWidth?: boolean;
  variant?: "solid" | "ghost" | "flat";
  showArrow?: boolean;
  textSize?: "base" | "lg";
}) {
  const look =
    variant === "solid"
      ? "bg-[linear-gradient(90deg,var(--color-brand-600)_0%,rgba(228,192,98,0.7)_100%)] text-white shadow-[0px_8px_32px_4px_rgba(0,0,0,0.15)]"
      : variant === "flat"
        ? "bg-[#2E7D32] text-white shadow-[0px_8px_32px_4px_rgba(0,0,0,0.15)]"
        : "bg-white text-brand-700 shadow-none border border-black/10";
  const size = textSize === "lg" ? "text-[20px]" : "text-base";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex h-[50px] items-center justify-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-4 ${size} font-semibold transition-transform hover:scale-[1.02] ${fixedWidth ? "w-[240px]" : "w-fit"} ${look} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 shrink-0" />}
    </a>
  );
}
