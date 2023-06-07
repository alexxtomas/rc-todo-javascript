import { dialogLogic } from '@logic/dialog.logic'

export function dialogListeners() {
  const newSpaceButton = document.querySelector('#newSpace')
  const newSpaceDialogCloseButton = document.querySelector('#cancelButton')
  const newSpaceDialogForm = document.querySelector('#newSpaceForm')

  newSpaceButton?.addEventListener('click', dialogLogic.showDialogClick)
  newSpaceDialogCloseButton?.addEventListener(
    'click',
    dialogLogic.closeDialogClick
  )
  newSpaceDialogForm?.addEventListener('submit', dialogLogic.saveDialogSubmit)
}
