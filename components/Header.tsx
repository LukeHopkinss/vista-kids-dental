// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const LOGO_SRC = "/images/logo/vkd-transparent-logo.svg";
const LOGO_ALT = "Vista Kids Dental";

// NAV LABELS AND ROUTES
type NavItem =
  | { href: string; label: string }
  | { label: string; children: { href: string; label: string }[] };

const nav: NavItem[] = [
  { href: "/services", label: "services" },
  { href: "/about", label: "about" },
  {
    label: "new patients",
    children: [
      { href: "/office-policy", label: "Office Policy" },
      { href: "/post-op", label: "Post-Op Instructions" },
    ],
  },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenKey, setDesktopOpenKey] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  // tiny grace period prevents accidental close when moving into the menu
  const hoverTimer = useRef<number | null>(null);
  const openMenu = (key: string) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    setDesktopOpenKey(key);
  };
  const closeMenuLater = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setDesktopOpenKey(null), 120);
  };

  return (
    <header className="border-b border-slate-200">

      {/* CONTACT STRIP — visible on desktop & mobile 
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-sm">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            {ADDRESS_TEXT}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="hover:text-orange-400">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
        */}

      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={`${LOGO_ALT} — Home`}>
          <Image
            src={LOGO_SRC}
            alt={LOGO_ALT}
            width={36}
            height={36}
            priority
            className="h-15 w-auto"
          />
          <span className="sr-only">{LOGO_ALT}</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            if ("children" in item) {
              const isOpen = desktopOpenKey === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onPointerEnter={() => openMenu(item.label)}
                  onPointerLeave={closeMenuLater}
                >
                  <button
                    type="button"
                    className="capitalize inline-flex items-center gap-1 hover:text-orange-400"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    onClick={() => setDesktopOpenKey(isOpen ? null : item.label)}
                  >
                    {item.label} <span aria-hidden>▾</span>
                  </button>

                  <ul
                    role="menu"
                    className={`absolute left-0 top-full mt-2 w-64 rounded-xl border bg-white shadow-lg p-2 z-[999] ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    {item.children.map((c) => (
                      <li key={c.href} role="none">
                        <Link
                          role="menuitem"
                          href={c.href}
                          className="block rounded-md px-3 py-2 hover:bg-slate-50 hover:text-orange-400"
                          onClick={() => setDesktopOpenKey(null)}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="capitalize hover:text-orange-400">
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/appointments"
            className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400"
          >
            Request Appointment
          </Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden inline-flex items-center rounded border px-3 py-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="toggle navigation"
          aria-expanded={mobileOpen}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {nav.map((item) => {
              if ("children" in item) {
                return (
                  <div key={item.label} className="py-1">
                    <button
                      type="button"
                      className="w-full text-left capitalize flex items-center justify-between rounded-md px-2 py-2 hover:bg-slate-50"
                      onClick={() => setMobileSubOpen((v) => !v)}
                      aria-expanded={mobileSubOpen}
                    >
                      {item.label} <span aria-hidden>{mobileSubOpen ? "▴" : "▾"}</span>
                    </button>
                    {mobileSubOpen && (
                      <ul className="mt-1 ml-3 border-l pl-3 space-y-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block rounded-md px-2 py-1 hover:bg-slate-50"
                              onClick={() => setMobileOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={(item as any).href}
                  href={(item as any).href}
                  className="capitalize py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {(item as any).label}
                </Link>
              );
            })}

            <Link
              href="/appointments"
              className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium text-center"
              onClick={() => setMobileOpen(false)}
            >
              Request Appointment
            </Link>

            <div className="flex items-center gap-4 pt-2 text-sm">
              <a className="underline" href="tel:+17603305995">(760)-330-5995</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
