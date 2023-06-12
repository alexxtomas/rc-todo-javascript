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
  <dialog class="formDialog" ${dialogAttributes}>
  <form class="formDialogForm" ${formAttributes}>
  ${
      elements.map(element => {
        return FormField({ element })
      }).join('').replaceAll(',', '')
  }
    
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
