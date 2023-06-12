import './style.css'

const FORM_FIELDS_VARIANTS = {
  INPUT: (element) => `
  <div class="form-field-container">
  <label class="form-field-label" ${element.label.attributes}>${element.label.text}</label>
  <input class="form-field-input" ${element.attributes} />
  <span
    data-function="input-validation-error"
    class="validation-error"
  ></span>
</div>
  `,
  SELECT: (element) => `
  <div class="form-field-container">
  <label class="form-field-label" ${element.label.attributes}">${element.label.text}</label>
  <select class="form-field-select" ${element.attributes}>
   ${element.options.map((el) => {
     return `<option class="form-field-select-option" value="${el.value}">${el.label}</option>`
   })}
  </select>
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
