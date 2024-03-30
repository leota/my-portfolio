/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
      },
      spacing: {
        "100-vh": "100vh",
        "200-vh": "200vh",
        "300-vh": "300vh",
        "400-vh": "400vh",
        "500-vh": "500vh",
      },
    },
  },
  plugins: [],
};
