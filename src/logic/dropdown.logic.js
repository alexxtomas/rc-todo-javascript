import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import { PRIORITIES, PRIORITIES_ENUM } from '@utils/constants'
import { dropdownSharedLogic } from './shared'

export const taskPriorityDropdownLogic = {
  handleShowTaskElementPriorityButtonClick({ $showTaskElementPriorityButton, callbacks }) {
    return (e) => {
      e.stopPropagation()
      const { dispatch, state: { focusedSpace } } = globalStore()
      const taskId = $showTaskElementPriorityButton.getAttribute('data-id')
      const task = dispatch({ action: GLOBAL_ACTIONS_ENUM.GET_TASK_BY_ID, payload: { spaceId: focusedSpace.id, taskId } })
      const $tooltip = document.querySelector(`#${taskId} [data-function="show-tooltip-text"]`)
      const $dropdown = document.querySelector(`#${taskId} [data-function="show-dropdown-content"]`)

      dropdownSharedLogic.showDropdown({ $dropdown, $tooltip })

      callbacks.forEach(callbackFunction => callbackFunction({ taskId, task, $dropdown, $tooltip }))
    }
  },
  handleSetTaskElementPriorityClick({ taskId, task, $dropdown, $tooltip, $setTaskElementPriority }) {
    const changeTaskPriority = this.changeTaskPriority
    return (e) => {
      e.stopPropagation()
      const priorityKey = $setTaskElementPriority.getAttribute('data-priority-key')
      const priorityColor = PRIORITIES[priorityKey].color
      const $svg = document.querySelector(`#${taskId} [data-function="show-task-element-priority"]`)

      if (task.priority === priorityKey) {
        dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
        return
      }

      changeTaskPriority({ priorityKey, style: { fill: priorityColor, color: priorityColor }, $svg, taskId })

      dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
    }
  },
  handleClearTaskElementPriorityClick({ taskId, task, $dropdown, $tooltip }) {
    const changeTaskPriority = this.changeTaskPriority
    return (e) => {
      e.stopPropagation()
      const $svg = document.querySelector(`#${taskId} [data-function="show-task-element-priority"]`)

      if (task.priority === PRIORITIES_ENUM.NOT_ASSIGNED) {
        dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
        return
      }

      changeTaskPriority({ style: { fill: 'none', color: '#000' }, $svg, taskId, priorityKey: PRIORITIES_ENUM.NOT_ASSIGNED })

      dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
    }
  },

  changeTaskPriority({ priorityKey, style, $svg, taskId }) {
    const { dispatch, state: { focusedSpace } } = globalStore()

    dispatch({ action: GLOBAL_ACTIONS_ENUM.SET_TASK_PRIORITY, payload: { spaceId: focusedSpace.id, taskId, priority: priorityKey } })

    $svg.style.fill = style.fill
    $svg.style.color = style.color
  }

}
