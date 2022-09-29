/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      bgWhite: '#ffffff',
      primary: '#08C177',
      'primary-light': '#D7FFEF',
      secondary: '#101F30',
      'secondary-light': '#00AEEF',
      'bg-light': '#A3A3A3',
      'bg-dark': '#454545',
      'white-text': '#F5F5F5'
    },
    extend: { padding: { 'fluid-video': '56.25%' } }
  },
  plugins: []
}
