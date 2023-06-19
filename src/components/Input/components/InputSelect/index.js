import './style.css'

const InputSelect = ({ attributes, options }) => {
  return `
  <select class="form-field-select" ${attributes}>
   ${options.map((el) => {
     return `<option class="form-field-select-option" value="${el.value}">${el.label}</option>`
   })}
  </select>
  `
}

export default InputSelect
