import general from './general'
import errors from './errors'
import register from './register'
import user from './user'
export default {
  welcome: 'Welcome to the app',
  ...general,
  ...errors,
  ...register,
  ...user,
}
