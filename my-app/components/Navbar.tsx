"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#benefits", label: "Benefits" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#reviews", label: "Reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-26 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/endorphin_healthcare_logo.png"
              alt="Endorphin Global"
              width={104}
              height={104}
              className="rounded"
            />
            <span className="hidden sm:inline text-gray-900">
              Endorphin Healthcare 
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/#products"
              className="inline-flex items-center rounded-full from-cyan-400 to-cyan-400 bg-gradient-to-r px-4 py-2 text-sm font-semibold text-neutral-900 hover:to-lime-400 transition-colors"
            >
              View Products
            </Link>
          </nav>
          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="w-6 h-6 stroke-neutral-400" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white text-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-neutral-900 hover:to-lime-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              View Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
