import FormField from './components/FormField'
import './style.css'

const FormDialog = ({
  dialogAttributes,
  formAttributes,
  elements,
  firstButton,
  secondButton
}) => {
  return `
  <dialog class="form-dialog" ${dialogAttributes}>
  <form class="form-dialog-form" ${formAttributes}>
  ${
      elements.map(element => {
        return FormField({ element })
      }).join('').replaceAll(',', '')
  }
    
    <footer class="form-dialog-footer">
      <button class="form-dialog-first-button" ${firstButton.attributes}>
        ${firstButton.text}
      </button>
      <button
        class="form-dialog-second-button"
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
