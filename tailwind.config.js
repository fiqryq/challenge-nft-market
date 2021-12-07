module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        72: "18rem",
        75: "19rem",
        84: "21rem",
        96: "24rem",
        110: "27rem",
      },
      animation: ["motion-safe"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
