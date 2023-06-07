import { spaceNameValidation } from '@validations/space.validation'
import { PRIORITIES, PRIORITIES_SELECT_OPTIONS } from '@utils/constants'
import SpaceElement, {
  SPACE_ELEMENT_VARIANTS_ENUM
} from '@components/SpaceElement/SpaceElement'
import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import { nanoid } from 'nanoid'

const newSpaceDialog = document.querySelector('#newSpaceDialog')
const newSpacePriorityDialog = document.querySelector('#newSpacePriority')
const newSpaceNameInput = document.querySelector('#newSpaceName')
const newSpacePrioritySelect = document.querySelector('#newSpacePriority')
const newSpaceNameValidationError = document.querySelector(
  '#newSpaceNameValidationError'
)

export const dialogLogic = {
  showDialogClick: () => {
    newSpaceDialog.showModal()

    if (newSpacePrioritySelect.children.length === 0) {
      PRIORITIES_SELECT_OPTIONS.forEach((el, idx) => {
        const node = document.createElement('option')
        node.value = el.value
        node.text = el.label
        newSpacePriorityDialog.appendChild(node)
      })
    }
  },
  closeDialogClick: () => {
    newSpaceDialog.close()

    if (newSpaceNameValidationError.textContent !== '') {
      newSpaceNameValidationError.textContent = ''
    }
    newSpaceNameInput.value = ''
    newSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value
  },
  saveDialogSubmit: (e) => {
    const $spacesContainer = document.querySelector('.rcSpacesContainer')
    e.preventDefault()

    const { newSpaceName, newSpacePriority } = e.target

    const newSpaceNameValidation = spaceNameValidation({
      spaceName: newSpaceName.value
    })

    if (newSpaceNameValidation) {
      if (newSpaceNameValidationError.text !== '') {
        newSpaceNameValidationError.textContent = ''
      }
      newSpaceNameValidationError.textContent = newSpaceNameValidation.message
      return
    }

    if (newSpaceNameValidationError.textContent !== '') {
      newSpaceNameValidationError.textContent = ''
    }

    const PRIORITY = PRIORITIES[newSpacePriority.value]
    const id = nanoid()

    $spacesContainer.innerHTML += SpaceElement({
      id,
      name: newSpaceName.value,
      iconColor: PRIORITY.COLOR,
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

    newSpaceNameInput.value = ''
    newSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value

    newSpaceDialog.close()
  },
  outsideClick: (dialog) => (e) => {
    if (e.target === dialog) {
      dialog.close()
    }
  }
}
