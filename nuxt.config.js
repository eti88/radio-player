require("dotenv").config();
import colors from "vuetify/es5/util/colors";

export default {
  env: {
    IPFS: process.env.IPFS || 'http://127.0.0.1:8080/ipfs/'
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
      return titleChunk ? `${titleChunk} | BitSong` : "BitSong";
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
      content: "BitSong, blockchain music streaming"
    }
    ],
    script: [],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.png"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;800&display=swap"
    },
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
  buildModules: ["@nuxtjs/vuetify"],
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
    ]
  ],
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
