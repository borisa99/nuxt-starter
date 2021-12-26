export default ({ $toast, i18n }, inject) => {
  inject('errorHandler', (code) => {
    if (i18n.te(code)) {
      $toast.error(i18n.t(code))
    }
  })
}
