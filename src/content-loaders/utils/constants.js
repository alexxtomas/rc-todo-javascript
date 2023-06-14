import { BUTTON_VARIANTS_ENUM } from '@components/Button'
import { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { FORM_FIELDS_VARIANTS_ENUM } from '@components/Dialog/components/FormDialog/components/FormField'
import { PRIORITIES_SELECT_OPTIONS } from '@utils/constants'

export const HOME_CONTROLLER_ADD_BUTTON_PROPS = {
  variant: BUTTON_VARIANTS_ENUM.ADD,
  buttonAttributes: 'id="new-space"',
  formDialogProps: {
    variant: DIALOG_VARIANTS_ENUM.FORM,
    dialogAttributes: 'id="new-space-dialog"',
    formAttributes: 'id="new-space-form"',
    elements: [
      {
        variant: FORM_FIELDS_VARIANTS_ENUM.INPUT,
        attributes: 'id="new-space-name" name="newSpaceName" type="text"',
        label: {
          attributes: 'for="new-space-name"',
          text: 'Space name'
        }
      },
      {
        variant: FORM_FIELDS_VARIANTS_ENUM.SELECT,
        label: {
          attributes: 'for="new-space-priority"',
          text: 'Space priority'
        },
        attributes: 'id="new-space-priority" name="newSpacePriority"',
        options: PRIORITIES_SELECT_OPTIONS
      }
    ],
    firstButton: {
      attributes: 'type="submit" value="default"',
      text: 'Save'
    },
    secondButton: {
      attributes:
         'type="reset" id="close-new-space-dialog-button" value="cancel" formmethod="dialog"',
      text: 'Close'
    }
  }
}

export const DETAIL_CONTROLLER_ADD_BUTTON_PROPS = {
  variant: BUTTON_VARIANTS_ENUM.ADD,
  buttonAttributes: 'id="new-task"',
  formDialogProps: {
    variant: DIALOG_VARIANTS_ENUM.FORM,
    dialogAttributes: 'id="new-task-dialog"',
    formAttributes: 'id="new-task-form"',
    elements: [
      {
        variant: FORM_FIELDS_VARIANTS_ENUM.INPUT,
        attributes: 'id="new-task-name" name="newTaskName" type="text"',
        label: {
          attributes: 'for="new-task-name"',
          text: 'Task name'
        }
      }
    ],
    firstButton: {
      attributes: 'type="submit" value="default"',
      text: 'Save'
    },
    secondButton: {
      attributes:
       'type="reset" id="cancel-new-task-button" value="cancel" formmethod="dialog"',
      text: 'Close'
    }
  }
}
