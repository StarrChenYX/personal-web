import { ArrowRight, Mail, MapPin } from "lucide-react";

import { contactMethods, createMailtoHref, professionalEmail } from "@/data/contact";

const contactIcons = [Mail, MapPin];

export function ContactCard() {
  return (
    <section
      aria-labelledby="contact-card-heading"
      className="border border-gallery-line bg-gallery-white p-8 md:p-10"
    >
      <p className="text-xs uppercase tracking-gallery text-accent">Direct Inquiry</p>
      <h2
        id="contact-card-heading"
        className="mt-5 font-serif text-3xl leading-tight text-gallery-black md:text-4xl"
      >
        Email is the fastest way to begin.
      </h2>
      <p className="mt-5 leading-8 text-gallery-soft">
        Use the button below to open your email client with the recipient, subject,
        and inquiry prompts pre-filled.
      </p>

      <a
        href={createMailtoHref()}
        aria-label={`Email ${professionalEmail} with collaboration inquiry details`}
        className="mt-8 inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm uppercase tracking-gallery text-gallery-white transition hover:bg-accent focus:outline-none ring-2 ring-accent ring-offset-4 ring-offset-gallery-white"
      >
        Email {professionalEmail}
        <ArrowRight size={16} aria-hidden="true" />
      </a>

      <div className="mt-10 space-y-6">
        {contactMethods.map((method, index) => {
          const Icon = contactIcons[index] ?? Mail;

          return (
            <a
              key={method.label}
              href={method.href}
              aria-label={`${method.label}: ${method.value}`}
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
    </section>
  );
}
