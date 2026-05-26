export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
      <p className="text-xs uppercase tracking-gallery text-accent">About</p>
      <div className="mt-8 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <h1 className="font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
          A calm, responsive collaborator at the piano.
        </h1>
        <div className="space-y-6 text-lg leading-8 text-gallery-soft">
          <p>
            Use this page for your professional biography, training, faculty or
            coaching experience, and the artistic values that define your work.
          </p>
          <p>
            The layout keeps generous whitespace and a restrained monochrome
            palette so your story, portrait, and credentials can take focus.
          </p>
        </div>
      </div>
    </section>
  );
}
