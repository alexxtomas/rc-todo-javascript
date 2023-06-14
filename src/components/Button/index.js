import AddButton from './components/AddButton'
import DropdownButton from './components/DropdownButton'
import RemoveButton from './components/RemoveElementButton'

const BUTTON_VARIANTS = {
  DROP_DOWN: DropdownButton,
  REMOVE: RemoveButton,
  ADD: AddButton
}

export const BUTTON_VARIANTS_ENUM = {
  DROP_DOWN: 'DROP_DOWN',
  REMOVE: 'REMOVE',
  ADD: 'ADD'
}

const Button = ({ variant, ...props }) => {
  return BUTTON_VARIANTS[variant](props)
}

export default Button
