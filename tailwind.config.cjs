/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Brandblue: "#33A6BA",
        Branddark: "#313E4F",
        Brandgray: "#989EA7",
        BrandDarkgray: "#989EA7",
        Brandred: "#FF7B92",
      },
    },
  },
  plugins: [],
};
