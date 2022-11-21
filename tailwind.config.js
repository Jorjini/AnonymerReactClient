/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#000000'
        },
        white: {
          100: '#FFFFFF'
        },
        gray: {
          100: '#666666',
          200: '#f5f5f5'
        },
        green: {
          100: '#02BC49'
        }
      }
    },
  },
  plugins: [],
}