import {
  removeSpaceDialogLogic,
  newSpaceDialogLogic,
  editSpaceDialogLogic,
  newTaskDialogLogic,
  removeTaskDialogLogic,
  taskDetailDialogLogic
} from '@logic/dialog.logic'
import { $, $$ } from '@utils/functions'

export function newSpaceDialogListeners() {
  const $dialog = $('#new-space-dialog')
  const $openDialogButton = $('#new-space')
  const $closeDialogButton = $('#close-new-space-dialog-button')
  const $dialogForm = $('#new-space-form')

  $openDialogButton?.addEventListener(
    'click',
    newSpaceDialogLogic.showDialogClick($dialog)
  )
  $closeDialogButton?.addEventListener(
    'click',
    newSpaceDialogLogic.closeDialogClick(
      $dialog,
      '#new-space-dialog',
      newSpaceDialogLogic.restoreDialogValues
    )
  )
  $dialog?.addEventListener('click', newSpaceDialogLogic.outsideClick($dialog))
  $dialogForm?.addEventListener(
    'submit',
    newSpaceDialogLogic.saveDialogSubmit($dialog)
  )
}

export function removeSpaceDialogListeners() {
  const $$showRemoveSpaceElementDialog = $$(
    'button[data-function="show-remove-space-element-dialog"]'
  )
  $$showRemoveSpaceElementDialog.forEach(($showRemoveSpaceElementDialog) => {
    const id = $showRemoveSpaceElementDialog.getAttribute('data-id')
    const $dialog = $(
      `#${id} dialog[data-function="show-remove-space-element-dialog"]`
    )
    const $removeSpaceElementDialogButton = $(
      `#${id} button[data-function="remove-space-element-button"]`
    )
    const $closeDialogButton = $(
      `#${id}  button[data-function="close-remove-space-element-dialog-button"]`
    )

    $showRemoveSpaceElementDialog?.addEventListener(
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
  const $$editSpaceElementButton = $$(
    'button[data-function="edit-space-element"]'
  )

  $$editSpaceElementButton.forEach(($editSpaceElementButton) => {
    const id = $editSpaceElementButton.getAttribute('data-id')
    const $dialog = $(
      `#${id} > dialog[data-function="show-edit-space-element-dialog"]`
    )

    const $dialogForm = $(
      `#${id} [data-function="edit-space-element-submit-data"]`
    )

    const $closeDialogButton = $(
      `#${id} button[data-function="close-edit-space-element-dialog"]`
    )
    $editSpaceElementButton?.addEventListener(
      'click',
      editSpaceDialogLogic.showDialogClick($dialog)
    )

    $closeDialogButton?.addEventListener(
      'click',
      editSpaceDialogLogic.closeDialogClick(
        $dialog,
        `#${id} > dialog[data-function="show-edit-space-element-dialog"]`
      )
    )

    $dialog?.addEventListener(
      'click',
      editSpaceDialogLogic.outsideClick($dialog)
    )

    $dialogForm?.addEventListener(
      'submit',
      editSpaceDialogLogic.saveDialogSubmit($dialog, id)
    )
  })
}

export function newTaskDialogListeners() {
  const $dialog = $('#new-task-dialog')
  const $openDialogButton = $('#new-task')
  const $closeDialogButton = $('#cancel-new-task-button')
  const $dialogForm = $('#new-task-form')
  $openDialogButton?.addEventListener(
    'click',
    newTaskDialogLogic.showDialogClick($dialog)
  )
  $closeDialogButton?.addEventListener(
    'click',
    newTaskDialogLogic.closeDialogClick($dialog, '#new-task-dialog')
  )
  $dialog?.addEventListener('click', newTaskDialogLogic.outsideClick($dialog))
  $dialogForm?.addEventListener(
    'submit',
    newTaskDialogLogic.saveDialogSubmit($dialog)
  )
}

export function removeTaskDialogListeners() {
  const $$showRemoveTaskElementDialog = $$(
    '[data-function="show-remove-task-element-dialog"]'
  )

  $$showRemoveTaskElementDialog.forEach(($showRemoveTaskElementDialog) => {
    const taskId = $showRemoveTaskElementDialog.getAttribute('data-id')
    const $dialog = $(
      `#${taskId} dialog[data-function="remove-task-element-dialog"]`
    )
    const $removeTaskDialogButton = $(
      `#${taskId} button[data-function="remove-task-element-button"]`
    )
    const $closeDialogButton = $(
      `#${taskId} button[data-function="close-remove-task-element-dialog-button"]`
    )

    $showRemoveTaskElementDialog?.addEventListener(
      'click',
      removeTaskDialogLogic.showDialogClick($dialog)
    )

    $closeDialogButton?.addEventListener(
      'click',
      removeTaskDialogLogic.closeDialogClick($dialog)
    )

    $removeTaskDialogButton?.addEventListener(
      'click',
      removeTaskDialogLogic.remove(taskId)
    )

    $dialog?.addEventListener(
      'click',
      removeTaskDialogLogic.outsideClick($dialog)
    )
  })
}

export function taskDetailDialogListeners() {
  const $$showTaskDetailDialog = $$(
    '[data-function="show-task-element-detail-dialog"]'
  )

  $$showTaskDetailDialog.forEach(($showTaskDetailDialog) => {
    const taskId = $showTaskDetailDialog.getAttribute('id')
    const $dialog = $(
      `#${taskId} dialog[data-function="task-element-detail-dialog"]`
    )
    const $form = $(`#${taskId} form[data-function="task-element-detail-form"]`)
    const $closeDialogButton = $(
      `#${taskId} [data-function="close-task-element-detail-dialog-button"]`
    )

    $showTaskDetailDialog?.addEventListener(
      'click',
      taskDetailDialogLogic.showDialogClick($dialog, taskId)
    )

    $form?.addEventListener(
      'submit',
      taskDetailDialogLogic.saveDialogSubmit($dialog, taskId)
    )

    $closeDialogButton?.addEventListener(
      'click',
      taskDetailDialogLogic.closeDialogClick($dialog, taskId)
    )

    $dialog?.addEventListener(
      'click',
      taskDetailDialogLogic.outsideClick($dialog)
    )
  })
}
