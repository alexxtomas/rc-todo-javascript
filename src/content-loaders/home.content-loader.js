import Button from '@components/Button'
import { globalStore } from '@store/global.state'
import SpaceElement from '@components/SpaceElement'
import { HOME_CONTROLLER_ADD_BUTTON_PROPS } from './utils/constants'
import { $ } from '@utils/functions'

export function homeContentLoader() {
  const $pageHeaderContent = $('#page-header-content')

  $pageHeaderContent.innerHTML = Button(HOME_CONTROLLER_ADD_BUTTON_PROPS)

  const {
    state: { spaces }
  } = globalStore()

  if (spaces.length > 0 && spaces[0]?.name) {
    const $ul = $('#spaces-container')
    $ul.innerHTML += `
       ${spaces
         .map(({ name, priority, id, tasks }) => {
           return SpaceElement({
             id,
             name,
             tasks
           })
         })
         .join('')
         .replaceAll(',', '')}
 `
  }
}
