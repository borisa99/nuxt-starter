import general from './general'
import errors from './errors'
import register from './register'
import user from './user'
export default {
  welcome: 'Pomaze bog',
  ...general,
  ...errors,
  ...register,
  ...user,
}
