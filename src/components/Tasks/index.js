import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import { PRIORITIES } from '@utils/constants'
import './style.css'

const Tasks = ({ status, tasks }) => {
  return `
  <div class="backlogTasksContainer">
  <header class="backlogTasksHeader">
    <div class="backlogTasksHeaderContainer">
     ${Icon({ variant: ICON_VARIANTS_ENUM.CHEVRON_RIGHT, props: 'width=12px height=12px stroke-width="0.3" fill="none" id="backlogAccordionToggle" class="accordion-toggle rotate"' })}
    <h3 id="backlogTasksTitle" class="backlogTasksTitle">${status}</h3>
      <p id="backlogTasksCounter" class="backlogTasksCounter">${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}</p>
    
   </div>
    <div id="backlogTasksLabelsContainer" class="backlogTasksLabelsContainer">
      <h4 class="backlogTasksLabel">Created At</h4>
      <h4 class="backlogTasksLabel">Priority</h4>
    </div>
    </header>
  <ul id="backlogAccordionContent" class="backlogTasksList" class="accordion-content">
    ${tasks.map(task => {
    const iconColor = PRIORITIES[task.priority].color

      return `
        <li class="backlogTasksElement">
        <div class="backlogTaskElementContainer">
          <div></div>
          <h4 class="backlogTaskElementTitle">${task.name}</h4>
        </div>
        <div class="backlogTaskElementActionContainer">
          <p>${task.creationDate}</p>
          <p>${Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${iconColor} color=${iconColor} data-function="showSpaceElementPriority"` })}</p>
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
