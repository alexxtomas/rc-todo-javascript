import { DIALOG_VARIANTS_ENUM } from '@components/Dialog'

export const getConfirmDialogProps = ({ taskName }) => ({
  variant: DIALOG_VARIANTS_ENUM.CONFIRMATION,
  dialogAttributes: 'data-function="remove-task-element-dialog"',
  text: `Are you sure you want to delete the "${taskName}" task ?`,
  firstButton: {
    attributes: 'data-function="remove-task-element-button"',
    text: 'Yes'
  },
  secondButton: {
    attributes: 'data-function="close-remove-task-element-dialog-button"',
    text: 'No'
  }
})
