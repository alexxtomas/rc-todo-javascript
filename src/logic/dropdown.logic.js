import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import { PRIORITIES, PRIORITIES_ENUM, TASKS_STATUS } from '@utils/constants'
import { dropdownSharedLogic } from './shared'
import { $ } from '@utils/functions'

export const taskPriorityDropdownLogic = {
  handleShowTaskElementPriorityButtonClick({
    $showTaskElementPriorityButton,
    callbacks
  }) {
    return (e) => {
      e.stopPropagation()
      const {
        dispatch,
        state: { focusedSpace }
      } = globalStore()
      const taskId = $showTaskElementPriorityButton.getAttribute('data-id')
      const task = dispatch({
        action: GLOBAL_ACTIONS_ENUM.GET_TASK_BY_ID,
        payload: { spaceId: focusedSpace.id, taskId }
      })
      const $tooltip = $(
        `#${taskId} [data-function="show-task-element-priority-tooltip-text"]`
      )
      const $dropdown = $(
        `#${taskId} [data-function="show-task-element-priority-dropdown-content"]`
      )

      dropdownSharedLogic.showDropdown({ $dropdown, $tooltip })

      callbacks.forEach((callbackFunction) =>
        callbackFunction({ taskId, task, $dropdown, $tooltip })
      )
    }
  },
  handleSetTaskElementPriorityClick({
    taskId,
    task,
    $dropdown,
    $tooltip,
    $setTaskElementPriority
  }) {
    const changeTaskPriority = this.changeTaskPriority
    return (e) => {
      e.stopPropagation()
      const priorityKey =
        $setTaskElementPriority.getAttribute('data-priority-key')
      const priorityColor = PRIORITIES[priorityKey].color
      const $svg = $(`#${taskId} [data-function="show-task-element-priority"]`)

      if (task.priority === priorityKey) {
        dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
        return
      }

      changeTaskPriority({
        priorityKey,
        style: { fill: priorityColor, color: priorityColor },
        $svg,
        taskId
      })

      dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
    }
  },
  handleClearTaskElementPriorityClick({ taskId, task, $dropdown, $tooltip }) {
    const changeTaskPriority = this.changeTaskPriority
    return (e) => {
      e.stopPropagation()
      const $svg = $(`#${taskId} [data-function="show-task-element-priority"]`)

      if (task.priority === PRIORITIES_ENUM.NOT_ASSIGNED) {
        dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
        return
      }

      changeTaskPriority({
        style: { fill: 'none', color: '#000' },
        $svg,
        taskId,
        priorityKey: PRIORITIES_ENUM.NOT_ASSIGNED
      })

      dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
    }
  },

  changeTaskPriority({ priorityKey, style, $svg, taskId }) {
    const {
      dispatch,
      state: { focusedSpace }
    } = globalStore()

    dispatch({
      action: GLOBAL_ACTIONS_ENUM.SET_TASK_PRIORITY,
      payload: { spaceId: focusedSpace.id, taskId, priority: priorityKey }
    })

    $svg.style.fill = style.fill
    $svg.style.color = style.color
  }
}

export const taskStatusDropdownLogic = {
  handleShowTaskElementStatusButtonClick({
    $showTaskElementPriorityButton,
    callbacks
  }) {
    return (e) => {
      e.stopPropagation()
      const {
        dispatch,
        state: { focusedSpace }
      } = globalStore()
      const taskId = $showTaskElementPriorityButton.getAttribute('data-id')
      const task = dispatch({
        action: GLOBAL_ACTIONS_ENUM.GET_TASK_BY_ID,
        payload: { spaceId: focusedSpace.id, taskId }
      })
      const $tooltip = $(
        `#${taskId} [data-function="show-task-element-status-tooltip-text"]`
      )
      const $dropdown = $(
        `#${taskId} [data-function="show-task-element-status-dropdown-content"]`
      )

      dropdownSharedLogic.showDropdown({ $dropdown, $tooltip })

      callbacks.forEach((callbackFunction) =>
        callbackFunction({ taskId, task, $dropdown, $tooltip })
      )
    }
  },
  handleSetTaskElementStatusClick({
    $setTaskElementStatus,
    taskId,
    task,
    $dropdown,
    $tooltip
  }) {
    return (e) => {
      e.stopPropagation()
      const {
        dispatch,
        state: { focusedSpace }
      } = globalStore()
      const statusKey = $setTaskElementStatus.getAttribute('data-status-key')
      const status = TASKS_STATUS[statusKey]
      const $showTaskElementStatus = $(
        `#${taskId} [data-function="show-task-element-status"]`
      )
      const $showTasks = $(`#${statusKey} [data-function="show-tasks"]`)
      const $taskElement = $(`#${taskId}`)
      const $previousCounter = $(
        `#${task.status} [data-function="show-tasks-counter"]`
      )

      const $nextCounter = $(
        `#${statusKey} [data-function="show-tasks-counter"]`
      )
      const $nextCounterSpan = $(
        `#${statusKey} [data-function="show-tasks-counter-span"]`
      )

      console.log($nextCounterSpan)

      if (task.status === statusKey) {
        dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
        return
      }

      const prevoiousCounterValue = Number($previousCounter.dataset.counter) - 1
      const nextCounterValue = Number($nextCounter.dataset.counter) + 1

      $showTaskElementStatus.style.backgroundColor = status.color
      $taskElement.remove()
      $previousCounter.textContent = `${prevoiousCounterValue} ${
        prevoiousCounterValue === 1 ? 'task' : 'tasks'
      }`
      $showTasks.appendChild($taskElement)
      $nextCounter.textContent = `${nextCounterValue} ${
        nextCounterValue === 1 ? 'task' : 'tasks'
      }`
      $previousCounter.dataset.counter = prevoiousCounterValue
      $nextCounter.dataset.counter = nextCounterValue

      if ($nextCounterSpan) {
        $nextCounterSpan.dataset.counter = nextCounterValue
        $nextCounterSpan.textContent = `${nextCounterValue} ${
          nextCounterValue === 1 ? 'task' : 'tasks'
        }`
      }

      dispatch({
        action: GLOBAL_ACTIONS_ENUM.SET_TASK_STATUS,
        payload: { spaceId: focusedSpace.id, taskId, statusKey }
      })

      dropdownSharedLogic.closeDropdown({ $dropdown, $tooltip })()
    }
  }
}
