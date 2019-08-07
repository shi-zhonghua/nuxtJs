import pkg from './package'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */

    // loading: {
    //   color: 'blue',
    //   height: '2px'
    // },
    loading: '~/components/loading.vue',

    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'assets/css/main.css',
        'vue-photo-preview/dist/skin.css',
        { src: "swiper/dist/css/swiper.css" }
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // '@/plugins/element-ui'
        { src: '~/plugins/element-ui', ssr: false },
        { src: '~/plugins/lodash.js' },
        { src: "~/plugins/vue-swiper.js", ssr: false },
        { src: "~/plugins/photo.js", ssr: false },


    ],

    /*
     ** Nuxt.js modules
     */
    modules: [

    ],

    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        vendor: ['axios']

        /*
         ** You can extend webpack config here
         */
        // extend(config, ctx) {}
    }
}