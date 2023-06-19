import { BUTTON_VARIANTS_ENUM } from '@components/Button'
import { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { INPUT_VARIANTS_ENUM } from '@components/Input'
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
        variant: INPUT_VARIANTS_ENUM.TEXT,
        attributes: 'id="new-space-name" name="newSpaceName" type="text"',
        label: {
          attributes: 'for="new-space-name"',
          text: 'Name'
        }
      },
      {
        variant: INPUT_VARIANTS_ENUM.SELECT,
        label: {
          attributes: 'for="new-space-priority"',
          text: 'Priority'
        },
        attributes: 'id="new-space-priority" name="newSpacePriority"',
        options: PRIORITIES_SELECT_OPTIONS
      }
    ],
    firstButton: {
      attributes: 'type="submit" value="default"',
      text: 'Save'
    },
    closeButton: {
      attributes: ' id="close-new-space-dialog-button""',
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
        variant: INPUT_VARIANTS_ENUM.TEXT,
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
    closeButton: {
      attributes:
        'type="reset" id="cancel-new-task-button" value="cancel" formmethod="dialog"',
      text: 'Close'
    }
  }
}
