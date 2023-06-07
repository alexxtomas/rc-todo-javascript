import { dialogLogic } from '@logic/dialog.logic'

export function dialogListeners() {
  const newSpaceButton = document.querySelector('#newSpace')
  const newSpaceDialogCloseButton = document.querySelector('#cancelButton')
  const newSpaceDialogForm = document.querySelector('#newSpaceForm')
  const $newSpaceDialog = document.querySelector('#newSpaceDialog')

  newSpaceButton?.addEventListener('click', dialogLogic.showDialogClick)
  newSpaceDialogCloseButton?.addEventListener(
    'click',
    dialogLogic.closeDialogClick
  )
  $newSpaceDialog?.addEventListener(
    'click',
    dialogLogic.outsideClick($newSpaceDialog)
  )
  newSpaceDialogForm?.addEventListener('submit', dialogLogic.saveDialogSubmit)
}
