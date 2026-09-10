import type { LucideIcon } from "lucide-react";

export default function SectionBadge({
  icon: Icon,
  label,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 ${className}`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
      {label}
    </span>
  );
}
