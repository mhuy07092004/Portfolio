/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#FEFCF8",
          100: "#FDF8F0",
          200: "#FAF5EB",
          300: "#F5EDD8",
        },
        charcoal: {
          900: "#1C1917",
          800: "#292524",
          700: "#44403C",
        },
        warm: {
          gray: "#78716C",
          muted: "#A8A29E",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
      },
      transitionDuration: {
        250: "250ms",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
