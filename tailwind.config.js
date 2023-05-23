/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#FAF9FF',
        navigation: '#FFFFFF',
        buttonColor: '#8083A3',
        logoColor: '#6B59CC',
        borderColor: '#ECEEF5',
        searchContact: '#8083A3',
        sidebarH1: '#1A1C1D',
        searchIcon: '#1D1D24',
        dotColor1: '#28C345',
        dotColor2: '#F6933E',
        dotColor3: '#FF808B',
      },
    },
  },
  plugins: [],
}