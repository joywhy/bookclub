/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        anchangho: ['KccAnchangho', 'sans-serif'], // 원하는 이름 지정
      },
      color: {
        mainGreen: '#1ca673',
        deepGreen: '#014029',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
