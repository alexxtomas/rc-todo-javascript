import { $ } from '@utils/functions'

export function transparentBackgroundListeners({ onClick, props }) {
  const $transparentBackground = $('#transparent-background')
  $transparentBackground.addEventListener('click', onClick(props))
}
