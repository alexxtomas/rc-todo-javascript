import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { PRIORITIES } from '@utils/constants'
import './style.css'
import TaskElement from '@components/TaskElement'

const Tasks = ({ status, tasks, idx }) => {
  return `
  <div class="tasks-element" id=${status.name}>
  <header class="tasks-header">
    <div class="tasks-header-container">
     ${Icon({ variant: ICON_VARIANTS_ENUM.CHEVRON_RIGHT, props: `width=12px height=12px stroke-width="0.3" fill="none" data-function="tasks-accordion-toggle"  class="tasks-accordion-toggle rotate" data-id=${status.name}` })}
    <h3 data-function="show-tasks-status" class="tasks-status" style="background:${status.color}">${status.name}</h3>
      <p data-function="show-tasks-counter" class="tasks-counter">${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}</p>
   </div>
    <div data-function="tasks-labels-container" class="tasks-labels-container">
      <h4 class="tasks-label">Creation Date</h4>
      <h4 class="tasks-label">Priority</h4>
    </div>
    </header>
  <ul data-function="show-tasks" >
    ${tasks.map(({ creationDate, name, priority }) => {
    const iconColor = PRIORITIES[priority.toUpperCase().replaceAll(' ', '_')].COLOR

      return TaskElement({ creationDate, iconColor, name })
    }).join('').replaceAll(',', '')}
  

  </ul>
</div>
  `
}

export default Tasks
