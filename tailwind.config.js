const brandGreen = "#16a34a";
const brandGreenScale = {
  50: brandGreen,
  100: brandGreen,
  200: brandGreen,
  300: brandGreen,
  400: brandGreen,
  500: brandGreen,
  600: brandGreen,
  700: brandGreen,
  800: brandGreen,
  900: brandGreen,
  950: brandGreen,
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter Tight", "Questrial", "Inter", "sans-serif"],
        display: ["Inter Tight", "Questrial", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        "z-black": "#0a0a0a",
        "z-gray": "#f4f4f5",
        "z-green": brandGreen,
        emerald: brandGreenScale,
        green: brandGreenScale,
        lime: brandGreenScale,
        yellow: brandGreenScale,
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
