import { PRIORITIES, TASKS_STATUS } from '@utils/constants'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import './style.css'
import TaskElementStatusBox from '../TaskElementStatusBox'

export const TASK_ELEMENT_DROPDOWN_LIST_ITEMS_VARIANTS = {
  PRIORITY: 'PRIORITY',
  STATUS: 'STATUS'
}

const TaskElementDropdownListItems = ({ variant }) => {
  if (variant === TASK_ELEMENT_DROPDOWN_LIST_ITEMS_VARIANTS.STATUS) {
    return `
      ${Object.entries(TASKS_STATUS).map(([key, status]) => `<li class="task-element-dropdown-list-item" data-function="set-task-element-status" data-status-key=${key}> ${TaskElementStatusBox({ statusColor: status.color })} ${status.label}</li>`).join('').replaceAll(',', '')}
    `
  }
  return `
  ${Object.entries(PRIORITIES).filter(([key]) => key !== 'NOT_ASSIGNED').map(([key, priority]) =>
  `<li class="task-element-dropdown-list-item" data-function="set-task-element-priority" data-priority-key=${key}>  ${Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${priority.color} color=${priority.color}` })} ${priority.label}</li>`).join('').replaceAll(',', '')}
  <li class="task-element-dropdown-list-item-divider"><li>
  <li class="task-element-dropdown-list-item" data-function="clear-task-element-priority"> ${Icon({ variant: ICON_VARIANTS_ENUM.XCIRCLE, props: 'width=12px stroke-width="0.8" fill="none"' })} Clear </li>
  `
}

export default TaskElementDropdownListItems
