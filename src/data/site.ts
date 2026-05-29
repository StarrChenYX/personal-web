export type NavigationLink = {
  label: string;
  href: string;
};

export const siteIdentity = {
  name: "Yuanxin Starr Chen",
  descriptor: "Collaborative Pianist",
  business: "，",
  tagline: "Elegant piano partnership for recitals, auditions, and chamber music.",
};

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Repertoire", href: "/repertoire" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

