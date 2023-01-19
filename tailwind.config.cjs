/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#8E7ADB",
        darkBlue: "#473F8D",
      },
    },
  },
  plugins: [],
};
