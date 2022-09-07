/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D752AA",
        secondary: "#6781F7",
        "primary-dark": "#6E3DC8",
        "bg-dark": "#192233",
        "bg-light": "#212C42",
        "secondary-grey": "#707D96",
        "secondary-light-grey": "#8B97AE",
        hover: "#6781F7",
        error: "#DB6A6A",
      },
    },
  },
  plugins: [],
};
