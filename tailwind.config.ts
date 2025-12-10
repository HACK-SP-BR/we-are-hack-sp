import tailwindcssAnimate from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate],
};
