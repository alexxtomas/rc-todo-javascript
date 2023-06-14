import Dialog from '@components/Dialog'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import './style.css'

const RemoveButton = ({ buttonAttributes, confirmDialogProps }) => {
  return `
  <button class="remove-button" ${buttonAttributes}>${Icon({ variant: ICON_VARIANTS_ENUM.TRASH, props: 'width=10px stroke-width="1" fill="none"' })}</button>
  ${Dialog(confirmDialogProps)}
  `
}

export default RemoveButton
