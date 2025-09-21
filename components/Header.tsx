"use client";
import Link from "next/link";
import { useState } from "react";

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
        <Link href="/" className="font-semibold text-lg">vista kids dental</Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className="capitalize hover:text-sky-700">
              {i.label}
            </Link>
          ))}
          <Link
            href="/appointments"
            className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700"
          >
            request appointment
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center rounded border px-3 py-2"
          onClick={() => setOpen(v => !v)}
          aria-label="toggle navigation"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            {nav.map(i => (
              <Link key={i.href} href={i.href} className="capitalize py-2" onClick={() => setOpen(false)}>
                {i.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium text-center"
              onClick={() => setOpen(false)}
            >
              request appointment
            </Link>
            <div className="flex items-center gap-4 pt-2 text-sm">
              <a className="underline" href="tel:+17605551234">call</a>
              <a className="underline" href="sms:+17605551234">text</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
