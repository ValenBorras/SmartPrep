/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          protest: ['Protest Strike', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          smart: {
            orange: "#ef3e00",
            black: "#121212",
          },
        },
      },
    },
    plugins: [],
  };