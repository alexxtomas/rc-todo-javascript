import { DIALOG_VARIANTS_ENUM } from '@components/Dialog/Dialog'
import { PRIORITIES_SELECT_OPTIONS } from '@utils/constants'

export const getConfirmDialogProps = ({ spaceName, numberOfTasks }) => ({
  variant: DIALOG_VARIANTS_ENUM.CONFIRMATION,
  dialogAttributes: 'data-function="removeDialog"',
  text: `Are you sure you want to remove the space ${spaceName} with ${numberOfTasks} tasks?`,
  firstButton: {
    attributes: 'data-function="removeSpaceElement"',
    text: 'Yes'
  },
  secondButton: {
    attributes: 'data-function="closeDialog"',
    text: 'No'
  }
})

export const getFormDialogProps = () => ({
  variant: DIALOG_VARIANTS_ENUM.FORM,
  dialogAttributes: 'id="spaceDialog"',
  formAttributes: 'id="spaceDialogForm"',
  input: {
    attributes: 'id="spaceName" name="spaceName" type="text"',
    label: 'for="spaceName"'
  },
  select: {
    label: 'spacePriority',
    attributes: 'id="spacePriority" name="spacePriority"',
    options: PRIORITIES_SELECT_OPTIONS
  },
  firstButton: {
    attributes: 'type="submit" id="saveButton" value="default"',
    text: 'Save'
  },
  secondButton: {
    attributes:
      'type="reset" id="cancelButton" value="cancel" formmethod="dialog"',
    text: 'Close'
  }
})
