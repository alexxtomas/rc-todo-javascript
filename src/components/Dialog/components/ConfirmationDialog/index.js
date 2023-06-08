import './style.css'

const ConfirmationDialog = ({
  dialogAttributes,
  text,
  firstButton,
  secondButton
}) => {
  return `
  <dialog class="confirmationDialog" ${dialogAttributes}>
    <section class="confirmationDialogSection">
      <p class="confirmationDialogText">${text}</p>
      <div class="confirmationDialogContainer">
      <button class="confirmationDialogFirstButton" ${firstButton.attributes}>${firstButton.text}</button>
      <button class="confirmationDialogSecondButton" ${secondButton.attributes}>${secondButton.text}</button>
      </div>
  </section>
</dialog>
  `
}

export default ConfirmationDialog
