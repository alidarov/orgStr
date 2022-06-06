export default {
  head: {
    title: 'orgStr',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
      },
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js',
      },
    ],
  },

  css: ['./assets/css/main.css', './assets/css/fonts.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/postcss8'],

  modules: [],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
