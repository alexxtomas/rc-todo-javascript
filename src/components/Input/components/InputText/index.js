import './style.css'

const InputText = ({ attributes }) => {
  return `
  <input class="form-field-input" ${attributes} />
  <span
    data-function="input-validation-error"
    class="validation-error"
  ></span>
  `
}

export default InputText
