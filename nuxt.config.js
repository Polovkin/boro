import i18n from './config/i18'
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'NuxtTemplate',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [],
    styleResources: {
        scss: '@/assets/scss/core/_global.scss'
    },
    plugins: [],

    components: true,

    buildModules: [
        '@nuxtjs/svg',
        [
            'nuxt-i18n',
            {
                vueI18nLoader: true,
                defaultLocale: 'fr',
                locales: [
                    {
                        code: 'en',
                        name: 'English'
                    },
                    {
                        code: 'ru',
                        name: 'Русский'
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

    axios: {},
    i18n: {
        locales: [
            {code: 'en', iso: 'en-US', file: 'en.json'},
            {code: 'ru', iso: 'ru-RU', file: 'ru.json'},
            {code: 'ua', iso: 'ua-UA', file: 'ua.json'}
        ],
        defaultLocale: 'ru',
        vueI18n: {
            fallbackLocale: 'ru',
        }
    },
    build: {
        // transpile: ['vuetify'] //IE11
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
    }
}
