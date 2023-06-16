import ArrowDownCircleIcon from './components/ArrowDownCircleIcon'
import ChevronRightIcon from './components/ChevronRightIcon'
import EditIcon from './components/EditIcon'
import FlagIcon from './components/FlagIcon'
import PlusIcon from './components/PlusIcon'
import TrashIcon from './components/TrashIcon'
import XCirlceIcon from './components/XCircleIcon'
import XMarkIcon from './components/XMarkIcon'
const ICON_VARIANTS = {
  FLAG: FlagIcon,
  TRASH: TrashIcon,
  EDIT: EditIcon,
  ARROW_DOWN_CIRCLE: ArrowDownCircleIcon,
  CHEVRON_RIGHT: ChevronRightIcon,
  XCIRCLE: XCirlceIcon,
  PLUS: PlusIcon,
  XMark: XMarkIcon
}

export const ICON_VARIANTS_ENUM = {
  FLAG: 'FLAG',
  TRASH: 'TRASH',
  EDIT: 'EDIT',
  ARROW_DOWN_CIRCLE: 'ARROW_DOWN_CIRCLE',
  CHEVRON_RIGHT: 'CHEVRON_RIGHT',
  XCIRCLE: 'XCIRCLE',
  PLUS: 'PLUS',
  XMark: 'XMark'
}

const Icon = ({ variant, props }) => {
  return ICON_VARIANTS[variant](props) || null
}

export default Icon
