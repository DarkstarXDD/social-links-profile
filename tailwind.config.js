/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        "primary-400": "hsl(75, 94%, 57%)",

        "neutral-100": "hsl(0, 0%, 100%)",
        "neutral-400": "hsl(0, 0%, 20%)",
        "neutral-700": "hsl(0, 0%, 12%)",
        "neutral-900": "hsl(0, 0%, 8%)",
      },

      fontSize: {
        sm: ["0.875rem", "1.5"],
        "2xl": ["1.5rem", "1.5"],
      },
    },
  },
  plugins: [],
}
