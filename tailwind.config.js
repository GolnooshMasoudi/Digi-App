export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm-md": "580px",
        "md-sm": "640px",
        "close-md": "",
      },
    },
    fontFamily: {
      display: ["Oswald"],
      body: ["Roboto"],
    },
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
  mode: "jit",
};
