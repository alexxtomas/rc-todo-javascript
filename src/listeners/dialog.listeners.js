import {
  removeSpaceDialogLogic,
  newSpaceDialogLogic,
  editSpaceDialogLogic,
  newTaskDialogLogic
} from '@logic/dialog.logic'

export function newSpaceDialogListeners() {
  const $dialog = document.querySelector('#new-space-dialog')
  const $openDialogButton = document.querySelector('#newSpace')
  const $closeDialogButton = document.querySelector('#cancel-new-space-button')
  const $dialogForm = document.querySelector('#new-space-form')

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
    'button[data-function="show-remove-space-element-dialog"]'
  )
  $openDialogButton.forEach(($el) => {
    const id = $el.getAttribute('data-id')
    const $dialog = document.querySelector(
      `#${id}  dialog[data-function="remove-dialog"]`
    )
    const $removeSpaceElementDialogButton = document.querySelector(
      `#${id} button[data-function="remove-space-element"]`
    )
    const $closeDialogButton = document.querySelector(
      `#${id}  button[data-function="close-remove-space-element-dialog"]`
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
    'button[data-function="edit-space-element"]'
  )

  $editSpaceElementButton.forEach(($el) => {
    const id = $el.getAttribute('data-id')
    const $dialog = document.querySelector(
      `#${id} > dialog[data-function="edit-dialog"]`
    )

    const $dialogForm = document.querySelector(`#${id} [data-function="submit-data"]`)

    const $closeDialogButton = document.querySelector(
      `#${id} button[data-function="close-edit-space-element-dialog"]`
    )
    $el?.addEventListener('click', editSpaceDialogLogic.showDialogClick($dialog))

    $closeDialogButton?.addEventListener('click', editSpaceDialogLogic.closeDialogClick($dialog))

    $dialog?.addEventListener('click', editSpaceDialogLogic.outsideClick($dialog))

    $dialogForm?.addEventListener('submit', editSpaceDialogLogic.saveDialogSubmit($dialog, id))
  })
}

export function newTaskDialogListeners() {
  const $dialog = document.querySelector('#newTaskDialog')
  const $openDialogButton = document.querySelector('#newTask')
  // const $closeDialogButton = document.querySelector('#cancelNewTaskButton')
  // const $dialogForm = document.querySelector('#newTaskForm')

  $openDialogButton?.addEventListener(
    'click',
    newTaskDialogLogic.showDialogClick($dialog)
  )
  // $closeDialogButton?.addEventListener(
  //   'click',
  //   newSpaceDialogLogic.closeDialogClick($dialog)
  // )
  $dialog?.addEventListener('click', newTaskDialogLogic.outsideClick($dialog))
  // $dialogForm?.addEventListener(
  //   'submit',
  //   newSpaceDialogLogic.saveDialogSubmit($dialog)
  // )
}
