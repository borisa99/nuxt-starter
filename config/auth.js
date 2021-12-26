export default {
  plugins: ['~/plugins/auth.js'],
  localStorage: false,
  redirect: {
    login: '/login',
    logout: '/login',
    callback: '/',
    home: '/dashboard',
  },
  strategies: {
    local: {
      scheme: 'refresh',
      token: {
        property: 'token',
        global: true,
        type: 'Bearer',
        maxAge: 60 * 60 * 24,
      },
      refreshToken: {
        property: 'refresh_token',
        data: 'refresh_token',
        maxAge: 60 * 60 * 24 * 20,
      },
      user: {
        property: false,
        // autoFetch: true
      },
      endpoints: {
        login: { url: '/auth/login', method: 'post' },
        user: { url: '/user/me', method: 'post' },
        refresh: { url: '/auth/refresh', method: 'post' },
        logout: false,
      },
    },
  },
  scopeKey: 'roles',
}
