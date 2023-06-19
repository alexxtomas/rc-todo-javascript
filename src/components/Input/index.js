import InputText from './components/InputText'
import InputFile from './components/InputFile'
import InputSelect from './components/InputSelect'
import InputTextarea from './components/InputTextarea'
import './style.css'

const INPUT_VARIANTS = {
  TEXT: InputText,
  FILE: InputFile,
  SELECT: InputSelect,
  TEXTAREA: InputTextarea
}

export const INPUT_VARIANTS_ENUM = {
  TEXT: 'TEXT',
  SELECT: 'SELECT',
  TEXTAREA: 'TEXTAREA',
  FILE: 'FILE'
}

const Input = ({ variant, props: { label, ...restOfProps } }) => {
  const relativeClass = variant === INPUT_VARIANTS.FILE && 'relative'
  return `
  <div class="form-field-container ${relativeClass} "> 
  <label class="form-field-label" ${label.attributes}">${label.text}</label>
   ${INPUT_VARIANTS[variant](restOfProps)}
   </div>
  `
}

export default Input
