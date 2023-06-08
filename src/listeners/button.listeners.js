export function editSpaceElementButtonListeners() {
  const $editSpaceElementButton = document.querySelectorAll(
    '#functionalSpaceElementEditButton'
  )

  $editSpaceElementButton.forEach(($el) => {
    const id = $el.getAttribute('data-id')
    $el.addEventListener('click', () => {
      const $inputSpaceElement = document.querySelector(`#${id} input`)
      $inputSpaceElement.removeAttribute('disabled')
      $inputSpaceElement.classList.add('spaceElementInputActive')
      $inputSpaceElement.focus()

      $inputSpaceElement.addEventListener('blur', () => {
        $inputSpaceElement.setAttribute('disabled', true)
      })

      $inputSpaceElement.addEventListener('input', () => {})
    })
  })
}
