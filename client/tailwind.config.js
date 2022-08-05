module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    screens: {
      'sm': {'max': '660px'},
      'lm': {'min': '661px'},
      'sm-gral': {'max': '430px'},
      'lg-gral': {'min': '430px','max':'650px'},
      'xl-gral': {'min': '650px'}
      // 'xl-grall': {'min': '650px','max':'1536px'}
    },
    extend: {},
    fontFamily: {
      ptsans: ['PT Sans', 'sans-serif'],
      cursive: ['Cookie', "cursive"],
      akshar: ['Akshar', 'sans-serif']
    },
    fontSize: {
      'xxs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [
  ],
  darkMode: 'class',
}
