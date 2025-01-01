/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EDF1F6",
        card: "#FFFFFF",
        dark: "#18181B",
        light: "#64748B",
        line: "#E3E8EF",
      },
      maxWidth: {
        1080: "1080px",
      },
      height: {
        344: "344px",
      },
      width: {
        370: "370px",
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', "system-ui"],
      },
    },
  },
  plugins: [],
};
