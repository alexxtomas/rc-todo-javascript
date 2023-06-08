import ConfirmationDialog from './components/ConfirmationDialog'
import FormDialog from './components/FormDialog'

const DIALOG_VARIANTS = {
  FORM: FormDialog,
  CONFIRMATION: ConfirmationDialog
}

export const DIALOG_VARIANTS_ENUM = {
  FORM: 'FORM',
  CONFIRMATION: 'CONFIRMATION'
}

const Dialog = ({ variant, ...props }) => {
  return DIALOG_VARIANTS[variant](props)
}

export default Dialog
