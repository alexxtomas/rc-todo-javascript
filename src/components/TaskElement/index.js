import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon'
import './style.css'

const TaskElement = ({ creationDate, name, iconColor }) => {
  return `
  <li class="task-element">
  <div class="tasks-element-container">
    <div></div>
    <h4 class="task-element-title">${name}</h4>
  </div>
  <div class="task-element-info-container">
    <p>${creationDate}</p>
    <p>${Icon({ variant: ICON_VARIANTS_ENUM.FLAG, props: `width=10px stroke-width="0.8" fill=${iconColor} color="#000" data-function="show-space-element-priority"` })}</p>
    <p>${Icon({ variant: ICON_VARIANTS_ENUM.TRASH, props: 'width=10px stroke-width="1" fill="none"' })}</p>
  </div>
</li>
  `
}

export default TaskElement
