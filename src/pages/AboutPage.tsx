const contactItems = [
  { label: "Phone", value: "(415) 638-7377" },
  {
    label: "Email",
    value: "starrchenpiano@gmail.com",
    href: "mailto:starrchenpiano@gmail.com",
  },
  { label: "Location", value: "San Francisco Bay Area" },
];

const experience = [
  {
    institution: "Central Conservatory of Music",
    role: "Piano Accompanist of Music Education Department Choir",
    dates: "September 2022 - June 2024",
  },
  {
    institution: "San Francisco Conservatory of Music",
    role: "Voice Department Pianist",
    dates: "February 2025 - Present",
  },
  {
    institution: "University of San Francisco",
    role: "Piano Accompanist of USF Choir",
    dates: "August 2025 - Present",
  },
  {
    institution: "San Francisco Girl Chorus",
    role: "Piano Accompanist of L1 Groups (East Bay)",
    dates: "September 2025 - January 2026",
  },
  {
    institution: "San Francisco Conservatory of Music",
    role: "Collaborative Piano Department Graduate Assistant",
    dates: "September 2025 - May 2026",
  },
  {
    institution: "Santa Clara University",
    role: "On-Call Staff Pianist",
    dates: "February 2026 - Present",
  },
];

const skills = [
  "Advanced Sight-reading",
  "Open score / Polyphonic Reading",
  "Efficient Schedule Coordination",
  "Last-Minute Substitutions",
  "Punctuality & Reliability",
  "Extensive Ensemble Experience: orchestra and diverse chamber settings with winds, strings, and voice",
];

const education = [
  {
    institution: "Central Conservatory of Music",
    location: "Beijing, China",
    degree: "Bachelor of Music Education",
    dates: "September 2019 - June 2024",
  },
  {
    institution: "San Francisco Conservatory of Music",
    location: "San Francisco, CA",
    degree: "Master of Collaborative Piano",
    dates: "September 2024 - May 2026",
  },
];

export function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-xs uppercase tracking-gallery text-accent">About</p>
        <div className="mt-8 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <h1 className="font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
              Yuanxin "Starr" Chen
            </h1>
            <p className="mt-5 text-sm uppercase tracking-gallery text-gallery-soft">
              <span aria-hidden="true">|</span> Collaborative Pianist
            </p>
          </div>
          <div className="space-y-6 text-lg leading-9 text-gallery-soft">
            <p>
              Collaborative pianist based in the San Francisco Bay Area, with
              experience supporting choirs, voice departments, chamber
              musicians, and conservatory programs.
            </p>
            <div className="grid gap-4 border-y border-gallery-line py-6 sm:grid-cols-3">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <p className="text-[0.65rem] uppercase tracking-gallery text-accent">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-sm leading-6 text-gallery-black underline decoration-gallery-line underline-offset-4 transition hover:text-accent hover:decoration-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-gallery-black">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="mx-auto max-w-6xl border-t border-gallery-line px-6 py-14 lg:px-10 lg:py-20"
      >
        <div className="grid gap-10 md:grid-cols-[0.32fr_0.68fr] md:gap-12">
          <div>
            <p className="text-xs uppercase tracking-gallery text-accent">
              Experience
            </p>
            <h2
              id="experience-heading"
              className="mt-6 font-serif text-3xl leading-tight text-gallery-black md:text-4xl"
            >
              Professional appointments and ensemble collaborations.
            </h2>
          </div>
          <div className="divide-y divide-gallery-line">
            {experience.map((item) => (
              <article
                key={`${item.institution}-${item.role}-${item.dates}`}
                className="grid gap-3 py-7 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-8"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gallery-black">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gallery-charcoal">
                    {item.role}
                  </p>
                </div>
                <p className="text-sm uppercase leading-6 tracking-[0.12em] text-gallery-soft sm:text-right">
                  {item.dates}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="skills-heading"
        className="mx-auto max-w-6xl border-t border-gallery-line px-6 py-14 lg:px-10 lg:py-20"
      >
        <div className="grid gap-10 md:grid-cols-[0.32fr_0.68fr] md:gap-12">
          <div>
            <p className="text-xs uppercase tracking-gallery text-accent">
              Skills
            </p>
            <h2
              id="skills-heading"
              className="mt-6 font-serif text-3xl leading-tight text-gallery-black md:text-4xl"
            >
              Responsive musicianship for demanding rehearsal settings.
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="border border-gallery-line bg-gallery-white px-5 py-5 text-base leading-7 text-gallery-charcoal"
              >
                <span
                  className="mb-4 block h-px w-10 bg-accent"
                  aria-hidden="true"
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="education-heading"
        className="mx-auto max-w-6xl border-t border-gallery-line px-6 py-14 pb-20 lg:px-10 lg:py-20 lg:pb-28"
      >
        <div className="grid gap-10 md:grid-cols-[0.32fr_0.68fr] md:gap-12">
          <div>
            <p className="text-xs uppercase tracking-gallery text-accent">
              Education
            </p>
            <h2
              id="education-heading"
              className="mt-6 font-serif text-3xl leading-tight text-gallery-black md:text-4xl"
            >
              Conservatory training in music education and collaborative piano.
            </h2>
          </div>
          <div className="grid gap-5">
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.degree}`}
                className="border border-gallery-line bg-gallery-mist/55 p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gallery-black">
                      {item.institution}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.12em] text-gallery-soft">
                      {item.location}
                    </p>
                  </div>
                  <p className="text-sm uppercase leading-6 tracking-[0.12em] text-gallery-soft sm:text-right">
                    {item.dates}
                  </p>
                </div>
                <p className="mt-5 text-base leading-7 text-gallery-charcoal">
                  {item.degree}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
