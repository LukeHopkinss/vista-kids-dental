"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const LOGO_SRC = "/images/logo/vkd-transparent-logo.svg";
const LOGO_ALT = "Vista Kids Dental";
const PHONE_TEL = "+17603305995";
const PHONE_DISPLAY = "(760) 330-5995";
const ADDRESS_DISPLAY = "1235 W Vista Way Ste. F Vista CA, 92083";
const ADDRESS_URL = "https://www.google.com/maps/place/1235+W+Vista+Way+f,+Vista,+CA+92083/data=!4m2!3m1!1s0x80dc7154b5f4f1c9:0x27a70b0b159a4835?sa=X&ved=1t:242&ictx=111";


// NAV LABELS AND ROUTES
type NavItem =
  | { href: string; label: string }
  | {
      label: string;
      parentHref: string;                
      children: { href: string; label: string }[];
    };

const nav: NavItem[] = [
  { href: ADDRESS_URL, label: "1235 W Vista Way, Vista CA" },
  {
    label: "about us",
    parentHref: "/about",                
    children: [
      { href: "/about#why-pediatric-dentists", label: "Why Pediatric Dentists?" },
      { href: "/about#about-dr-ta",      label: "About Dr. Ta" },
    ],
  },
  { label: "services",
    parentHref: "/services",
    children: [
      { href: "/preventative", label: "Preventative Dental Services"},
      { href: "/restorative", label: "Restorative Dentistry for Kids"},
      { href: "/sedation", label: "Sedation Dentistry"},
      { href: "/other", label: "Other Services"},
    ]
   },
  {
    label: "patient info",
    parentHref: "",
    children: [
      { href: "/office-policy", label: "Office Policy" },
      { href: "/post-op",       label: "Post-Op Instructions" },
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
    <>
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">

      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={`${LOGO_ALT} — Home`}>
          <Image
            src={LOGO_SRC}
            alt={LOGO_ALT}
            width={36}
            height={36}
            priority
            className="h-23 w-auto"
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
                  {/* Make the label a LINK to the parent page, keep a separate caret BUTTON */}
                  <div className="inline-flex items-center gap-1">
                    <Link
                      href={"parentHref" in item ? item.parentHref : "#"}
                      className="capitalize hover:text-orange-400"
                      onClick={() => setDesktopOpenKey(null)} // close any open menu when navigating
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      className="inline-flex items-center rounded px-1 py-0.5 hover:text-orange-400"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      aria-label={`${item.label} menu`}
                      onClick={(e) => {
                        e.preventDefault();
                        setDesktopOpenKey(isOpen ? null : item.label);
                      }}
                    >
                      ▾
                    </button>
                  </div>

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
              <Link 
                key={item.href} 
                href={item.href} 
                className={`hover:text-orange-400 capitalize ${
                item.href === ADDRESS_URL ? "text-xs normal-case text-slate-600" : ""
                }`}
                title={item.href === ADDRESS_URL ? ADDRESS_DISPLAY : item.label}
              >
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

          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400 whitespace-nowrap"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            {PHONE_DISPLAY}
          </a>
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

              // simple link branch (no `any` casts)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="capitalize py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/appointments"
              className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium text-center hover:bg-orange-400"
              onClick={() => setMobileOpen(false)}
            >
              Request Appointment
            </Link>

             <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex justify-center rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400 whitespace-nowrap"
                aria-label={`Call ${PHONE_DISPLAY}`}
             >
                {PHONE_DISPLAY}
             </a>

             <a
                href={ADDRESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-slate-700 underline-offset-2 hover:underline mx-auto text-center"
                aria-label={`Open directions to ${ADDRESS_DISPLAY}`}
             >
                {ADDRESS_DISPLAY}
             </a>
          </div>
        </div>
      )}
    </header>

    <div className="h-[64px] md:h-[72px]" aria-hidden />
    </>
  );
}
