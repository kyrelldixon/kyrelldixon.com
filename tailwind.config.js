module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      spacing: {
        "88": "22rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
