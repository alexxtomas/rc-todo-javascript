import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import './style.css'
import Dialog from '@components/Dialog'
import { getConfirmDialogProps } from './utils/functions'
import { PRIORITIES } from '@utils/constants'

const TaskElement = ({ creationDate, name, iconColor, statusColor, id }) => {
  return `
  <li id=${id} class="task-element">
  <div class="tasks-element-container">
    <div class="task-status-box"  style="background-color: ${statusColor}"></div>
    <h4 class="task-element-title">${name}</h4>
  </div>
  <div class="task-element-info-container">
    <p>${creationDate}</p>
    <button class="dropdown tooltip" data-function="show-task-element-priority-button" data-id=${id}>
    ${Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${iconColor} color="#000" data-function="show-task-element-priority" ` })}
    <span class="tooltiptext" data-function="show-tooltip-text">Set priority</span>
    <div class="dropdown-content" data-function="show-dropdown-content">
      <ul class="dropdown-list">
        ${Object.entries(PRIORITIES).filter(([key]) => key !== 'NOT_ASSIGNED').map(([key, priority]) =>
          `<li class="dropdown-list-item" data-function="set-task-element-priority" data-priority-key=${key}>  ${Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${priority.color} color=${priority.color}` })} ${priority.label}</li>`).join('').replaceAll(',', '')}
          <li class="dropdown-list-item-divider"><li>
          <li class="dropdown-list-item" data-function="clear-task-element-priority"> ${Icon({ variant: ICON_VARIANTS_ENUM.XCIRCLE, props: 'width=12px stroke-width="0.8" fill="none"' })} Clear </li>
      </ul>
    </div>
    </button>
    <button class="remove-element" data-function="show-remove-task-element-dialog" data-id=${id}>${Icon({ variant: ICON_VARIANTS_ENUM.TRASH, props: 'width=10px stroke-width="1" fill="none"' })}</button>
  </div>
   ${Dialog(getConfirmDialogProps({ taskName: name }))}
</li>
  `
}

export default TaskElement
