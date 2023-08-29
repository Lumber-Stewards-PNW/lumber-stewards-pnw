/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeWhite: '#FFFFFF',
        themeGray: '#F5F5F5',
        themeTan: '#FFF1D0',
        themeDarkGreen: '#104544',
        themePlaceholder: '#D9D9D9',
        themeOrange: '#C36140',
        themeGreen: '#64B4A1',
        themeGold: '#C39F59',
        themeBlue: '#323778',
        themeNavyBlue: '#303464',
      },
    },
  },
  plugins: [],
}
