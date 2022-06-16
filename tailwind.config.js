/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        background: '#7280EE',
        input: '#E8E0E3',
        terms: '#005FA4',
        button: '#394FFE',
        hoverButton: '#011CFF',
        hoverTerms: '#093CA3'
      },
      screens: {
        'phone': {'min': '375px', 'max': '480px'},
        'tablet': {'min': '481px', 'max': '768px'},
        'note': {'min': '769px', 'max': '1279px'}
      }
    },
  },
  plugins: [],
}
