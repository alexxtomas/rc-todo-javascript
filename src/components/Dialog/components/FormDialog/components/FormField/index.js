import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
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
  `,
  TEXTAREA: (element) => `
   <div class="form-field-container">
  <label class="form-field-label" ${element.label.attributes}">${element.label.text}</label>
  <textarea data-autoresize rows="4"  class="form-field-textarea" ${element.attributes}></textarea>
  </div>
  `,
  FILE: (element) => `
  <div class="form-field-container relative"> 
  <label class="form-field-label" ${element.label.attributes}">${element.label.text}</label>
  <div class="form-field-file-container">
    <img data-function="show-input-file-image" class="form-field-file-image visually-hidden" src="" alt="" />
   ${Icon({ variant: ICON_VARIANTS_ENUM.PLUS, props: 'width=100% height=100% stroke-width="0.8" fill="none" class="form-field-file-icon" data-function="show-input-file-icon" ' })}
  <input class="form-field-file" type="file" data-input-file ${element.attributes} />
  </div>
  </div>
  `
}

export const FORM_FIELDS_VARIANTS_ENUM = {
  INPUT: 'INPUT',
  SELECT: 'SELECT',
  TEXTAREA: 'TEXTAREA',
  FILE: 'FILE'
}

const FormField = ({ element }) => {
  return FORM_FIELDS_VARIANTS[element.variant](element)
}

export default FormField
