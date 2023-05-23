/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#FAF9FF',
        header: '#1E1E1E',
        navigation: '#FFFFFF',
        buttonColor: '#8083A3',
        logoColor: '#6B59CC',
      },
    },
  },
  plugins: [],
}