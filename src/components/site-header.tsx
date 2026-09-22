"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-serif text-xl text-ink">
          PropertyHub
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm text-mute hover:text-ink ${pathname.startsWith(l.href) ? "text-ink" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="border border-ink bg-ink px-4 py-2 text-sm text-paper hover:bg-transparent hover:text-ink">
            Talk to an agent
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-4 border-t border-line px-5 py-6 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
