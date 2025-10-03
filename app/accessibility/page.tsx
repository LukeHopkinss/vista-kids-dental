// app/accessibility/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Our commitment to full and equal access for guests and website visitors, including communication, website access, service animals, and feedback.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Accessibility</h1>

      <h2 className="mt-8 text-xl font-medium">Overview</h2>
      <p className="mt-2 text-slate-700">
        At Vista Kids Dental, we respect the dignity and independence of our guests and we
        are committed to providing full and equal access to everyone who visits our facility and website.
        Here’s what you can expect from us:
      </p>

      <h2 className="mt-8 text-xl font-medium">Communication</h2>
      <p className="mt-2 text-slate-700">
        We are committed to effectively communicating with our guests. We provide, at no charge, auxiliary
        aids and services which are reasonably necessary to achieve effective communication. We accept
        Operator Relay Service calls, and Teletypewriter (TTY/TDD) calls through 711, in the same manner
        as traditional telephonic channels.
      </p>

      <h2 className="mt-8 text-xl font-medium">Website Access</h2>
      <p className="mt-2 text-slate-700">
        We endeavor to develop and update website content using current technologies that effectively
        communicate with and afford full and equal access to persons with disabilities. We make every effort
        necessary to meet online usability and design requirements, including those recommended by the World
        Wide Web Consortium (W3C) in its Web Content Accessibility Guidelines 2.1 as well as requirements under
        the Twenty-First Century Communications and Video Accessibility Act of 2010.
      </p>

      <h2 className="mt-8 text-xl font-medium">Assistive Devices</h2>
      <p className="mt-2 text-slate-700">
        Our customers and guests are welcome to use their own personal assistive devices to access our
        merchandise and services. If an assistive device or technology is incompatible with our facilities,
        we will work with our customers and guests to provide full and equal access through alternative
        measures.
      </p>

      <h2 className="mt-8 text-xl font-medium">Companions and Service Animals</h2>
      <p className="mt-2 text-slate-700">
        Companions, guide dogs or other service animals are welcome to accompany guests with disabilities
        while visiting our facility. We will also sensitively, respectfully and discretely provide personal
        assistance when requested.
      </p>

      <h2 className="mt-8 text-xl font-medium">Interruption of Services</h2>
      <p className="mt-2 text-slate-700">
        If we are temporarily unable to offer any special facilities or services that assist customers and
        guests with disabilities, we will immediately provide notice of this interruption and the anticipated
        time when these services will be resumed.
      </p>

      <h2 className="mt-8 text-xl font-medium">Training</h2>
      <p className="mt-2 text-slate-700">
        Our entire staff receives ongoing and documented training in order to properly communicate with and
        provide sensitive, helpful and respectful assistance to our customers and guests with disabilities.
      </p>

      <h2 className="mt-8 text-xl font-medium">Modification of Policies or Procedures</h2>
      <p className="mt-2 text-slate-700">
        We will make reasonable modifications to our policies or procedures when it is necessary to provide
        our customers and guests with full and equal access to our facility, website or communications
        channels.
      </p>

      <p className="mt-6 text-slate-700">
        We are continuously working to improve the accessibility of content on our website. If you are looking
        for mouse and keyboard alternatives, speech recognition software such as Dragon NaturallySpeaking may
        help you navigate web pages and online services. This software allows the user to move focus around a
        web page or application screen through voice controls.
      </p>

      <h2 className="mt-8 text-xl font-medium">Customer Feedback</h2>
      <p className="mt-2 text-slate-700">
        We actively encourage the participation of all customers and guests in our feedback process. In
        addition to sharing your comments in person, you may also contact us by:
      </p>

      <div className="mt-3 rounded-lg border p-4">
        <p className="text-slate-700">
          <strong>Mail:</strong><br />
          1235 W Vista Way, Ste. F, Vista CA, 92083
        </p>
        <p className="mt-3 text-slate-700">
          <strong>Email:</strong><br />
          <a href="mailto:info@vistakidsdental.com" className="underline text-sky-700">info@vistakidsdental.com</a>
        </p>
        <p className="mt-3 text-slate-700">
          If you feel that these standards have not been maintained in your situation, please let us know by
          calling: <a href="tel:+17603305995" className="underline text-sky-700">(760) 330-5995</a> — we gladly accept TRS calls.
        </p>
      </div>
    </section>
  );
}
