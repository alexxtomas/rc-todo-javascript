import {
  removeSpaceElementDialogLogic,
  newSpaceDialogLogic
} from '@logic/dialog.logic'

export function newSpaceDialogListeners() {
  const $dialog = document.querySelector('#newSpaceDialog')
  const $openDialogButton = document.querySelector('#newSpace')
  const $closeDialogButton = document.querySelector('#cancelButton')
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
    const $dialog = document.querySelector(`#${id} > dialog`)
    const $removeSpaceElementDialogButton = document.querySelector(
      `#${id} button[data-function="removeSpaceElement"]`
    )
    const $closeDialogButton = document.querySelector(
      `#${id}  button[data-function="closeDialog"]`
    )

    $el?.addEventListener(
      'click',
      removeSpaceElementDialogLogic.showDialogClick($dialog)
    )

    $removeSpaceElementDialogButton?.addEventListener(
      'click',
      removeSpaceElementDialogLogic.remove($dialog, id)
    )

    $closeDialogButton?.addEventListener(
      'click',
      removeSpaceElementDialogLogic.closeDialogClick($dialog)
    )

    $dialog?.addEventListener(
      'click',
      removeSpaceElementDialogLogic.outsideClick($dialog)
    )
  })
}
