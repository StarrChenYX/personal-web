import Link from "next/link";
import { ArrowRight, CalendarDays, Music2, Users } from "lucide-react";

import { homeHighlights, siteIdentity } from "@/data/site";

const featureIcons = [Music2, Users, CalendarDays];

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-gallery text-accent">
            {siteIdentity.business} / Collaborative Piano
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight text-gallery-black md:text-7xl">
            Musical partnership with clarity, warmth, and refined detail.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gallery-soft">
            {siteIdentity.tagline} This site foundation is ready for your biography,
            repertoire lists, media samples, and inquiry flow.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gallery-black px-6 py-3 text-sm uppercase tracking-gallery text-gallery-white transition hover:bg-accent"
            >
              Book a consultation
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/repertoire"
              className="inline-flex items-center justify-center rounded-full border border-gallery-line px-6 py-3 text-sm uppercase tracking-gallery text-gallery-black transition hover:border-accent hover:text-accent"
            >
              View repertoire
            </Link>
          </div>
        </div>

        <div className="border border-gallery-line bg-gallery-mist p-8 md:p-10">
          <p className="text-xs uppercase tracking-gallery text-gallery-soft">Services</p>
          <div className="mt-8 space-y-6">
            {homeHighlights.map((highlight, index) => {
              const Icon = featureIcons[index] ?? Music2;

              return (
                <div key={highlight} className="flex gap-4 border-t border-gallery-line pt-6">
                  <span className="mt-1 text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="text-lg font-light leading-7 text-gallery-charcoal">
                    {highlight}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
