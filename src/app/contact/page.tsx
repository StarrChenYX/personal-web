import { Mail, MapPin } from "lucide-react";

import { contactMethods } from "@/data/site";

const icons = [Mail, MapPin];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-gallery text-accent">Contact</p>
          <h1 className="mt-8 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
            Start a conversation about your next collaboration.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gallery-soft">
            Replace the placeholder email with your preferred business inbox and
            add a booking workflow, contact form, or studio policies when ready.
          </p>
        </div>

        <div className="border border-gallery-line bg-gallery-white p-8 md:p-10">
          <h2 className="font-serif text-3xl text-gallery-black">Inquiry details</h2>
          <div className="mt-8 space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = icons[index] ?? Mail;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex gap-4 border-t border-gallery-line pt-6 transition hover:text-accent"
                >
                  <span className="mt-1 text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-gallery text-gallery-soft">
                      {method.label}
                    </span>
                    <span className="mt-2 block text-lg text-gallery-charcoal">
                      {method.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
