/** @type {import('tailwindcss').Config} */

const { fontFamily } = require(`tailwindcss/defaultTheme`)
const colors = require('tailwindcss/colors')

module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...fontFamily.sans],
        mono: ['Space Mono', ...fontFamily.mono]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.current'),
            },
          },
        },
      }),
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: colors.slate,
      primary: colors.indigo,
      secondary: colors.rose,
      tertiary: colors.emerald,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
