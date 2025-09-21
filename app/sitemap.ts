export default function sitemap() {
  const base = "https://your-domain.com";
  const routes = ["","/services","/team","/office-tour","/new-patient-forms","/appointments","/contact"]
    .map(p => ({ url: base + p, lastModified: new Date() }));
  return routes;
}
