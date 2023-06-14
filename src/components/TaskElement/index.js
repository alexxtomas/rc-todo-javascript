import './style.css'
import { getRemoveButtonProps, getPriorityDropdownButtonProps, getStatusDropdownButtonProps } from './utils/functions'
import Button from '@components/Button'

const TaskElement = ({ creationDate, name, iconColor, statusColor, id, statusId }) => {
  return `
  <li id=${id} class="task-element" data-status=${statusId}>
  <div class="tasks-element-container">
  ${Button(getStatusDropdownButtonProps({ statusColor, id }))}
    <h4 class="task-element-title">${name}</h4>
  </div>
  <div class="task-element-info-container">
    <p class="task-element-info-container-text">${creationDate}</p>
    ${Button(getPriorityDropdownButtonProps({ iconColor, id }))}
    ${Button(getRemoveButtonProps({ taskName: name, id }))}
  </div>
</li>
  `
}

export default TaskElement
