import SpaceElement, {
  SPACE_ELEMENT_VARIANTS_ENUM
} from '@components/SpaceElement/SpaceElement'
import { PRIORITIES } from './src/utils/constants'
import './style.css'
import {
  newSpaceDialogListeners,
  removeSpaceDialogListeners
} from '@listeners/dialog.listeners'
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
        .map(({ name, priority, id, tasks }, idx) => {
          return SpaceElement({
            id,
            name,
            tasks,
            iconColor: PRIORITIES[priority.toUpperCase()].COLOR,
            variant: SPACE_ELEMENT_VARIANTS_ENUM.FUNCTIONAL
          })
        })
        .join('')
        .replaceAll(',', '')}
`
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
removeSpaceDialogListeners()
newSpaceDialogListeners()
