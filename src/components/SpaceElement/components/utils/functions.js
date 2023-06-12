import { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { FORM_FIELDS_VARIANTS_ENUM } from '@components/Dialog/components/FormDialog/components/FormField'
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
    attributes: 'data-function="closeRemoveSpaceElementDialog"',
    text: 'No'
  }
})

export const getFormDialogProps = () => ({
  variant: DIALOG_VARIANTS_ENUM.FORM,
  dialogAttributes: 'data-function="editDialog"',
  formAttributes: 'data-function="submitData"',
  elements: [
    {
      variant: FORM_FIELDS_VARIANTS_ENUM.INPUT,
      attributes: 'id="spaceName" name="spaceName" type="text"',
      label: {
        attributes: 'for="spaceName"',
        text: 'Space name'
      }
    },
    {
      variant: FORM_FIELDS_VARIANTS_ENUM.SELECT,
      label: {
        attributes: 'for="spacePriority"',
        text: 'Space priority'
      },
      attributes: 'id="spacePriority" name="spacePriority"',
      options: PRIORITIES_SELECT_OPTIONS
    }
  ],
  firstButton: {
    attributes: 'type="submit" value="default"',
    text: 'Save'
  },
  secondButton: {
    attributes:
      'type="reset" data-function="closeEditSpaceElementDialog" value="cancel" formmethod="dialog"',
    text: 'Close'
  }
})
