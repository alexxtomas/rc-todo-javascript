import './style.css'
import Dialog from '@components/Dialog'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { getConfirmDialogProps, getFormDialogProps } from '../utils/functions'

const FunctionalSpaceElement = ({ name, iconColor, id, tasks }) => {
  return `
  <li id=${id} class='functionalSpaceElement'>
  <a href="#/${id}" data-function="navigate" class="functionalSpaceElementAnchore">
   <header class="functionalSpaceElementHeader">
    <h3 data-function="showSpaceElementName" class="functionalSpaceElementTitle">${name}</h3>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.FLAG,
      props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor} data-function="showSpaceElementPriority"`
    })}
    </header>
    </a>
    <div class="functionalSpaceElementContainer">
    <button class="functionalSpaceElementFirstButton" id="functionalSpaceElementEditButton" data-id=${id}>
    ${Icon({
      variant: ICON_VARIANTS_ENUM.EDIT,
      props: 'width=10px stroke-width="1.2" fill="none" '
    })}
    </button>
    <button class="functionalSpaceElementSecondButton" id="functionalSpaceElementTrashButton" data-id=${id}>
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
