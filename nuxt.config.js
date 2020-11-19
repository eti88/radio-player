import pkg from './package.json'

require("dotenv").config();
import colors from "vuetify/es5/util/colors";

export default {
  env: {
    IPFS: process.env.IPFS || 'http://127.0.0.1:8080/ipfs/',
    VERSION: pkg.version
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} | BitSong` : "BitSong Blockchain Music Player";
    },
    // title: 'BitSong',
    meta: [{
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      hid: "description",
      name: "description",
      content: `BitSong Blockchain Music Player allows you to interact with media files.`
    }
    ],
    script: [],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.png"
    },
    // {
    //   rel: "stylesheet",
    //   href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;800&display=swap"
    // },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
      // }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{
    src: "~/plugins/app.js",
    ssr: false
  }, {
    src: "~/plugins/seo-gtag.js",
    ssr: false
  }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/pwa",],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/dotenv",
    [
      "nuxt-vuex-localstorage",
      {
        localStorage: ["app"],
        sessionStorage: []
      }
    ],
    "@nuxtjs/pwa"
  ],

  pwa: {
    manifest: {
      name: process.env.SEO_TITLE ? process.env.SEO_TITLE : `BitSong Blockchain Music Player`,
      short_name: process.env.SHORT_TITLE ? process.env.SHORT_TITLE : `BitSong Blockchain Music Player`,
      theme_color: "#000000",
      description: process.env.SEO_DESCRIPTION ? process.env.SEO_DESCRIPTION : `BitSong Blockchain Music Player allows you to interact with media files.`,
      background_color: "#000000",
      display: "standalone",
      start_url: "/",
      lang: 'en'
    },
    workbox: {
      // dev: process.env.WORKBOX_DEBUG,
      // enabled: true,
      config: { debug: process.env.WORKBOX_DEBUG },

      // importScripts: [
      //   '/offline-sw.js',
      // ],

      cleanupOutdatedCaches: true,

      /*preCaching: [
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700;800&display=swap'
        'https://fonts.googleapis.com/css?family=Material+Icons',
      ],*/

      cacheNames: {
        suffix: pkg.version
      },
      cacheOptions: {
        cacheId: pkg.name,
        revision: pkg.version
      },

      // Runtime caching caches pages as we browse
      runtimeCaching: [
        {
          urlPattern: '/.*',
          handler: 'networkFirst',
          method: 'GET',
          strategyOptions: {
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 1, // 1 day
              purgeOnQuotaError: true,
            }
          },
        },

        // Cache fonts
        {
          urlPattern: 'https://fonts.googleapis.com',
          handler: 'NetworkFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'assets',
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 1, // ( 1 day ) 1 year
              purgeOnQuotaError: true,
            }
          },
        },
        {
          urlPattern: 'https://fonts.gstatic.com',
          handler: 'StaleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheName: 'assets',
            /*cacheableResponse: {
              statuses: [ 200 ],
            },*/
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 1, // ( 1 day ) 1 year
              purgeOnQuotaError: true,
            }
          },
        },

        // Cache Amazon S3
        {
          urlPattern: 'https://s3.amazonaws.com',
          handler: 'StaleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheName: 'assets',
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 1, // ( 1 day ) 1 year
              purgeOnQuotaError: true,
            }
          },
        },

        // Cache IPFS
        {
          urlPattern: process.env.IPFS,
          handler: 'StaleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheName: 'ipfs',
            cacheExpiration: {
              maxEntries: 1000,
              maxAgeSeconds: 60 * 60 * 24 * 1, // ( 1 day ) 1 year
              purgeOnQuotaError: true,
            }
          },
        },

        // Cache basic API responses
        {
          urlPattern: process.env.LCD,
          handler: 'NetworkFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'bitsong-lcd',
          },
        },
      ],

      // Automatically cache for offline usage
      offlineAssets: [
        // Route Locations
        /*
        '/',
        '/bank',
        '/staking',
        */

        // Assets
        '/bitsong_logo_circle_red.svg',
        '/bitsong_logo_red.svg',
        'https://fonts.googleapis.com/css?family=Material+Icons',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
      ],
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    "/ipfs/": {
      target: process.env.IPFS,
      changeOrigin: true
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: false,
    theme: {
      dark: true,
      themes: {
        dark: {
          //primary: colors.red.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // analyze: true,
    // extractCSS: true,
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
      // // Optimisation
      // if (ctx && ctx.isClient) {
      //   config.optimization.splitChunks.maxSize = 100000
      // }

      // // The below solution is taken from
      // // https://github.com/visualfanatic/vue-svg-loader/issues/75#issuecomment-468342586
      // // This sollution allows optional inlining of the SVG markup with vue-svg-loader with an
      // // ?inline query. Otherwise, normal url-loader behaviour occurs
      // const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      // // Overwrite the test regex (remove .svg file extension)
      // svgRule.test = /\.(png|jpe?g|gif|webp)$/i

      // config.module.rules.push({
      //   test: /\.(svg|svgz)(\?.+)?$/,
      //   oneOf: [
      //     {
      //       loader: 'vue-svg-loader',
      //       resourceQuery: /inline/
      //     },
      //     // Add original url-loader config to resolve every other svg without inline query
      //     svgRule.use[0]
      //   ]
      // })
    }
  }
};
