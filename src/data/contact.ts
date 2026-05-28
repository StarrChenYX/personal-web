export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type BookingGuideItem = {
  title: string;
  description: string[];
};

export const professionalEmail = "starrchenpiano@gmail.com";

export const contactIntro = {
  eyebrow: "Contact",
  heading: "Start a focused conversation about your next collaboration.",
  description:
    "Share the details that matter most, and I will respond with availability, next steps, and fee guidance.",
};

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: professionalEmail,
    href: `mailto:${professionalEmail}`,
  },
  {
    label: "Location",
    value: "Based on the San Francisco Peninsula, with availability throughout the Bay Area and beyond.",
    href: "/contact",
  },
];

export const bookingGuideItems: BookingGuideItem[] = [
  {
    title: "Date & Timing",
    description: [
      "Performance date, rehearsal dates, call times, and time zone (if applicable).",
    ],
  },
  {
    title: "Venue / Location",
    description: [
      "Venue name, city, address, and whether travel is involved.",
      "Projects involving significant travel, parking, tolls, or extended transit time may require additional travel compensation.",
    ],
  },
  {
    title: "Repertoire / Program Details",
    description: [
      "Works, composers, movements, cuts, keys, instrumentation, and available scores or recordings.",
    ],
  },
  {
    title: "Budget / Fee Expectations",
    description: [
      "If available, please include your anticipated budget or institutional payment policies.",
      "Fees are generally based on rehearsal time, performance duration, preparation requirements, and travel. Performance calls typically include pre-performance call time in addition to the recital itself.",
    ],
  },
];

export function createMailtoHref() {
  const subject = "Collaboration Inquiry";
  const body = [
    "Hello,",
    "",
    "I would like to inquire about a collaboration.",
    "",
    "Date & Timing:",
    "Venue / Location:",
    "Repertoire / Program Details:",
    "Budget / Fee Expectations:",
    "",
    "Thank you.",
  ].join("\n");

  return `mailto:${professionalEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
