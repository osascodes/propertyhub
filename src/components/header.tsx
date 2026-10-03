"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const menus = [
  {
    label: "Properties",
    href: "/properties",
    items: [
      { href: "/properties", label: "All properties" },
      { href: "/developments", label: "Developments" },
    ],
  },
  {
    label: "About",
    href: "/about",
    items: [
      { href: "/about", label: "The practice" },
      { href: "/team", label: "Team" },
      { href: "/locations", label: "Locations" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const on = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const close = () => { setOpen(false); setPanel(null); };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-night/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-serif text-xl tracking-wide" onClick={close}>Meridian</Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menus.map((m) => (
            <div key={m.label} className="group relative">
              <Link href={m.href} className={`inline-flex items-center gap-1 text-sm ${on(m.href) || m.items.some((i) => on(i.href)) ? "text-ivory" : "text-mist hover:text-ivory"}`}>
                {m.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="rounded-md border border-line bg-night/95 py-2 shadow-xl">
                  {m.items.map((item) => (
                    <Link key={item.href} href={item.href} className={`block px-4 py-2.5 text-sm ${on(item.href) ? "text-gold" : "text-ivory/80 hover:text-ivory"}`}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link href="/contact" className={`text-sm ${on("/contact") ? "text-ivory" : "text-mist hover:text-ivory"}`}>Contact</Link>
          <a href="https://wa.me/2348094412200" className="rounded-md border border-gold px-3 py-2 text-xs uppercase tracking-wider text-gold hover:bg-gold hover:text-night">WhatsApp</a>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>

      {open && (
        <div className="border-t border-line px-5 py-4 lg:hidden">
          {menus.map((m) => (
            <div key={m.label} className="border-b border-line/70">
              <button className="flex w-full items-center justify-between py-3 text-left text-lg" onClick={() => setPanel(panel === m.label ? null : m.label)}>
                {m.label}
                <ChevronDown className={`h-4 w-4 transition ${panel === m.label ? "rotate-180 text-gold" : "text-mist"}`} />
              </button>
              {panel === m.label && (
                <div className="mb-3 space-y-1 pl-3">
                  {m.items.map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} className="block py-2 text-sm text-mist">{item.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={close} className="block py-3 text-lg">Contact</Link>
          <a href="https://wa.me/2348094412200" className="mt-2 inline-block rounded-md border border-gold px-3 py-2 text-xs uppercase tracking-wider text-gold">WhatsApp</a>
        </div>
      )}
    </header>
  );
}
