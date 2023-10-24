/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}" ,   "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                'primary':'#124C66',
                'secondary': '#E3425C',
                // 'third' : '#EFF3F4',
                // 'desc' : '#616161',
                'font' : '#124C66'
              },
        },
        container: {
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '4rem',
              '2xl': '6rem',
            },
          },
        fontFamily:{
            'urbanist' : ['Urbanist'],
            'signika' : ['Signika'],
            'bebasNeue' : ['Bebas Neue']
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
};
