const title = 'Philosophia'
const desc = '月波の写真ポートフォリオです。'
const url = 'https://www.philosophia000.xyz/'
const card = 'https://manami-sato.github.io/philosophia-img/img/img_32_06.jpg'

require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Philosophia - 月波’s Photography Portfolio',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: desc },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: desc },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: desc },
      { hid: 'og:image', property: 'og:image', content: card },
      { name: 'twitter:card', content: 'summary' }, // twitterの画像サイズ
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-microcms-module',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // microcms: {
  //   options: {
  //     serviceDomain: process.env.MICROCMS_API_URL || '', // サービスID（サブドメイン部分）
  //     apiKey: process.env.MICROCMS_API_KEY || '', // サービス固有のAPIキー
  //   },
  //   // ↓SSR処理をするならこっちにする必要がある
  //   // mode: 'server',
  //   // mode: process.env.MICROCMS_API_KEY || '' === 'production' ? 'server' : 'all',
  //   mode: 'all',
  // },

  microcms: {
    options: {
      serviceDomain: process.env.MICROCMS_API_URL || '',
      apiKey: process.env.MICROCMS_API_KEY || '',
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },
}
