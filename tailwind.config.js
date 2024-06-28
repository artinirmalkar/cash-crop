/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#18191b',
        secondaryColor: '#fff',
        thirsaryColor: '#1e2022',
        forthColor:'#f3f3f3',
        buttonColor:'#0f3d64',
        hoverColor:'#145388',

        textColorLight:'#8e8e8e',
        errorColor:"#c43d4b",

        darkPrimary: '#18191b',
        darkSecondary: '#8f8f8f',
        darkThirsary:'#1e2022',
        darkForth:'#313131',
        darkInput : '#232223'
      },
    },
  },
  plugins: [],
}
