import './style.css'

const FormDialog = ({
  dialogAttributes,
  formAttributes,
  input,
  select,
  firstButton,
  secondButton
}) => {
  return `
  <dialog class="formDialog" ${dialogAttributes}>
  <form class="formDialogForm" ${formAttributes}>
    <div class="formDialogContainer">
      <label class="formDialogLabel" ${input.label}>Space Name</label>
      <input class="formDialogInput" ${input.attributes} />
      <span
        id="newSpaceNameValidationError"
        class="validationError"
      ></span>
    </div>

    <div class="formDialogContainer">
      <label class="formDialogLabel" ${select.label}">Priority</label>
      <select class="formDialogSelect" ${select.attributes}>
       ${select.options.map((el) => {
         return `<option class="formDialogSelectOption" value="${el.value}">${el.label}</option>`
       })}
      </select>
      <span id="newSpaceNameValidationError"
      class="validationError"></span>
    </div>

    <footer class="formDialogFooter">
      <button class="formDialogFirstButton" ${firstButton.attributes}>
        ${firstButton.text}
      </button>
      <button
        class="formDialogSecondButton"
       ${secondButton.attributes}
      >
        ${secondButton.text}
      </button>
    </footer>
  </form>
</dialog>
  `
}

export default FormDialog
