/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        self: ["serif"],
      },
      height: { svh: "100svh" },
      minHeight: { svh: "100svh" },
    },
  },
  plugins: [],
};

export default config;
