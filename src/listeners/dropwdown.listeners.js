import { taskPriorityDropdownLogic, taskStatusDropdownLogic } from '@logic/dropdown.logic'

export const taskPriorityDropdownListenersObject = {
  showTaskElementPriorityButtonListeners() {
    const $$showTaskElementPriorityButton = document.querySelectorAll('[data-function="show-task-element-priority-button"]')

    $$showTaskElementPriorityButton.forEach($showTaskElementPriorityButton => {
      $showTaskElementPriorityButton.addEventListener('click',
        taskPriorityDropdownLogic.handleShowTaskElementPriorityButtonClick({ $showTaskElementPriorityButton, callbacks: [this.setTaskElementPriorityListeners, this.clearTaskElementPriorityListeners] })
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
export const taskStatusDropdownListenersObject = {
  showTaskElementStatusButtonListeners() {
    const $$showTaskElementPriorityButton = document.querySelectorAll('[data-function="show-task-element-status-button"]')

    $$showTaskElementPriorityButton.forEach($showTaskElementPriorityButton => {
      $showTaskElementPriorityButton.addEventListener('click',
        taskStatusDropdownLogic.handleShowTaskElementStatusButtonClick({ $showTaskElementPriorityButton, callbacks: [this.setTaskElementStatusListeners] })
      )
    })
  },
  setTaskElementStatusListeners({ taskId, task, $dropdown, $tooltip }) {
    const $$setTaskElementStatus = document.querySelectorAll(`#${taskId} [data-function="set-task-element-status"]`)
    $$setTaskElementStatus.forEach($setTaskElementStatus => {
      $setTaskElementStatus.addEventListener('click', taskStatusDropdownLogic.handleSetTaskElementStatusClick({ taskId, task, $dropdown, $tooltip, $setTaskElementStatus }))
    })
  }

}

export const taskPriorityDropdownListeners = () => {
  taskPriorityDropdownListenersObject.showTaskElementPriorityButtonListeners()
  taskStatusDropdownListenersObject.showTaskElementStatusButtonListeners()
}
