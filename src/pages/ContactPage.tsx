import { BookingGuide } from "@/components/BookingGuide";
import { ContactCard } from "@/components/ContactCard";
import { contactIntro } from "@/data/contact";

export function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs uppercase tracking-gallery text-accent">
            {contactIntro.eyebrow}
          </p>
          <h1 className="mt-8 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
            {contactIntro.heading}
          </h1>
          <p className="mt-6 text-lg leading-9 text-gallery-soft">
            {contactIntro.description}
          </p>
        </div>

        <div className="space-y-8">
          <ContactCard />
          <BookingGuide />
        </div>
      </div>
    </section>
  );
}
