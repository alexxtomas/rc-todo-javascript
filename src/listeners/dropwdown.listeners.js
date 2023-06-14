import { taskPriorityDropdownLogic } from '@logic/dropdown.logic'

export const taskPriorityDropdownListenersObject = {
  showTaskElementPriorityButtonListeners() {
    const $$showTaskElementPriorityButton = document.querySelectorAll('[data-function="show-task-element-priority-button"]')

    $$showTaskElementPriorityButton.forEach($showTaskElementPriorityButton => {
      $showTaskElementPriorityButton.addEventListener('click',
        taskPriorityDropdownLogic.handleShowTaskElementPriorityButtonClick({ $showTaskElementPriorityButton, callbacks: [taskPriorityDropdownListenersObject.setTaskElementPriorityListeners, taskPriorityDropdownListenersObject.clearTaskElementPriorityListeners] })
      )
    })
  },
  setTaskElementPriorityListeners({ taskId, task, $dropdown, $tooltip }) {
    const $$setTaskElementPriority = document.querySelectorAll(`#${taskId} [data-function="set-task-element-priority"]`)
    $$setTaskElementPriority.forEach($setTaskElementPriority => {
      $setTaskElementPriority.addEventListener('click', taskPriorityDropdownLogic.handleSetTaskElementPriorityClick({ taskId, task, $dropdown, $tooltip, $setTaskElementPriority }))
    })
  },
  clearTaskElementPriorityListeners({ taskId, task, $dropdown, $tooltip }) {
    const $clearTaskElementPriority = document.querySelector(`#${taskId} [data-function="clear-task-element-priority"]`)
    $clearTaskElementPriority.addEventListener('click', taskPriorityDropdownLogic.handleClearTaskElementPriorityClick({ taskId, task, $dropdown, $tooltip }))
  }

}

export const taskPriorityDropdownListeners = () => {
  taskPriorityDropdownListenersObject.showTaskElementPriorityButtonListeners()
}
