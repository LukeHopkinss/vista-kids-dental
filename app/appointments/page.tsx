// app/appointments/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description:
    "Request your child’s appointment—share your info, patient details, preferred day and time, and the reason for your visit.",
  alternates: { canonical: "/appointments" },
};

export default function Appointments() {
  return (
    <section className="mx-auto max-w-3xl sm:px-6 lg:px-8 py-10 pt-[72px] md:pt-[88px]">
      <h1 className="text-3xl font-semibold">Request An Appointment</h1>
      <p className="mt-2 text-slate-600">
        Please don't include personal medical details — specific care is discussed during your visit.
      </p>

      <form action="/api/appointments" method="POST" className="mt-8 grid gap-6">
        {/* honeypot */}
        <input name="nickname" className="hidden" autoComplete="off" />

        {/* YOUR INFORMATION */}
        <fieldset className="grid gap-4">
          <legend className="text-sm space-y-3 font-medium uppercase tracking-wide text-slate-500">Your Information</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm">First Name*</span>
              <input name="firstName" required className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Last Name*</span>
              <input name="lastName" required className="rounded-md border px-3 py-2" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm">Phone*</span>
              <input type="tel" name="phone" required className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Email*</span>
              <input type="email" name="email" required className="rounded-md border px-3 py-2" />
            </label>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-1">
              <span className="text-sm">Street Address</span>
              <input name="address1" className="rounded-md border px-3 py-2" />
            </label>
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1">
                <span className="text-sm">City</span>
                <input name="city" className="rounded-md border px-3 py-2" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm">State</span>
                <input name="state" className="rounded-md border px-3 py-2" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm">Zip</span>
                <input name="zip" className="rounded-md border px-3 py-2" />
              </label>
            </div>
          </div>
        </fieldset>

        {/* PATIENT INFORMATION */}
        <fieldset className="grid gap-4">
          <legend className="text-sm font-medium uppercase tracking-wide text-slate-500">Patient Information</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm">Patient Name</span>
              <input name="patientName" className="rounded-md border px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Age</span>
              <input name="patientAge" inputMode="numeric" className="rounded-md border px-3 py-2" />
            </label>
          </div>

          <div className="grid gap-2">
            <span className="text-sm">Gender</span>
            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="patientGender" value="Male" /> <span>Male</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="patientGender" value="Female" /> <span>Female</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="patientGender" value="Other" /> <span>Other</span>
              </label>
            </div>
          </div>
        </fieldset>

        {/* APPOINTMENT INFORMATION */}
        <fieldset className="grid gap-4">
          <legend className="text-sm font-medium uppercase tracking-wide text-slate-500">Appointment Information</legend>

          <label className="grid gap-1">
            <span className="text-sm">Preferred Appointment Date</span>
            <input type="date" name="preferredDate" className="rounded-md border px-3 py-2" />
          </label>

          <div className="grid gap-2">
            <span className="text-sm">If this date isn't available, choose preferred day(s) of the week</span>
            <div className="flex flex-wrap gap-4">
              {["Monday","Tuesday","Wednesday","Thursday","Friday"].map((d) => (
                <label key={d} className="inline-flex items-center gap-2">
                  <input type="checkbox" name="preferredDays" value={d} /> <span>{d}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <span className="text-sm">Choose a time</span>
            <div className="flex flex-wrap gap-4">
              {["Morning","Afternoon","Evening"].map((t) => (
                <label key={t} className="inline-flex items-center gap-2">
                  <input type="radio" name="preferredTime" value={t} /> <span>{t}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              Children in pre-school and elementary grades are usually seen in the morning; late afternoons are reserved for older students. {/* mirrored note from example */}
            </p>
          </div>

          <div className="grid gap-2">
            <span className="text-sm">Reason for appointment</span>
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="reason" value="Exam, Cleaning and X-Ray" /> <span>Exam, Cleaning &amp; X-Ray</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="reason" value="Toothache or Other Emergency" /> <span>Toothache or Other Emergency</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="reason" value="Recommended Treatment" /> <span>Recommended Treatment</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="reason" value="Other" /> <span>Other</span>
              </label>
            </div>
          </div>
        </fieldset>

        {/* COMMENTS */}
        <fieldset className="grid gap-2">
          <legend className="text-sm font-medium uppercase tracking-wide text-slate-500">comments</legend>
          <textarea name="comments" rows={5} className="rounded-md border px-3 py-2" />
          <p className="text-xs text-slate-500">
            Please use this form for general information only. <strong>Do not send personal health information.</strong> Availability varies by request. Your appointment will be <strong>confirmed by phone</strong>.
          </p>
        </fieldset>

        <div>
          <button className="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:bg-orange-400">
            Request Appointment
          </button>
        </div>
      </form>
    </section>
  );
}

