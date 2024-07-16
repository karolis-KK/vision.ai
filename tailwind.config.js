/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans'],
        inter: ['Inter']
      },
      spacing: {
        '100': '110rem',
        '99': '45rem',
        '90': '55rem',
        '89': '21rem',
        '91': '28rem',
        '92': '49.8rem',
        '94': '36.2rem',
        '95': '10rem',
        '101': '50rem',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwindcss-animated')
  ],
}

