import { transparentBackgroundListeners } from '@listeners/transparentBackground.listeners'

export const dialogSharedLogic = {
  showDialogClick: ($dialog) => () => {
    $dialog.showModal()
  },
  closeDialogClick: ($dialog, dialogSelector) => () => {
    const $dialogValidationErrorMessage = document.querySelector(
      `${dialogSelector} [data-function="input-validation-error"]`
    )

    $dialog.close()
    if ($dialogValidationErrorMessage.textContent !== '') {
      $dialogValidationErrorMessage.textContent = ''
    }
  },
  outsideClick: ($dialog) => (e) => {
    if (e.target === $dialog) {
      $dialog.close()
    }
  }
}

export const dropdownSharedLogic = {
  showDropdown({ $tooltip, $dropdown }) {
    const $transparentBackground = document.querySelector('#transparent-background')

    $transparentBackground.classList.remove('visually-hidden')
    $tooltip.classList.add('visibility-hidden')
    $dropdown.classList.add('display-block')

    transparentBackgroundListeners({ onClick: this.closeDropdown, props: { $tooltip, $dropdown } })
  },
  closeDropdown({ $tooltip, $dropdown }) {
    return () => {
      const $transparentBackground = document.querySelector('#transparent-background')

      $transparentBackground.classList.add('visually-hidden')
      $tooltip.classList.remove('visibility-hidden')
      $dropdown.classList.remove('display-block')
    }
  }

}
