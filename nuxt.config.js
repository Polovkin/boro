import i18n from './config/i18'

export default {
  target: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  /* serverMiddleware: {
    "/_ipx": "~/server/middleware/ipx.js",
  }, */
  head: {
    title: 'Boro digital | UX, Web & Product design agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },

  styleResources: {
    scss: '@/assets/scss/core/_global.scss'
  },

  components: true,

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/svg',
    // '@nuxtjs/eslint-module',
    'nuxt-compress',
    '@nuxtjs/device',
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
    '@nuxt/image',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  build: {
    loaders: {
      scss: { sourceMap: false }
    },
    postcss: {
      preset: {
        autoprefixer: {}
      },
      plugins: {
        cssnano: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        },
        'postcss-sort-media-queries': {
          sort: require('sort-css-media-queries')
        }
      }
    }
  },

  image: {
    staticFilename: '[name]-[hash][ext]'
    // domains: [process.env.API_URL],
  },
  pwa: {
    icon: {
      /* icon options */
    }
  },

  plugins: [
    { src: '~/plugins/client.js', mode: 'client' },
    '~/plugins/custom-flag.js',
    '~/plugins/filters/date.js'
  ],
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.URL_SERVER
    },
    URL_SERVER: process.env.URL_SERVER,
    IS_DEV: process.env.IS_DEVELOP === 'true'
  }
}
