import { spaceNameValidation } from '@validations/space.validation'
import { PRIORITIES, PRIORITIES_ENUM, PRIORITIES_SELECT_OPTIONS, TASKS_STATUS, TASKS_STATUS_ENUM } from '@utils/constants'
import SpaceElement, {
  SPACE_ELEMENT_VARIANTS_ENUM
} from '@components/SpaceElement'
import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import { nanoid } from 'nanoid'
import { editSpaceDialogListeners, removeSpaceDialogListeners, removeTaskDialogListeners } from '@listeners/dialog.listeners'
import { dialogSharedLogic } from './shared'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { taskNameValidation } from '@validations/task.validation'
import TaskElement from '@components/TaskElement'
import { taskPriorityDropdownListeners } from '@listeners/dropwdown.listeners'

const { outsideClick, showDialogClick, closeDialogClick } = dialogSharedLogic

export const newSpaceDialogLogic = {
  showDialogClick,
  closeDialogClick,
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

    const priority = PRIORITIES[newSpacePriority.value]
    const id = `a${nanoid()}`

    $spacesContainer.innerHTML += SpaceElement({
      id,
      name: newSpaceName.value,
      iconColor: priority.color,
      tasks: [],
      variant: SPACE_ELEMENT_VARIANTS_ENUM.FUNCTIONAL
    })

    const newSpace = {
      id,
      name: newSpaceName.value,
      priority: newSpacePriority.value,
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
  closeDialogClick,
  outsideClick
}

export const editSpaceDialogLogic = {
  showDialogClick,
  closeDialogClick,
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

    const priority = PRIORITIES[spacePriority.value]

    $spaceElementName.textContent = spaceName.value
    $spaceElementPriority.innerHTML = Icon({
      variant: ICON_VARIANTS_ENUM.FLAG,
      props: `width=30px stroke-width="0.8" fill=${priority.color} color=${priority.color} data-function="show-space-element-priority"`
    })

    dispatch({ action: GLOBAL_ACTIONS_ENUM.EDIT_SPACE, payload: { id, name: spaceName.value, priority: spacePriority.value } })

    $dialogSpaceNameInput.value = ''
    $dialogSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value

    $dialog.close()
  },
  outsideClick

}

export const newTaskDialogLogic = {
  showDialogClick,
  saveDialogSubmit: ($dialog) => (e) => {
    e.preventDefault()
    const { state: { focusedSpace } } = globalStore()
    const $dialogValidationErrorMessage = document.querySelector(
      '#new-task-dialog [data-function="input-validation-error"]'
    )
    const $backlogTasks = document.querySelector(`#${TASKS_STATUS_ENUM.BACKLOG} [data-function="show-tasks"]`)
    const $backlogTasksCounter = document.querySelector(`#${TASKS_STATUS_ENUM.BACKLOG} [data-function="show-tasks-counter"]`)
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

    $backlogTasks.innerHTML += TaskElement({ creationDate, id: taskId, name: newTaskName.value, iconColor: PRIORITIES.NOT_ASSIGNED.color, statusColor: TASKS_STATUS.BACKLOG.color })

    const updatedCounterValue = Number($backlogTasksCounter.dataset.counter) + 1
    $backlogTasksCounter.setAttribute('data-counter', updatedCounterValue)
    $backlogTasksCounter.innerHTML = `${updatedCounterValue} ${updatedCounterValue === 1 ? 'Task' : 'Tasks'}`

    const newTask = {
      id: taskId,
      name: newTaskName.value,
      creationDate,
      status: TASKS_STATUS_ENUM.BACKLOG,
      priority: PRIORITIES_ENUM.NOT_ASSIGNED
    }

    dispatch({ action: GLOBAL_ACTIONS_ENUM.ADD_TASK, payload: { spaceId: focusedSpace.id, task: newTask } })

    $dialogTaskNameInput.value = ''

    $dialog.close()
    removeTaskDialogListeners()
    taskPriorityDropdownListeners()
  },
  closeDialogClick,
  outsideClick

}

export const removeTaskDialogLogic = {
  showDialogClick,
  remove: (taskId) => () => {
    const { state: { focusedSpace }, dispatch } = globalStore()

    const $task = document.querySelector(`#${taskId}`)

    $task.remove()
    dispatch({ action: GLOBAL_ACTIONS_ENUM.REMOVE_TASK, payload: { spaceId: focusedSpace.id, taskId } })
  },
  closeDialogClick,
  outsideClick
}
