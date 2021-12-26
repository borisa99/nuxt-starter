export default function ({ $auth, $errorHandler, $toast }) {
  $auth.onError((error, name, endpoint) => {
    if (name.method !== 'request') {
      $errorHandler(error.response.data.code)
    }
  })
}
