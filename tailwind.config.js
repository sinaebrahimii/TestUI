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
        Text: "#212e49",
        Background: "#ffffff",
        Primary: "#80bcd0",
        Secondary: "#6bccb4",
        Accent: "#735eb0",
      },
    },
  },
  plugins: [],
};
