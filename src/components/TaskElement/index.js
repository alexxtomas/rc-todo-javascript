import './style.css'
import { getRemoveButtonProps, getDropdownButtonProps } from './utils/functions'
import Button from '@components/Button'

const TaskElement = ({ creationDate, name, iconColor, statusColor, id, statusId }) => {
  return `
  <li id=${id} class="task-element" data-status=${statusId}>
  <div class="tasks-element-container">
    <div class="task-status-box"  style="background-color: ${statusColor}"></div>
    <h4 class="task-element-title">${name}</h4>
  </div>
  <div class="task-element-info-container">
    <p class="task-element-info-container-text">${creationDate}</p>
    ${Button(getDropdownButtonProps({ iconColor, id }))}
    ${Button(getRemoveButtonProps({ taskName: name, id }))}
  </div>
</li>
  `
}

export default TaskElement
