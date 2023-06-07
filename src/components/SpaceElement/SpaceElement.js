import NormalSpaceElement from './components/NormalSpaceElement'
import FunctionalSpaceElement from './components/FunctionalSpaceElement'

const SPACE_ELEMENT_VARIANTS = {
  NORMAL: NormalSpaceElement,
  FUNCTIONAL: FunctionalSpaceElement
}

export const SPACE_ELEMENT_VARIANTS_ENUM = {
  NORMAL: 'NORMAL',
  FUNCTIONAL: 'FUNCTIONAL'
}

const SpaceElement = ({ variant, ...props }) => {
  return SPACE_ELEMENT_VARIANTS[variant](props)
}

export default SpaceElement
