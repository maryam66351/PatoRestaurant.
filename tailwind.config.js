/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      poppinss: ['poppinss', 'sans-serif'],
        montserratlight: ['Montserratlight', 'sans-serif'],
        montserratmedium: ['Montserratmedium', 'sans-serif'],
        montserratregular: ['Montserratregular', 'sans-serif'],
        montserratsm: ['Montserratsm', 'sans-serif'],
        courgettereg: ['Courgettereg', 'cursive'],
    },
  },
  plugins: [],
}