const FORM_FIELDS_VARIANTS = {
  INPUT: (element) => `
  <div class="formDialogContainer">
  <label class="formDialogLabel" ${element.label.attributes}>${element.label.text}</label>
  <input class="formDialogInput" ${element.attributes} />
  <span
    data-function="inputValidationError"
    class="validationError"
  ></span>
</div>
  `,
  SELECT: (element) => `
  <div class="formDialogContainer">
  <label class="formDialogLabel" ${element.label.attributes}">${element.label.text}</label>
  <select class="formDialogSelect" ${element.attributes}>
   ${element.options.map((el) => {
     return `<option class="formDialogSelectOption" value="${el.value}">${el.label}</option>`
   })}
  </select>
  <span id="newSpaceNameValidationError"
  class="validationError"></span>
</div>
  `
}

export const FORM_FIELDS_VARIANTS_ENUM = {
  INPUT: 'INPUT',
  SELECT: 'SELECT'
}

const FormField = ({ element }) => {
  return FORM_FIELDS_VARIANTS[element.variant](element)
}

export default FormField
