import { inputTextareaLogic } from '@logic/input.logic'

export function inputTextareaListeners() {
  const $$autoResizeTextarea = document.querySelectorAll('[data-autoresize]')

  $$autoResizeTextarea.forEach($autoResizeTextarea => {
    $autoResizeTextarea.addEventListener('input', inputTextareaLogic.handleInputEvent)
    $autoResizeTextarea.addEventListener('keypress', inputTextareaLogic.handleKeyPressEvent)
    $autoResizeTextarea.addEventListener('paste', inputTextareaLogic.handlePasteEvent)
  })
}

export function inputFileListeners() {
  const $$inputFile = document.querySelectorAll('[data-input-file]')

  $$inputFile.forEach($inputFile => {
    $inputFile.addEventListener('change', (e) => {
      const taskId = $inputFile.getAttribute('data-id')
      const file = e.target.files[0]
      // eslint-disable-next-line no-undef
      const reader = new FileReader()

      reader.onload = () => {
        const $taskImage = document.querySelector(`#${taskId} [data-function="show-input-file-image"]`)
        const $taskImageIcon = document.querySelector(`#${taskId} [data-function="show-input-file-icon"]`)
        $taskImageIcon.classList.add('visually-hidden')
        $taskImage.setAttribute('src', reader.result)
        $taskImage.classList.remove('visually-hidden')
      }

      reader.readAsDataURL(file)
    })
  })
}
