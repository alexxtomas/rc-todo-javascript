import Button from '@components/Button'
import { globalStore } from '@store/global.state'
import SpaceElement, { SPACE_ELEMENT_VARIANTS_ENUM } from '@components/SpaceElement'
import { PRIORITIES } from '@utils/constants'
import { HOME_CONTROLLER_ADD_BUTTON_PROPS } from './utils/constants'

export function homeContentLoader() {
  const $pageHeaderContent = document.querySelector('#page-header-content')

  $pageHeaderContent.innerHTML = Button(HOME_CONTROLLER_ADD_BUTTON_PROPS)

  const {
    state: { spaces }
  } = globalStore()

  if (spaces.length > 0 && spaces[0]?.name) {
    const $ul = document.querySelector('#spaces-container')
    $ul.innerHTML += `
       ${spaces
         .map(({ name, priority, id, tasks }) => {
          const iconColor = PRIORITIES[priority].color
           return SpaceElement({
             id,
             name,
             tasks,
             iconColor,
             variant: SPACE_ELEMENT_VARIANTS_ENUM.FUNCTIONAL
           })
         })
         .join('')
         .replaceAll(',', '')}
 `
  }

  const $prioritiesAsideContainer = document.querySelector('#priorities-aside-container')

  $prioritiesAsideContainer.innerHTML += `
     ${Object.values(PRIORITIES)
        .filter(priority => priority.label !== 'Not Assigned')
       .map((priority) => {
         return `
        ${SpaceElement({
          name: priority.label,
          iconColor: priority.color,
          variant: SPACE_ELEMENT_VARIANTS_ENUM.NORMAL
        })}
       `
       })
       .join('')
       .replaceAll(',', '')}
 `
}
