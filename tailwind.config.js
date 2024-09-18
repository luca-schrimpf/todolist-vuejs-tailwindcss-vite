/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#FF006E",
        secondary: "#8338EC",
        text: "#1f1f1f",
      },
    },
  },
  plugins: [],
};
