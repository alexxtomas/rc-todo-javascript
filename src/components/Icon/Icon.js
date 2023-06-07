import FlagIcon from './components/FlagIcon'
const ICON_VARIANTS = {
  FLAG: FlagIcon
}

export const ICON_VARIANTS_ENUM = {
  EDIT: 'EDIT',
  FLAG: 'FLAG',
  FOLDER: 'FOLDER'
}

const Icon = ({ variant, props }) => {
  return ICON_VARIANTS[variant](props) || null
}

export default Icon
