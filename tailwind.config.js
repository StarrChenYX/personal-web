/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gallery: {
          white: "#fafafa",
          mist: "#f4f1ed",
          line: "#ded8d0",
          soft: "#8f8a84",
          charcoal: "#171717",
          black: "#050505",
        },
        accent: {
          DEFAULT: "#8a6f3d",
          dark: "#5f4b29",
          soft: "#efe7d3",
        },
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      letterSpacing: {
        gallery: "0.18em",
      },
    },
  },
};

module.exports = config;
