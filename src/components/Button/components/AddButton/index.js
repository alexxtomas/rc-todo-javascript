import Dialog from '@components/Dialog'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import './style.css'

const AddButton = ({ buttonAttributes, formDialogProps }) => {
  return ` <button class="page-header-button" ${buttonAttributes}>${Icon({
    variant: ICON_VARIANTS_ENUM.PLUS,
    props: 'width=24px height=24px stroke-width="1.2" fill="none"'
  })}</button>
    ${Dialog(formDialogProps)}
  `
}

export default AddButton
