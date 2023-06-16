import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import FormField from './components/FormField'
import './style.css'

const FormDialog = ({
  dialogAttributes,
  formAttributes,
  elements,
  firstButton,
  closeButton
}) => {
  return `
  <dialog class="form-dialog" ${dialogAttributes}>
  <button class="close-form-dialog" ${closeButton.attributes}>
  ${Icon({ variant: ICON_VARIANTS_ENUM.XMark, props: 'width=24px height=24px stroke-width="1.2" fill="none"' })}
  </button>
  <form class="form-dialog-form" ${formAttributes}>
  ${
      elements.map(element => {
        return FormField({ element })
      }).join('').replaceAll(',', '')
  }
    
  
      <button class="form-dialog-first-button" ${firstButton.attributes}>
        ${firstButton.text}
      </button>
    
 
  </form>
</dialog>
  `
}

export default FormDialog
