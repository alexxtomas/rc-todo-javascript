import SpaceElement, {
  SPACE_ELEMENT_VARIANTS_ENUM
} from '@components/SpaceElement/SpaceElement'
import { PRIORITIES } from './src/utils/constants'
import './style.css'
import { dialogListeners } from '@listeners/dialog.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import { globalStore } from '@store/global.state'

syncGlobalStateWithLocalStorage()

const {
  state: { spaces }
} = globalStore()

if (spaces.length > 0 && spaces[0]?.name) {
  const $ul = document.querySelector('#spacesContainer')
  $ul.innerHTML += `
      ${spaces
        .map(({ name, priority, id }, idx) => {
          return SpaceElement({
            id,
            name,
            iconColor: PRIORITIES[priority.toUpperCase()].COLOR,
            variant: SPACE_ELEMENT_VARIANTS_ENUM.FUNCTIONAL
          })
        })
        .join('')
        .replaceAll(',', '')}
`
  const $trashButton = document.querySelector(
    '#functionalSpaceElementTrashButton'
  )
  // Here, add id to li element to delete from DOM and dispatch removeSpace action
  $trashButton.addEventListener('click', () => {
    const id = $trashButton.getAttribute('data-id')
  })
}

const $asideUL = document.querySelector('aside > ul')

$asideUL.innerHTML += `
    ${Object.values(PRIORITIES)
      .map((el) => {
        return `
       ${SpaceElement({
         name: el.LABEL,
         iconColor: el.COLOR,
         variant: SPACE_ELEMENT_VARIANTS_ENUM.NORMAL
       })}
      `
      })
      .join('')
      .replaceAll(',', '')}
`

dialogListeners()
