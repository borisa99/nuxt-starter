export default {
  // SET IN PRODUCTION
  // baseUrl: 'https://my-nuxt-app.com'
  /* module options */
  strategy: 'no_prefix',
  locales: [
    { code: 'en', iso: 'en-US', file: 'en/en-US.js' },
    { code: 'sr', iso: 'sr-BA', file: 'sr/sr-BA.js' },
  ],
  lazy: true,
  langDir: 'lang/',
  defaultLocale: 'en',
}
