const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js", "./styles/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      colors: {
        black: "#181818",
        gray: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
        },
        "f-blue": "#09f",
        "f-purple": "#85f",
        "f-teal": "#0cf",
        "f-green": "#0c8",
        "f-yellow": "#fc0",
        "f-red": "#f36",
      },
      spacing: {
        "88": "22rem",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
    borderWidth: ["responsive", "hover", "focus"],
    cursor: ["disabled"],
  },
  plugins: [require("@tailwindcss/ui")],
};
