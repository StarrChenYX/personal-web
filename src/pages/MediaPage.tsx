import { MediaGrid } from "@/components/MediaGrid";
import { mediaIntro } from "@/data/media";

export function MediaPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-gallery text-accent">
          {mediaIntro.eyebrow}
        </p>
        <h1 className="mt-8 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
          {mediaIntro.heading}
        </h1>
        <p className="mt-6 text-lg leading-9 text-gallery-soft">
          {mediaIntro.description}
        </p>
      </div>

      <div className="mt-16">
        <MediaGrid />
      </div>
    </section>
  );
}
