export const inputTextareaLogic = {
  handleInputEvent: (e) => {
    if (e.target.style.height === '244px') return
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
  },
  handleKeyPressEvent: (e) => {
    if (e.target.style.height === '244px') {
      e.preventDefault()
    }
  },
  handlePasteEvent: (e) => {
    if (e.target.style.height === '244px') {
      e.preventDefault()
    }
  }
}
