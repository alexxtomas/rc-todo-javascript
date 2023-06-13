export const outsideClick = (dialog) => (e) => {
  if (e.target === dialog) {
    dialog.close()
  }
}

export const showDialogClick = ($dialog) => (e) => {
  $dialog.showModal()
}

export const closeDialogClick = ($dialog, dialogId) => (e) => {
  const $dialogValidationErrorMessage = document.querySelector(
    `${dialogId} [data-function="input-validation-error"]`
  )

  $dialog.close()
  if ($dialogValidationErrorMessage.textContent !== '') {
    $dialogValidationErrorMessage.textContent = ''
  }
}
