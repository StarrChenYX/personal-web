export type HomeService = {
  title: string;
  description: string;
  icon: "vocal" | "sonata" | "ensemble";
};

export const heroContent = {
  eyebrow: "COLLABORATIVE PIANIST | Yuanxin Starr Chen",
  heading: "Elevating Performances through Collaborative Artistry",
  subheading:
    "Collaborative Pianist based in SF Bay Area. Dedicated partnership for vocalists, instrumentalists, and choirs. Available for diverse musical settings—including rehearsals, music salons, recitals, and recordings, as well as last-minute performance coverage."
,
  ctaLabel: "Book a Collaboration",
  ctaHref: "/contact",
};

export const aboutPreview = {
  eyebrow: "About",
  title: "The Road to Musical Partnership.",
  body:
    "A collaborative pianist active in the Bay Area. Whether it's a last-minute rehearsal or a high-stakes performance, I bring adaptability, precision, and a partner’s intuition to every project. ",
  ctaLabel: "Read Full Biography",
  ctaHref: "/about",
};

export const homeServices: HomeService[] = [
  {
    title: "Vocal Collaboration",
    description:
      "Sensitive, text-aware partnership for art song, opera, auditions, recitals, and studio preparation.",
    icon: "vocal",
  },
  {
    title: "Instrumental Sonatas",
    description:
      "Clear, responsive support for sonata repertoire, concerto reductions, competitions, and juries.",
    icon: "sonata",
  },
  {
    title: "Chamber Ensembles",
    description:
      "Thoughtful ensemble playing for intimate chamber programs, contemporary works, and special events.",
    icon: "ensemble",
  },
];
