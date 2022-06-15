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
    },
  },
  plugins: [],
}
