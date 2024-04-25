/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#e3dff2',
        main: '#bd52eb',
        mainAccent: '#a81be4',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        '70/30': "70% 28%",
      },
    },
  },
  plugins: [],
};
