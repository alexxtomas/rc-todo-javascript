import './style.css'

const ConfirmationDialog = ({
  dialogAttributes,
  text,
  firstButton,
  secondButton
}) => {
  return `
  <dialog class="confirmation-dialog" ${dialogAttributes}>
    <section class="confirmation-dialog-section">
      <p class="confirmation-dialog-text">${text}</p>
      <div class="confirmation-dialog-container">
      <button class="confirmation-dialog-first-button" ${firstButton.attributes}>${firstButton.text}</button>
      <button class="confirmation-dialog-second-button" ${secondButton.attributes}>${secondButton.text}</button>
      </div>
  </section>
</dialog>
  `
}

export default ConfirmationDialog
