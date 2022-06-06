module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#EBEBEB',
        reg: '#333333',
      },
      boxShadow: {
        head: '0px 6px 18px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
