export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-6 space-y-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600">
          <span>1235 W Vista Way Ste. F Vista CA, 92083</span>
          <a className="underline" href="tel:+17603305995">(760) 330-5595</a>
          <span>Mon - Fri 8:00AM-5:00PM</span>
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Vista Kids Dental ·{" "}
          <a className="underline" href="/site-map">Sitemap</a> ·{" "}
          <a className="underline" href="/accessibility">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
