import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { PRIORITIES } from '@utils/constants'
import './style.css'

const Tasks = ({ status, tasks }) => {
  return `
  <div class="tasks-element">
  <header class="tasks-header">
    <div class="tasks-header-container">
     ${Icon({ variant: ICON_VARIANTS_ENUM.CHEVRON_RIGHT, props: 'width=12px height=12px stroke-width="0.3" fill="none" data-function="tasks-accordion-toggle" id="tasks-accordion-toggle" class="tasks-accordion-toggle rotate"' })}
    <h3 id="tasks-status" class="tasks-status">${status}</h3>
      <p id="tasks-counter" class="tasks-counter">${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}</p>
    
   </div>
    <div id="tasks-labels-container" class="tasks-labels-container">
      <h4 class="tasks-label">Created At</h4>
      <h4 class="tasks-label">Priority</h4>
    </div>
    </header>
  <ul id="tasks-accordion-content">
    ${tasks.map(task => {
    const iconColor = PRIORITIES[task.priority].color

      return `
        <li class="task-element">
        <div class="tasks-element-container">
          <div></div>
          <h4 class="task-element-title">${task.name}</h4>
        </div>
        <div class="task-element-info-container">
          <p>${task.creationDate}</p>
          <p>${Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor} data-function="show-space-element-priority"` })}</p>
          <p>${Icon({ variant: ICON_VARIANTS_ENUM.TRASH, props: 'width=10px stroke-width="1" fill="none"' })}</p>
        </div>
      </li>
      `
    }).join('').replaceAll(',', '')}
  

  </ul>
</div>
  `
}

export default Tasks
