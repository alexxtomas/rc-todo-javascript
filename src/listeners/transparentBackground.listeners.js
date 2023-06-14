export function transparentBackgroundListeners({ onClick, props }) {
  const $transparentBackground = document.querySelector('#transparent-background')
  $transparentBackground.addEventListener('click', onClick(props))
}
