import { spaceNameValidation } from '@validations/space.validation'
import { PRIORITIES, PRIORITIES_SELECT_OPTIONS } from '@utils/constants'
import SpaceElement, {
  SPACE_ELEMENT_VARIANTS_ENUM
} from '@components/SpaceElement/SpaceElement'
import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import { nanoid } from 'nanoid'
import { removeSpaceDialogListeners } from '@listeners/dialog.listeners'

const outsideClick = (dialog) => (e) => {
  if (e.target === dialog) {
    dialog.close()
  }
}

export const newSpaceDialogLogic = {
  showDialogClick: (dialog) => () => {
    dialog.showModal()
  },
  closeDialogClick: (dialog) => () => {
    const $dialogSpaceNameInput = document.querySelector('#newSpaceName')
    const $dialogValidationErrorMessage = document.querySelector(
      '#newSpaceNameValidationError'
    )
    const $dialogSpacePrioritySelect =
      document.querySelector('#newSpacePriority')
    dialog.close()

    if ($dialogValidationErrorMessage.textContent !== '') {
      $dialogValidationErrorMessage.textContent = ''
    }
    $dialogSpaceNameInput.value = ''
    $dialogSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value
  },
  saveDialogSubmit: ($dialog) => (e) => {
    e.preventDefault()
    const $spacesContainer = document.querySelector('#spacesContainer')
    const $dialogValidationErrorMessage = document.querySelector(
      '#newSpaceNameValidationError'
    )
    const $dialogSpaceNameInput = document.querySelector('#newSpaceName')
    const $dialogSpacePrioritySelect =
      document.querySelector('#newSpacePriority')
    const { newSpaceName, newSpacePriority } = e.target

    const newSpaceNameValidation = spaceNameValidation({
      spaceName: newSpaceName.value
    })

    if (newSpaceNameValidation) {
      if ($dialogValidationErrorMessage.text !== '') {
        $dialogValidationErrorMessage.textContent = ''
      }
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
    removeSpaceDialogListeners()
  },
  outsideClick
}

export const removeSpaceElementDialogLogic = {
  showDialogClick: ($dialog) => () => {
    $dialog.showModal()
  },
  remove: ($dialog, id) => () => {
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
