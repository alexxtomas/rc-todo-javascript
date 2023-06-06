import SpaceCard from '@components/SpaceCard/SpaceCard'
import { SPACES } from './src/utils/constants'
import './style.css'
import { PRIORITIES_SELECT_OPTIONS } from '@utils/constants'
import {
  spacePriorityValidation,
  spaceNameValidation
} from '@validations/space.validation'

const main = document.querySelector('#content')

main.classList.add('rcFlexContainer')

main.innerHTML = `
      ${SPACES.map(({ name }, idx) => {
        return SpaceCard({ name })
      })
        .join('')
        .replaceAll(',', '')}
`

const newSpaceDialog = document.querySelector('#newSpaceDialog')
const newSpaceButton = document.querySelector('#newSpace')
const newSpacePriorityDialog = document.querySelector('#newSpacePriority')
const newSpaceDialogSaveButton = document.querySelector('#saveButton')
const newSpaceDialogCloseButton = document.querySelector('#cancelButton')
const newSpaceDialogForm = document.querySelector('#newSpaceForm')
const newSpaceNameInput = document.querySelector('#newSpaceName')
const newSpacePrioritySelect = document.querySelector('#newSpacePriority')

newSpaceDialogForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const { newSpaceName, spacePriority } = e.target

  const newSpaceNameValidation = spaceNameValidation({
    spaceName: newSpaceName.value
  })

  const newSpaceNameValidationError = document.querySelector(
    `#${newSpaceNameValidation.id}`
  )

  if (newSpaceNameValidation?.message) {
    if (newSpaceNameValidationError) {
      newSpaceNameValidationError.remove()
    }
    const node = document.createElement('span')
    node.id = newSpaceNameValidation.id
    node.classList.add('validationError')
    node.textContent = newSpaceNameValidation.message
    newSpaceNameInput.insertAdjacentElement('afterend', node)

    return
  }

  if (newSpaceNameValidationError) {
    newSpaceNameValidationError.remove()
  }
})

newSpaceButton.addEventListener('click', () => {
  newSpaceDialog.showModal()

  if (newSpacePrioritySelect.children.length === 0) {
    PRIORITIES_SELECT_OPTIONS.forEach((el, idx) => {
      const node = document.createElement('option')
      node.value = el.value
      node.text = el.label
      newSpacePriorityDialog.appendChild(node)
    })
  }
})

newSpaceDialogCloseButton.addEventListener('click', () => {
  newSpaceDialog.close()
  const newSpaceNameValidationError = document.querySelector(
    '#spaceNameValidationError'
  )
  if (newSpaceNameValidationError) {
    newSpaceNameValidationError.remove()
  }
  newSpaceNameInput.value = ''
  newSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value
})
