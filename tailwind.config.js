/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'Questrial', 'Inter', 'sans-serif'],
        display: ['Inter Tight', 'Questrial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'z-black': '#0a0a0a',
        'z-gray': '#f4f4f5',
        'z-green': '#16a34a',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
};
