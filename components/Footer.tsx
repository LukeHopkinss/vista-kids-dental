export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-6 space-y-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600">
          <span>123 main st, vista, ca</span>
          <a className="underline" href="tel:+17605551234">(760) 555-1234</a>
          <span>mon–fri 8:00–5:00</span>
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} vista kids dental ·{" "}
          <a className="underline" href="/site-map">sitemap</a> ·{" "}
          <a className="underline" href="/accessibility">accessibility</a>
        </div>
      </div>
    </footer>
  );
}
