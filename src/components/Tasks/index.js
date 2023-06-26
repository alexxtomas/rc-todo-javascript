import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { PRIORITIES } from '@utils/constants'
import './style.css'
import TaskElement from '@components/TaskElement'

const Tasks = ({ color, id, label, tasks }) => {
  const tasksLength = tasks.length
  return `
  <div class="tasks-element" id=${id}>
  <header class="tasks-header">
    <div class="tasks-header-container">
     ${Icon({
       variant: ICON_VARIANTS_ENUM.CHEVRON_RIGHT,
       props: `width=20px height=20px stroke-width="0.3" fill="none" data-function="tasks-accordion-toggle"  class="tasks-accordion-toggle rotate" data-id=${id}`
     })}
    <h3 data-function="show-tasks-status" class="tasks-status" style="background:${color}">${label}</h3>
      <p data-function="show-tasks-counter" data-counter=${tasksLength} class="tasks-counter">${tasksLength} ${
    tasksLength === 1 ? 'Task' : 'Tasks'
  }</p>
   </div>
    <div data-function="tasks-labels-container" class="tasks-labels-container">
      <h4 class="tasks-label">Creation Date</h4>
      <h4 class="tasks-label">Priority</h4>
    </div>
    </header>
  <ul data-function="show-tasks" >
    ${tasks
      .map(({ id: taskId, creationDate, name, priority }) => {
        const iconColor = PRIORITIES[priority].color
        return TaskElement({
          id: taskId,
          creationDate,
          iconColor,
          name,
          statusColor: color,
          statusId: id
        })
      })
      .join('')
      .replaceAll(',', '')}
  

  </ul>
</div>
  `
}

export default Tasks
