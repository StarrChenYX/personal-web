import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { aboutPreview } from "@/data/home";

export function AboutPreview() {
  return (
    <section className="bg-gallery-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="gallery-media-frame min-h-[28rem] border border-gallery-line bg-gallery-black">
          <div className="flex h-full min-h-[28rem] items-end bg-[radial-gradient(circle_at_30%_15%,rgba(138,111,61,0.28),transparent_30%),linear-gradient(145deg,#050505_0%,#262626_52%,#111111_100%)] p-8 text-gallery-white">
            <p className="max-w-xs text-xs uppercase tracking-gallery text-gallery-white/60">
              Professional portrait placeholder
            </p>
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs uppercase tracking-gallery text-accent">
            {aboutPreview.eyebrow}
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
            {aboutPreview.title}
          </h2>
          <p className="mt-8 text-lg leading-9 text-gallery-soft">{aboutPreview.body}</p>
          <Link
            to={aboutPreview.ctaHref}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-gallery-black px-6 py-4 text-sm uppercase tracking-gallery text-gallery-black transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-gallery-white"
          >
            {aboutPreview.ctaLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
