import './style.css'

const TaskElementStatusBox = ({ statusColor }) => {
  return `<div class="task-status-box" style="background-color: ${statusColor}" data-function="show-task-element-status"></div>`
}

export default TaskElementStatusBox
