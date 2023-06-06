import EditIcon from './components/EditIcon'
import FlagIcon from './components/FlagIcon'
const ICON_VARIANTS = {
  EDIT: EditIcon,
  FLAG: FlagIcon
}

export const ICON_VARIANTS_ENUM = {
  EDIT: 'EDIT',
  FLAG: 'FLAG'
}

const Icon = ({ variant }) => {
  return ICON_VARIANTS[variant]() || null
}

export default Icon
