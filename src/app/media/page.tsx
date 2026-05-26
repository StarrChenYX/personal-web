import { Camera, Headphones, PlayCircle } from "lucide-react";

import { mediaItems } from "@/data/site";

const icons = [PlayCircle, Headphones, Camera];

export default function MediaPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-gallery text-accent">Media</p>
          <h1 className="mt-8 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
            A gallery for sound, image, and performance.
          </h1>
        </div>
        <p className="text-lg leading-8 text-gallery-soft">
          The media page is prepared for embedded videos, audio links, press photos,
          and recital documentation while preserving a quiet gallery-like feel.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {mediaItems.map((item, index) => {
          const Icon = icons[index] ?? PlayCircle;

          return (
            <article key={item.title} className="bg-gallery-mist p-8">
              <div className="flex size-12 items-center justify-center rounded-full bg-gallery-white text-accent">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h2 className="mt-10 font-serif text-2xl text-gallery-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-gallery-soft">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
