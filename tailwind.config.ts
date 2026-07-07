/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FAF8F5',
        'warm-white': '#F7F4EF',
        'beige': '#F5F0E8',
        'stone-warm': '#E8E2D8',
        'gold': '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#A8894E',
        'charcoal': '#2D2D2D',
        'near-black': '#1A1A1A',
        'blush': '#F0E5E0',
        'dark-emerald': '#0D1F1A',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}