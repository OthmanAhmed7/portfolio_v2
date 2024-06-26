/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "945px",
      xl: "1024px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        "primary-400": "#b1d0cf",

        "neutral-800": "#0e0e0e",
        "neutral-400": "#5e5e5f",
        "neutral-200": "#9fa0a0",
      },
    },
  },
  plugins: [],
};
