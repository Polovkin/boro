import i18n from './config/i18'

export default {

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  head: {
    title: 'NuxtTemplate',
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
            code: 'ua',
            name: 'Укр'
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
      scss: { sourceMap: false },
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
    // Options
  },
  plugins: [
    { src: '~/plugins/client.js', mode: 'client' },
  ]

}
