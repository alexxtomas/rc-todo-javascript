import './style.css'
import Dialog from '@components/Dialog'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { getFormDialogProps, getRemoveButtonProps } from './utils/functions'
import Button from '@components/Button'

const SpaceElement = ({ name, iconColor, id, tasks }) => {
  return `
  <li id=${id} class='space-element'>
  <a href="#/${id}" class="space-element-anchore">
   <header class="space-element-header">
    <h3 data-function="show-space-element-name" class="space-element-title">${name}</h3>
    </header>
    </a>
    <div class="space-element-container">
    <button class="space-element-first-button" data-function="edit-space-element"  data-id=${id}>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.EDIT,
      props: 'width=16px stroke-width="1.2" fill="none"'
    })}
    </button>
    ${Button(
      getRemoveButtonProps({ spaceName: name, numberOfTasks: tasks.length, id })
    )}
   
    </div>
  ${Dialog(getFormDialogProps())}
  </li>
  `
}

export default SpaceElement
