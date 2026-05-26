import { BookOpen } from "lucide-react";

import { repertoireSections } from "@/data/site";

export default function RepertoirePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-gallery text-accent">Repertoire</p>
        <h1 className="mt-8 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
          Representative collaborative repertoire.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gallery-soft">
          Replace these starter groupings with your specific composers, works,
          language specialties, and audition lists as the site grows.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {repertoireSections.map((section) => (
          <article
            key={section.title}
            className="border border-gallery-line bg-gallery-white p-8 transition hover:border-accent/60"
          >
            <BookOpen className="text-accent" size={24} aria-hidden="true" />
            <h2 className="mt-8 font-serif text-2xl text-gallery-black">{section.title}</h2>
            <ul className="mt-6 space-y-4 text-gallery-soft">
              {section.items.map((item) => (
                <li key={item} className="border-t border-gallery-line pt-4">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
