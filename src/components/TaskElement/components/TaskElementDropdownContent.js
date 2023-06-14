import { PRIORITIES } from '@utils/constants'
import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import './style.css'

const TaskElementDropdownListItems = () => {
  return `
  ${Object.entries(PRIORITIES).filter(([key]) => key !== 'NOT_ASSIGNED').map(([key, priority]) =>
  `<li class="task-element-dropdown-list-item" data-function="set-task-element-priority" data-priority-key=${key}>  ${Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${priority.color} color=${priority.color}` })} ${priority.label}</li>`).join('').replaceAll(',', '')}
  <li class="task-element-dropdown-list-item-divider"><li>
  <li class="task-element-dropdown-list-item" data-function="clear-task-element-priority"> ${Icon({ variant: ICON_VARIANTS_ENUM.XCIRCLE, props: 'width=12px stroke-width="0.8" fill="none"' })} Clear </li>
  `
}

export default TaskElementDropdownListItems
