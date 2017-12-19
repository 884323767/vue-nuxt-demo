module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-nuxt-demo',
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vue-nuxt-demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: ['~plugins/i18n.js'],

  /*
  ** Router config
  */
  // router: {
  //   middleware: 'test'
  // },
  /*
  ** Global CSS
  */
  css: [
    '~assets/resetCss.css'
    // { src: '~assets/resetCss.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */

  loading: { color: '#3B8070' },
  router: {
    middleware: 'i18n'
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vue-i18n'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
  /*
  ** Environement variables
  */
  // env: {
  //   AUTH0_CLIENT_ID: '',
  //   AUTH0_CLIENT_DOMAIN: ''
  // }
}
