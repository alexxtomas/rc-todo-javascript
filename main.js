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
const newSpaceNameValidationError = document.querySelector(
  '#newSpaceNameValidationError'
)

newSpaceDialogForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const { newSpaceName, spacePriority } = e.target

  const newSpaceNameValidation = spaceNameValidation({
    spaceName: newSpaceName.value
  })

  if (newSpaceNameValidation) {
    console.log('MESSAGE', newSpaceNameValidation.message)
    console.log('TEXT CONTENT', newSpaceNameValidationError.textContent)
    if (newSpaceNameValidationError.text !== '') {
      newSpaceNameValidationError.textContent = ''
    }

    newSpaceNameValidationError.textContent = newSpaceNameValidation.message

    return
  }

  if (newSpaceNameValidationError.textContent !== '') {
    newSpaceNameValidationError.textContent = ''
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

  if (newSpaceNameValidationError.textContent !== '') {
    newSpaceNameValidationError.textContent = ''
  }
  newSpaceNameInput.value = ''
  newSpacePrioritySelect.value = PRIORITIES_SELECT_OPTIONS[0].value
})
