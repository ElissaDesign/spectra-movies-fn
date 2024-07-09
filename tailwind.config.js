/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0E0E0D",
        "brand-secondary": "#1A1A19",
        "brand-tertiary": "#16181E",
        "brand-quaternary": "#B0EDDB",
        "brand-gray": "#B0B0AF",
        "brand-white": "#FFFFFF",
      },
    },
    screens: {
      phone: { max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: { min: "1024px", max: "1580px" },
      desktop: { min: "1581px" },
    },
  },
  plugins: [],
};
