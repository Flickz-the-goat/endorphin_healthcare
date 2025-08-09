import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-400 to-lime-400 text-neutral-900 shadow-sm hover:from-cyan-300 hover:to-lime-300"
      : "border border-neutral-200 text-neutral-800 hover:bg-gray-900 hover:text-white";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
