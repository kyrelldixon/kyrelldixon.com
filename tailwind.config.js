const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        black: "#181818",
        "f-blue": "#09f",
        "f-purple": "#85f",
        "f-teal": "#0cf",
        "f-green": "#0c8",
        "f-yellow": "#fc0",
        "f-red": "#f36",
      },
      spacing: {
        88: "22rem",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {},
            "pre code": {},
          },
        },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
    borderWidth: ["responsive", "hover", "focus"],
    cursor: ["disabled"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
