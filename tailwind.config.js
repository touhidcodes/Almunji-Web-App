/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "scroll-thumb": "#00aaff",
        "scroll-track": "#f0f0f0",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
