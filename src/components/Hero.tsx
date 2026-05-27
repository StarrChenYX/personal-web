import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { heroContent } from "@/data/home";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gallery-black px-6 py-28 text-center text-gallery-white">
      <div className="gallery-media-frame absolute inset-0" aria-hidden="true">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(138,111,61,0.32),transparent_34%),linear-gradient(135deg,#050505_0%,#202020_45%,#0f0f0f_100%)]" />
      </div>
      <div className="absolute inset-0 bg-gallery-black/55" aria-hidden="true" />
      <div className="absolute inset-x-8 top-24 h-px bg-gallery-white/15" aria-hidden="true" />
      <div className="absolute inset-x-8 bottom-24 h-px bg-gallery-white/10" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="mx-auto max-w-xs text-xs uppercase leading-6 tracking-[0.12em] text-accent-soft sm:max-w-none sm:tracking-gallery">
          {heroContent.eyebrow}
        </p>
        <h1 className="mt-8 font-serif text-5xl leading-tight text-gallery-white md:text-7xl lg:text-8xl">
          {heroContent.heading}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gallery-white/76 md:text-lg">
          {heroContent.subheading}
        </p>
        <Link
          to={heroContent.ctaHref}
          className="mt-12 inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm uppercase tracking-gallery text-gallery-white transition hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-soft focus:ring-offset-4 focus:ring-offset-gallery-black"
        >
          {heroContent.ctaLabel}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
