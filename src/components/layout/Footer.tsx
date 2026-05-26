import Link from "next/link";

import { contactMethods, navigationLinks, siteIdentity } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-gallery-line bg-gallery-black text-gallery-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-2xl">{siteIdentity.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-gallery-white/70">
            {siteIdentity.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-gallery text-accent">Explore</h2>
          <div className="mt-4 flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gallery-white/75 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-gallery text-accent">Contact</h2>
          <div className="mt-4 flex flex-col gap-3">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="text-sm text-gallery-white/75 transition hover:text-accent"
              >
                {method.value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gallery-white/10 px-6 py-5 text-center text-xs uppercase tracking-gallery text-gallery-white/45">
        (c) {new Date().getFullYear()} {siteIdentity.business}. All rights reserved.
      </div>
    </footer>
  );
}
