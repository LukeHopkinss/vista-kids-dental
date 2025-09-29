"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LOGO_SRC = "/images/logo/vkd-logo.svg";
const LOGO_ALT = "Vista Kids Dental";

const nav = [
  { href: "/services", label: "services" },
  { href: "/team", label: "team" },
  { href: "/office-tour", label: "office tour" },
  { href: "/new-patient-forms", label: "forms" },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={`${LOGO_ALT} — Home`}>
          <Image
            src={LOGO_SRC}
            alt={LOGO_ALT}
            width={36}
            height={36}
            priority
            className="h-9 w-auto"
          />
          <span className="sr-only">{LOGO_ALT}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="capitalize hover:text-orange-400">
              {i.label}
            </Link>
          ))}
          <Link
            href="/appointments"
            className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400"
          >
            Request Appointment
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center rounded border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="toggle navigation"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="capitalize py-2"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Request Appointment
            </Link>
            <div className="flex items-center gap-4 pt-2 text-sm">
              <a className="underline" href="tel:+17605551234">
                (760)-330-5995
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

