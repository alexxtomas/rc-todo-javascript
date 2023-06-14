import { BUTTON_VARIANTS_ENUM } from '@components/Button'
import { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import TaskElementDropdownListItems from '../components/TaskElementDropdownContent'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'

export const getDropdownButtonProps = ({ iconColor, id }) => ({
  variant: BUTTON_VARIANTS_ENUM.DROP_DOWN,

  tooltip: {
    text: 'Set priority',
    attributes: 'data-function="show-tooltip-text"'
  },
  children: Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor} data-function="show-task-element-priority" ` }),
  dropdownListItems: TaskElementDropdownListItems(),
  buttonAttributes: `data-function="show-task-element-priority-button" data-id=${id}`,
  dropdownContentAttributes: 'data-function="show-dropdown-content"'
})

export const getRemoveButtonProps = ({ taskName, id }) => ({
  variant: BUTTON_VARIANTS_ENUM.REMOVE,
  buttonAttributes: ` data-function="show-remove-task-element-dialog" data-id=${id}`,
  confirmDialogProps: {
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
  }
})
