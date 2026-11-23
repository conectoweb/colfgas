/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#007afd",
          green: "#43BE24",
          blueAccessible: "#0066B3",
          blueDark: "#005291",
          darkgreen: "#287A1C",
          lightgray: "#F4F7F8",
          graphite: "#263238",
          muted: "#5B6570",
          white: "#FFFFFF",
          // Extended UI tones
          blueLight: "#EBF5FE",
          blueHover: "#005cb3",
          greenLight: "#EDF9E9",
          greenHover: "#37A51D",
          darkgreenHover: "#1E5F15",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-manrope)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(38, 50, 56, 0.06)",
        "card-hover": "0 12px 30px -4px rgba(38, 50, 56, 0.12)",
        cta: "0 8px 24px -4px rgba(0, 102, 179, 0.25)",
      },
    },
  },
  plugins: [],
};
