/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/ui/**/*.{js,ts,jsx,tsx}" // Asegúrate de incluir los componentes de UI
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
