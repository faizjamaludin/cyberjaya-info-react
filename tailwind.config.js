/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#110B49",
      secondary: {
        100: "#FFF0D2",
        200: "#FFAB00",
      },
      white: "#FFFFFF",
      text: {
        100: "#0C0808",
        200: "#9ca3af",
        300: "#e5e7eb",
      },
      success: {
        500: "#22c55e",
        600: "#16a34a",
      },
    },
    extend: {},
  },
  plugins: [],
};
