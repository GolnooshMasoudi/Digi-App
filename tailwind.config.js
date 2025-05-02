export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm-md": "580px",
        "md-sm": "640px",
        "lg-xl": "1180px",
      },
      // boxShadow: {
      //   "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      // },
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
