import i18n from './config/i18'

export default {
  target: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  head: {
    title: 'Boro digital | UX, Web & Product design agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },

  components: true,

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/svg',
    '@nuxtjs/eslint-module',
    'nuxt-compress',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        vueI18nLoader: true,
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'Eng'
          },
          {
            code: 'ru',
            name: 'Рус'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  build: {
    loaders: {
      scss: { sourceMap: false }
    },
    postcss: [
      require('autoprefixer')({}),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }),
      require('postcss-sort-media-queries')({
        sort: require('sort-css-media-queries')
      })
    ]
  },

  image: {
    staticFilename: '[name]-[hash][ext]'
  },
  pwa: {
    icon: {
      /* icon options */
    }
  },
  plugins: [
    { src: '~/plugins/client.js', mode: 'client' }
  ],
  publicRuntimeConfig: {
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://boro.digital/' : 'http://localhost:3000/',
    IS_DEV: process.env.IS_DEVELOP === 'true'
  }
}
