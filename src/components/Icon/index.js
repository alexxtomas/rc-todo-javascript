import EditIcon from './components/EditIcon'
import FlagIcon from './components/FlagIcon'
import TrashIcon from './components/TrashIcon'
const ICON_VARIANTS = {
  FLAG: FlagIcon,
  TRASH: TrashIcon,
  EDIT: EditIcon
}

export const ICON_VARIANTS_ENUM = {
  FLAG: 'FLAG',
  TRASH: 'TRASH',
  EDIT: 'EDIT'
}

const Icon = ({ variant, props }) => {
  return ICON_VARIANTS[variant](props) || null
}

export default Icon
