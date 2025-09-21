import { notFound } from "next/navigation";

const copy: Record<string, {title:string; body:string;}> = {
  "exams-cleanings": { title: "exams & cleanings", body: "regular checkups, gentle cleanings, and cavity prevention." },
  "sealants-fluoride": { title: "sealants & fluoride", body: "protective treatments to reduce decay risk." },
  "sedation": { title: "sedation options", body: "nitrous oxide (“laughing gas”) and minimal sedation when appropriate." },
};

export function generateStaticParams() {
  return Object.keys(copy).map(slug => ({ slug }));
}

export default function Service({ params }: { params: { slug: string }}) {
  const data = copy[params.slug];
  if (!data) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose">
      <h1 className="mb-2">{data.title}</h1>
      <p>{data.body}</p>
    </article>
  );
}
