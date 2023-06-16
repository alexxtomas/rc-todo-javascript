import { BUTTON_VARIANTS_ENUM } from '@components/Button'
import { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { FORM_FIELDS_VARIANTS_ENUM } from '@components/Dialog/components/FormDialog/components/FormField'
import { PRIORITIES_SELECT_OPTIONS } from '@utils/constants'

export const getFormDialogProps = () => ({
  variant: DIALOG_VARIANTS_ENUM.FORM,
  dialogAttributes: 'data-function="show-edit-space-element-dialog"',
  formAttributes: 'data-function="edit-space-element-submit-data"',
  elements: [
    {
      variant: FORM_FIELDS_VARIANTS_ENUM.INPUT,
      attributes: 'id="space-name" name="spaceName" type="text"',
      label: {
        attributes: 'for="space-name"',
        text: 'Name'
      }
    },
    {
      variant: FORM_FIELDS_VARIANTS_ENUM.SELECT,
      label: {
        attributes: 'for="space-priority"',
        text: 'Priority'
      },
      attributes: 'id="space-priority" name="spacePriority"',
      options: PRIORITIES_SELECT_OPTIONS
    }
  ],
  firstButton: {
    attributes: 'type="submit" value="default"',
    text: 'Save'
  },
  closeButton: {
    attributes:
      'data-function="close-edit-space-element-dialog"',
    text: 'Close'
  }
})

export const getRemoveButtonProps = ({ spaceName, numberOfTasks, id }) => ({
  variant: BUTTON_VARIANTS_ENUM.REMOVE,
  buttonAttributes: `data-function="show-remove-space-element-dialog" data-id=${id}`,
  confirmDialogProps: {
    variant: DIALOG_VARIANTS_ENUM.CONFIRMATION,
    dialogAttributes: 'data-function="show-remove-space-element-dialog"',
    text: `Are you sure you want to remove the space "${spaceName}" with ${numberOfTasks} tasks?`,
    firstButton: {
      attributes: 'data-function="remove-space-element-button"',
      text: 'Yes'
    },
    secondButton: {
      attributes: 'data-function="close-remove-space-element-dialog-button"',
      text: 'No'
    }
  }
})
