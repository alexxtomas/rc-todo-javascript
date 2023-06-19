import './style.css'

const InputTextarea = ({ attributes }) => {
  return `
  <textarea data-autoresize rows="4"  class="form-field-textarea" ${attributes}></textarea>
  `
}

export default InputTextarea
