/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
    theme: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "edu-sa": ["Edu SA Beginner", "cursive"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        transparent: "#ffffff00",
        richblack: {
          5: "#F8F9FA",
          25: "#F1F3F5",
          50: "#E9ECEF",
          100: "#DEE2E6",
          200: "#CED4DA",
          300: "#ADB5BD",
          400: "#868E96",
          500: "#495057",
          600: "#343A40",
          700: "#212529",
        },
        extend: {
          maxWidth: {
            maxContent: "1260px",
            maxContentTab: "650px"
          },
        },
    },
  },
  plugins: [],
}
