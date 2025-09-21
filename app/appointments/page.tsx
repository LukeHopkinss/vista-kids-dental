"use client";
import { useState } from "react";

export default function Appointments() {
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("nickname")) return; // honeypot
    const res = await fetch("/api/appointments", { method: "POST", body: form });
    setStatus(res.ok ? "ok" : "err");
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-semibold">request an appointment</h1>
      <p className="mt-2 text-slate-600">please don’t submit medical details here.</p>

      {status === "ok" ? (
        <p className="mt-6 rounded-lg bg-emerald-50 p-4 text-emerald-700">thanks! we’ll contact you shortly.</p>
      ) : (
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input name="nickname" className="hidden" autoComplete="off" />
          <label className="grid gap-1">
            <span className="text-sm">parent/guardian name</span>
            <input name="name" required className="rounded-md border px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">phone</span>
            <input type="tel" name="phone" required className="rounded-md border px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">email</span>
            <input type="email" name="email" className="rounded-md border px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">preferred day/time</span>
            <input name="preference" className="rounded-md border px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">notes</span>
            <textarea name="notes" rows={4} className="rounded-md border px-3 py-2" />
          </label>
          <button className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700">
            send request
          </button>
          {status === "err" && <p className="text-red-600">something went wrong. please call us.</p>}
        </form>
      )}
    </section>
  );
}
