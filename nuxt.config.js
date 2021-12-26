import toast from './config/toast'
import auth from './config/auth'
import i18n from './config/i18n'
import chakra from './config/chakra'
import head from './config/head'
import modules from './config/modules'

export default {
  head,
  loading: '~/components/LoadingBar.vue',
  router: {
    middleware: ['auth'],
  },
  css: [],
  plugins: [
    { src: '~/plugins/vee-validate' },
    { src: '~/plugins/error-handler' },
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules,
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
  axios: {
    baseURL: process.env.SERVICES_ENDPOINT,
  },
  auth,
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo/config.js',
    },
  },
  chakra,
  toast,
  i18n,
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
}
