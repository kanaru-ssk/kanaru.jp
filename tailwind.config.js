import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: { sans: ["HelveticaNeue", ...fontFamily.sans] },
      height: { svw: "100svw", svh: "100svh" },
    },
  },
  plugins: [],
};
