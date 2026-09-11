import type { LucideIcon } from "lucide-react";

export default function SectionBadge({
  icon: Icon,
  label,
  variant = "light",
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const look =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white"
      : "border-brand-500/30 bg-brand-50 text-brand-700";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${look} ${className}`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
      {label}
    </span>
  );
}
