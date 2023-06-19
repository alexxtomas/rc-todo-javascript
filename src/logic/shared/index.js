import { transparentBackgroundListeners } from '@listeners/transparentBackground.listeners'
import { $ } from '@utils/functions'


export const dialogSharedLogic = {
  showDialogClick: ($dialog) => (e) => {
    e.stopPropagation()
    $dialog.showModal()
  },
  closeDialogClick: ($dialog, dialogSelector, callback) => (e) => {
    e.stopPropagation()
    $dialog.close()

    if (dialogSelector) {
      const $dialogValidationErrorMessage = $(
        `${dialogSelector} [data-function="input-validation-error"]`
      )
      if ($dialogValidationErrorMessage.textContent !== '') {
        $dialogValidationErrorMessage.textContent = ''
      }
    }
    callback && callback()
  },
  outsideClick: ($dialog) => (e) => {
    e.stopPropagation()
    if (e.target === $dialog) {
      $dialog.close()
    }
  }
}

export const dropdownSharedLogic = {
  showDropdown({ $tooltip, $dropdown }) {
    const $transparentBackground = $('#transparent-background')
    $transparentBackground.classList.remove('visually-hidden')
    $tooltip.classList.add('visibility-hidden')
    $dropdown.classList.add('display-block')

    transparentBackgroundListeners({ onClick: this.closeDropdown, props: { $tooltip, $dropdown } })
  },
  closeDropdown({ $tooltip, $dropdown }) {
    return () => {
      const $transparentBackground = $('#transparent-background')

      $transparentBackground.classList.add('visually-hidden')
      $tooltip.classList.remove('visibility-hidden')
      $dropdown.classList.remove('display-block')
    }
  }

}
