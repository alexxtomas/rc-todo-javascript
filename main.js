import SpaceElement from '@components/SpaceElement/SpaceElement'
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
        .map(({ name, priority }, idx) => {
          return SpaceElement({
            name,
            iconColor: PRIORITIES[priority.toUpperCase()].COLOR
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
       ${SpaceElement({ name: el.LABEL, iconColor: el.COLOR })}
      `
      })
      .join('')
      .replaceAll(',', '')}
`

dialogListeners()
