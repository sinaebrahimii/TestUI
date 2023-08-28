/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#212e49",
        background: "#ffffff",
        primary: {
          400: "#A1CCD1",
          500: "#80bcd0",
          600: "#5292a7",
        },
        secondary: "#6bccb4",
        accent: "#735eb0",
      },
    },
  },
  plugins: [],
};
