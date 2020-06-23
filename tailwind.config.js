const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
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
      },
      spacing: {
        "88": "22rem",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
    borderWidth: ["responsive", "hover", "focus"],
    // borderColor: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [require("@tailwindcss/ui")],
};
