import { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { FORM_FIELDS_VARIANTS_ENUM } from '@components/Dialog/components/FormDialog/components/FormField'
import { PRIORITIES_SELECT_OPTIONS } from '@utils/constants'

export const getConfirmDialogProps = ({ spaceName, numberOfTasks }) => ({
  variant: DIALOG_VARIANTS_ENUM.CONFIRMATION,
  dialogAttributes: 'data-function="remove-dialog"',
  text: `Are you sure you want to remove the space ${spaceName} with ${numberOfTasks} tasks?`,
  firstButton: {
    attributes: 'data-function="remove-space-element"',
    text: 'Yes'
  },
  secondButton: {
    attributes: 'data-function="close-remove-space-element-dialog"',
    text: 'No'
  }
})

export const getFormDialogProps = () => ({
  variant: DIALOG_VARIANTS_ENUM.FORM,
  dialogAttributes: 'data-function="edit-dialog"',
  formAttributes: 'data-function="submit-data"',
  elements: [
    {
      variant: FORM_FIELDS_VARIANTS_ENUM.INPUT,
      attributes: 'id="space-name" name="spaceName" type="text"',
      label: {
        attributes: 'for="space-name"',
        text: 'Space name'
      }
    },
    {
      variant: FORM_FIELDS_VARIANTS_ENUM.SELECT,
      label: {
        attributes: 'for="space-priority"',
        text: 'Space priority'
      },
      attributes: 'id="space-priority" name="spacePriority"',
      options: PRIORITIES_SELECT_OPTIONS
    }
  ],
  firstButton: {
    attributes: 'type="submit" value="default"',
    text: 'Save'
  },
  secondButton: {
    attributes:
      'type="reset" data-function="close-edit-space-element-dialog" value="cancel" formmethod="dialog"',
    text: 'Close'
  }
})
