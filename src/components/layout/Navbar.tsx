"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Music2, X } from "lucide-react";
import { useState } from "react";

import { navigationLinks, siteIdentity } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gallery-line/70 bg-gallery-white/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteIdentity.name} home`}
          onClick={closeMenu}
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-accent/40 text-accent">
            <Music2 size={18} aria-hidden="true" />
          </span>
          <span>
            <span className="block font-serif text-lg leading-none text-gallery-black">
              {siteIdentity.name}
            </span>
            <span className="mt-1 block text-[0.65rem] uppercase tracking-gallery text-gallery-soft">
              {siteIdentity.business}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-gallery transition hover:text-accent ${
                  isActive ? "text-accent" : "text-gallery-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-gallery-line text-gallery-black transition hover:border-accent hover:text-accent md:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-gallery-line bg-gallery-white px-6 py-6 shadow-sm md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-gallery transition hover:text-accent ${
                    isActive ? "text-accent" : "text-gallery-charcoal"
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
