export const outsideClick = (dialog) => (e) => {
  if (e.target === dialog) {
    dialog.close()
  }
}

export const showDialogClick = ($dialog) => () => {
  $dialog.showModal()
}
