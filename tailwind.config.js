import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", ...fontFamily.sans],
        self: ["Garmond", ...fontFamily.serif],
      },
      height: { svw: "100svw", svh: "100svh" },
    },
  },
  plugins: [],
};
