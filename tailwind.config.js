/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#0D0D0D",
        "list-bg": "#121212",
        "item-bg": "#1C1C1C",
        "secondary-color": "#5F00FA",
      },
    },
  },
  plugins: [],
};
