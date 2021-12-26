import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import customTheme from '../custom-theme'

export default {
  extendTheme: customTheme,
  config: {
    autoImport: true,
  },
  icons: {
    iconPack: 'fa',
    iconSet: {
      faEye,
      faEyeSlash,
      faUser,
    },
  },
}
