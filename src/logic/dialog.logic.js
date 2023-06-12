import { spaceNameValidation } from '@validations/space.validation'
import { PRIORITIES, PRIORITIES_SELECT_OPTIONS, TASKS_STATUS_ENUM } from '@utils/constants'
import SpaceElement, {
  SPACE_ELEMENT_VARIANTS_ENUM
} from '@components/SpaceElement'
import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import { nanoid } from 'nanoid'
import { editSpaceDialogListeners, removeSpaceDialogListeners } from '@listeners/dialog.listeners'
import { outsideClick, showDialogClick } from './shared'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { taskNameValidation } from '@validations/task.validation'
import TaskElement from '@components/TaskElement'

export const newSpaceDialogLogic = {
  showDialogClick,
  closeDialogClick: ($dialog) => () => {
    const $dialogValidationErrorMessage = document.querySelector(
      '[data-function="input-validat ion-error"]'
    )

    $dialog.close()

    if ($dialogValidationErrorMessage.textContent !== '') {
      $dialogValidationErrorMessage.textContent = ''
    }
  },
  saveDialogSubmit: ($dialog) => (e) => {
    e.preventDefault()
    const $spacesContainer = document.querySelector('#spaces-container')
    const $dialogValidationErrorMessage = document.querySelector(
      '[data-function="input-validation-error"]'
    )
    const $dialogSpaceNameInput = document.querySelector('#new-space-name')
    const $dialogSpacePrioritySelect =
      document.querySelector('#new-space-priority')
    const { newSpaceName, newSpacePriority } = e.target

    const newSpaceNameValidation = spaceNameValidation({
      spaceName: newSpaceName.value
    })

    if (newSpaceNameValidation) {
      $dialogValidationErrorMessage.textContent = newSpaceNameValidation.message
      return
    }

    if ($dialogValidationErrorMessage.textContent !== '') {
      $dialogValidationErrorMessage.textContent = ''
    }

    const PRIORITY = PRIORITIES[newSpacePriority.value]
    const id = `a${nanoid()}`

    $spacesContainer.innerHTML += SpaceElement({
      id,
      name: newSpaceName.value,
      iconColor: PRIORITY.COLOR,
      tasks: [],
      variant: SPACE_ELEMENT_VARIANTS_ENUM.FUNCTIONAL
    })

    const newSpace = {
      id,
      name: newSpaceName.value,
      priority: PRIORITY.LABEL,
      tasks: []
    }

    const { dispatch } = globalStore()

    dispatch({
      action: GLOBAL_ACTIONS_ENUM.ADD_SPACE,
      payload: { space: newSpace }
    })

    $dialogSpaceNameInput.value = ''
    $dialogSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value

    $dialog.close()
    editSpaceDialogListeners()
    removeSpaceDialogListeners()
  },
  outsideClick
}

export const removeSpaceDialogLogic = {
  showDialogClick,
  remove: (id) => () => {
    const $spaceElement = document.querySelector(`#${id}`)
    const { dispatch } = globalStore()

    $spaceElement.remove()
    dispatch({ action: GLOBAL_ACTIONS_ENUM.REMOVE_SPACE, payload: { id } })
  },
  closeDialogClick: ($dialog) => () => {
    $dialog.close()
  },
  outsideClick
}

export const editSpaceDialogLogic = {
  showDialogClick,
  closeDialogClick: ($dialog) => () => {
    const $dialogValidationErrorMessage = document.querySelector(
      '[data-function="input-validat ion-error"]'
    )
    $dialog.close()
    if ($dialogValidationErrorMessage.textContent !== '') {
      $dialogValidationErrorMessage.textContent = ''
    }
  },
  saveDialogSubmit: ($dialog, id) => (e) => {
    e.preventDefault()
    const $dialogValidationErrorMessage = document.querySelector(
      `#${id} [data-function="input-validation-error"]`
    )
    const $spaceElementName = document.querySelector(`#${id} [data-function="show-space-element-name"]`)
    const $spaceElementPriority = document.querySelector(`#${id} [data-function="show-space-element-priority"]`)
    const $dialogSpaceNameInput = document.querySelector('#space-name')
    const $dialogSpacePrioritySelect =
       document.querySelector('#space-priority')
    const { spaceName, spacePriority } = e.target
    const { dispatch } = globalStore()

    const spaceNameValidaation = spaceNameValidation({
      spaceName: spaceName.value
    })

    if (spaceNameValidaation) {
      $dialogValidationErrorMessage.innerHTML = spaceNameValidaation.message
      return
    }

    if ($dialogValidationErrorMessage.textContent !== '') {
      $dialogValidationErrorMessage.textContent = ''
    }

    const PRIORITY = PRIORITIES[spacePriority.value]

    $spaceElementName.textContent = spaceName.value
    $spaceElementPriority.innerHTML = Icon({
      variant: ICON_VARIANTS_ENUM.FLAG,
      props: `width=30px stroke-width="0.8" fill=${PRIORITY.COLOR} color=${PRIORITY.COLOR} data-function="show-space-element-priority"`
    })

    dispatch({ action: GLOBAL_ACTIONS_ENUM.EDIT_SPACE, payload: { id, name: spaceName.value, priority: PRIORITY.LABEL } })

    $dialogSpaceNameInput.value = ''
    $dialogSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value

    $dialog.close()
  },
  outsideClick

}

export const newTaskDialogLogic = {
  showDialogClick,
  saveDialogSubmit: ($dialog, spaceId) => (e) => {
    e.preventDefault()
    const $dialogValidationErrorMessage = document.querySelector(
      '#new-task-dialog [data-function="input-validation-error"]'
    )
    const $backlogTasks = document.querySelector(`#${TASKS_STATUS_ENUM.BACKLOG} [data-function="show-tasks"]`)
    const $dialogTaskNameInput = document.querySelector('#new-task-name')

    const { newTaskName } = e.target

    const newTaskNameValidation = taskNameValidation({
      taskName: newTaskName.value
    })

    if (newTaskNameValidation) {
      $dialogValidationErrorMessage.textContent = newTaskNameValidation.message
      return
    }

    if ($dialogValidationErrorMessage.textContent !== '') {
      $dialogValidationErrorMessage.textContent = ''
    }

    const taskId = `a${nanoid()}`
    const creationDate = new Date().toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric' })

    const { dispatch } = globalStore()

    $backlogTasks.innerHTML += TaskElement({ creationDate, id: taskId, name: newTaskName.value, iconColor: PRIORITIES.NOT_ASSIGNED.COLOR })

    const newTask = {
      id: taskId,
      name: newTaskName.value,
      creationDate,
      status: TASKS_STATUS_ENUM.BACKLOG,
      priority: PRIORITIES.NOT_ASSIGNED.LABEL
    }

    dispatch({ action: GLOBAL_ACTIONS_ENUM.ADD_TASK, payload: { id: spaceId, task: newTask } })

    $dialogTaskNameInput.value = ''

    $dialog.close()
  },

  outsideClick

}
