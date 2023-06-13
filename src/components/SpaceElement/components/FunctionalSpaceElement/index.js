import './style.css'
import Dialog from '@components/Dialog'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { getConfirmDialogProps, getFormDialogProps } from '../utils/functions'

const FunctionalSpaceElement = ({ name, iconColor, id, tasks }) => {
  return `
  <li id=${id} class='functional-space-element'>
  <a href="#/${id}" class="functional-space-element-anchore">
   <header class="functional-space-element-header">
    <h3 data-function="show-space-element-name" class="functional-space-element-title">${name}</h3>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.FLAG,
      props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor} data-function="show-space-element-priority"`
    })}
    </header>
    </a>
    <div class="functional-space-element-container">
    <button class="functional-space-element-first-button" data-function="edit-space-element"  data-id=${id}>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.EDIT,
      props: 'width=10px stroke-width="1.2" fill="none"'
    })}
    </button>
    <button class="remove-element" data-function="show-remove-space-element-dialog" data-id=${id}>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.TRASH,
      props: 'width=10px stroke-width="1" fill="none" '
    })}
    </button>
    </div>

  ${Dialog(getFormDialogProps())}

  ${Dialog(
    getConfirmDialogProps({ numberOfTasks: tasks.length, spaceName: name })
  )}
  
  </li>
  `
}

export default FunctionalSpaceElement
