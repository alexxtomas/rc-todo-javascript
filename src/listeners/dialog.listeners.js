import {
  removeSpaceDialogLogic,
  newSpaceDialogLogic,
  editSpaceDialogLogic
} from '@logic/dialog.logic'

export function newSpaceDialogListeners() {
  const $dialog = document.querySelector('#newSpaceDialog')
  const $openDialogButton = document.querySelector('#newSpace')
  const $closeDialogButton = document.querySelector('#cancelNewSpaceButton')
  const $dialogForm = document.querySelector('#newSpaceForm')

  $openDialogButton?.addEventListener(
    'click',
    newSpaceDialogLogic.showDialogClick($dialog)
  )
  $closeDialogButton?.addEventListener(
    'click',
    newSpaceDialogLogic.closeDialogClick($dialog)
  )
  $dialog?.addEventListener('click', newSpaceDialogLogic.outsideClick($dialog))
  $dialogForm?.addEventListener(
    'submit',
    newSpaceDialogLogic.saveDialogSubmit($dialog)
  )
}

export function removeSpaceDialogListeners() {
  const $openDialogButton = document.querySelectorAll(
    '#functionalSpaceElementTrashButton'
  )
  $openDialogButton.forEach(($el) => {
    const id = $el.getAttribute('data-id')
    const $dialog = document.querySelector(
      `#${id} > dialog[data-function="removeDialog"]`
    )
    const $removeSpaceElementDialogButton = document.querySelector(
      `#${id} button[data-function="removeSpaceElement"]`
    )
    const $closeDialogButton = document.querySelector(
      `#${id}  button[data-function="closeRemoveSpaceElementDialog"]`
    )

    $el?.addEventListener(
      'click',
      removeSpaceDialogLogic.showDialogClick($dialog)
    )

    $removeSpaceElementDialogButton?.addEventListener(
      'click',
      removeSpaceDialogLogic.remove(id)
    )

    $closeDialogButton?.addEventListener(
      'click',
      removeSpaceDialogLogic.closeDialogClick($dialog)
    )

    $dialog?.addEventListener(
      'click',
      removeSpaceDialogLogic.outsideClick($dialog)
    )
  })
}

export function editSpaceDialogListeners() {
  const $editSpaceElementButton = document.querySelectorAll(
    '#functionalSpaceElementEditButton'
  )

  $editSpaceElementButton.forEach(($el) => {
    const id = $el.getAttribute('data-id')
    const $dialog = document.querySelector(
      `#${id} > dialog[data-function="editDialog"]`
    )

    const $dialogForm = document.querySelector(`#${id} [data-function="submitData"]`)

    const $closeDialogButton = document.querySelector(
      `#${id} button[data-function="closeEditSpaceElementDialog"]`
    )
    $el?.addEventListener('click', editSpaceDialogLogic.showDialogClick($dialog))

    $closeDialogButton?.addEventListener('click', editSpaceDialogLogic.closeDialogClick($dialog))

    $dialog?.addEventListener('click', editSpaceDialogLogic.outsideClick($dialog))

    $dialogForm?.addEventListener('submit', editSpaceDialogLogic.saveDialogSubmit($dialog, id))
  })
}
