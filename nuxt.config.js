export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./assets/iransans.css",
    "./assets/tailwind.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/composition-api/module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    ['nuxt-twa-module', {
      /* module options */
      defaultUrl: 'https://pooriavakili.ir/',
      hostName: 'pooriavakili.ir/',
      applicationId: 'com.resume',
      launcherName: 'resume',
      versionCode: 1,
      versionName: '1.0',
      statusBarColor: '#EB384D',
      // The sha256Fingerprints by is an array with one SHA-256 key string.
      // But if you have multiple you can add them to the array. More information about the website asociation:
      // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
      sha256Fingerprints: ['C9:01:6D:BF:CE:EF:A1:10:83:5C:30:EE:2A:5F:6E:34:0C:F5:30:80:B3:2D:E9:95:55:3E:36:0A:86:8A:D6:42'],
      /* optional */
      /* overwrite default location for icon */
      iconPath: '/static/logoTwo.png',
      /* Overwrite folder where to put .wellknown */
      distFolder: '.nuxt/dist/client'
    }],


  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'fa',
        iso: 'fa-IR',
        name: 'Farsi'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        fa: require('./locales/fa.json')
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en', name: 'resume',
      short_name: 'resume',
      description: "resumepooriavakili"
    }, icon: {
      source: 'logoTwo.png',
      fileName: 'logoTwo.png',
      sizes: [64, 128, 256, 384, 512]
    },
    workbox: {

    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
