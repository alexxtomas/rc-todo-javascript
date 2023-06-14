import Dialog, { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { FORM_FIELDS_VARIANTS_ENUM } from '@components/Dialog/components/FormDialog/components/FormField'
import Tasks from '@components/Tasks'
import { newTaskDialogListeners, removeTaskDialogListeners } from '@listeners/dialog.listeners'
import { taskPriorityDropdownListeners } from '@listeners/dropwdown.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import { globalStore } from '@store/global.state'
import { TASKS_STATUS } from '@utils/constants'
import '@views/Detail/style.css'

export const detailController = () => {
  const { state: { focusedSpace } } = globalStore()

  syncGlobalStateWithLocalStorage(
  )
  const $pageHeaderContent = document.querySelector('#pageHeaderContent')

  $pageHeaderContent.innerHTML = `
    <button id="new-task" class="page-header-button">new task +</button>
    ${Dialog({
      variant: DIALOG_VARIANTS_ENUM.FORM,
      dialogAttributes: 'id="new-task-dialog"',
      formAttributes: 'id="new-task-form"',
      elements: [
        {
           variant: FORM_FIELDS_VARIANTS_ENUM.INPUT,
          attributes: 'id="new-task-name" name="newTaskName" type="text"',
        label: {
          attributes: 'for="new-task-name"',
          text: 'Task name'
          }
        }
      ],
      firstButton: {
        attributes: 'type="submit" value="default"',
        text: 'Save'
      },
      secondButton: {
        attributes:
         'type="reset" id="cancel-new-task-button" value="cancel" formmethod="dialog"',
        text: 'Close'
      }
    })}
  `

  const $tasksContainer = document.querySelector('#tasks-container')

  Object.entries(TASKS_STATUS).forEach(([key, value]) => {
    const tasks = focusedSpace.tasks.filter(task => task.status === key)
    $tasksContainer.innerHTML += Tasks({
      color: value.color,
      id: key,
      label: value.label,
      tasks
    })
  })

  const $$toggle = document.querySelectorAll('[data-function="tasks-accordion-toggle"]')

  $$toggle.forEach($toggle => {
    $toggle.addEventListener('click', () => {
      const id = $toggle.getAttribute('data-id')
      const $content = document.querySelector(`#${id} [data-function="show-tasks"]`)
      if (!$content) return

      const $labelsContainer = document.querySelector(`#${id} [data-function="tasks-labels-container"]`)
      const $tasksCounter = document.querySelector(`#${id} [data-function="show-tasks-counter"]`)
      const $tasksStatus = document.querySelector(`#${id} [data-function="show-tasks-status"]`)

      if (!$content.classList.contains('inactive')) {
        $toggle.setAttribute('aria-expanded', 'false')
        $toggle.classList.remove('rotate')
        $content.classList.add('inactive')
        $labelsContainer.classList.add('inactive')
        $tasksCounter.classList.add('inactive')
        $tasksStatus.innerHTML = `${$tasksStatus.textContent} <span class="tasks-status-counter">${$tasksCounter.textContent}</span>`
        return
      }

      $toggle.setAttribute('aria-expanded', 'false')
      $toggle.classList.add('rotate')
      $content.classList.remove('inactive')
      $labelsContainer.classList.remove('inactive')
      $tasksCounter.classList.remove('inactive')
      $tasksStatus.innerHTML = $tasksStatus.textContent.split(' ').slice(0, -2).join(' ')
    })
  })

  // const $$showTaskElementPriorityButton = document.querySelectorAll('[data-function="show-task-element-priority-button"]')

  // $$showTaskElementPriorityButton.forEach($showTaskElementPriorityButton => {
  //   $showTaskElementPriorityButton.addEventListener('click', (e) => {
  //     e.stopPropagation()
  //     const taskId = $showTaskElementPriorityButton.getAttribute('data-id')
  //     const task = dispatch({ action: GLOBAL_ACTIONS_ENUM.GET_TASK_BY_ID, payload: { spaceId: focusedSpace.id, taskId } })
  //     const $transparentBackground = document.querySelector('#transparent-background')
  //     const $showTooltipText = document.querySelector(`#${taskId} [data-function="show-tooltip-text"]`)
  //     const $showDropdownContent = document.querySelector(`#${taskId} [data-function="show-dropdown-content"]`)

  //     $transparentBackground.classList.remove('visually-hidden')
  //     $showTooltipText.classList.add('visibility-hidden')
  //     $showDropdownContent.classList.add('display-block')

  //     $transparentBackground.addEventListener('click', () => {
  //       $transparentBackground.classList.add('visually-hidden')
  //       $showTooltipText.classList.remove('visibility-hidden')
  //       $showDropdownContent.classList.remove('display-block')
  //     })

  //     const $$setTaskElementPriority = document.querySelectorAll(`#${taskId} [data-function="set-task-element-priority"]`)

  //     const $clearTaskElementPriority = document.querySelector(`#${taskId} [data-function="clear-task-element-priority"]`)

  //     $$setTaskElementPriority.forEach($setTaskElementPriority => {
  //       $setTaskElementPriority.addEventListener('click', (e) => {
  //         e.stopPropagation()
  //         const $transparentBackground = document.querySelector('#transparent-background')
  //         const $showTooltipText = document.querySelector(`#${taskId} [data-function="show-tooltip-text"]`)
  //         const $showDropdownContent = document.querySelector(`#${taskId} [data-function="show-dropdown-content"]`)
  //         const priorityKey = $setTaskElementPriority.getAttribute('data-priority-key')
  //         const priority = PRIORITIES[priorityKey]

  //         if (task.priority === priorityKey) {
  //           $transparentBackground.classList.add('visually-hidden')
  //           $showTooltipText.classList.remove('visibility-hidden')
  //           $showDropdownContent.classList.remove('display-block')
  //           return
  //         }

  //         dispatch({ action: GLOBAL_ACTIONS_ENUM.SET_TASK_PRIORITY, payload: { spaceId: focusedSpace.id, taskId, priority: priorityKey } })

  //         const $showTaskPriority = document.querySelector(`#${taskId} [data-function="show-task-element-priority"]`)

  //         $showTaskPriority.style.fill = priority.color
  //         $showTaskPriority.style.color = priority.color

  //         console.log($transparentBackground, $showTooltipText, $showDropdownContent)

  //         $transparentBackground.classList.add('visually-hidden')
  //         $showTooltipText.classList.remove('visibility-hidden')
  //         $showDropdownContent.classList.remove('display-block')
  //       })
  //     })

  //     $clearTaskElementPriority.addEventListener('click', (e) => {
  //       e.stopPropagation()
  //       if (task.priority === PRIORITIES_ENUM.NOT_ASSIGNED) {
  //         $transparentBackground.classList.add('visually-hidden')
  //         $showTooltipText.classList.remove('visibility-hidden')
  //         $showDropdownContent.classList.remove('display-block')
  //         return
  //       }
  //       dispatch({ action: GLOBAL_ACTIONS_ENUM.SET_TASK_PRIORITY, payload: { spaceId: focusedSpace.id, taskId, priority: PRIORITIES_ENUM.NOT_ASSIGNED } })

  //       const $showTaskPriority = document.querySelector(`#${taskId} [data-function="show-task-element-priority"]`)
  //       $showTaskPriority.style.fill = 'none'
  //       $showTaskPriority.style.color = '#000'

  //       $transparentBackground.classList.add('visually-hidden')
  //       $showTooltipText.classList.remove('visibility-hidden')
  //       $showDropdownContent.classList.remove('display-block')
  //     })
  //   })
  // })
  // const closeDropdown = ({ $tooltip, $dropdown }) => () => {
  //   const $transparentBackground = document.querySelector('#transparent-background')

  //   $transparentBackground.classList.add('visually-hidden')
  //   $tooltip.classList.remove('visibility-hidden')
  //   $dropdown.classList.remove('display-block')
  // }

  // function showDropDown({ $tooltip, $dropdown }) {
  //   const $transparentBackground = document.querySelector('#transparent-background')

  //   $transparentBackground.classList.remove('visually-hidden')
  //   $tooltip.classList.add('visibility-hidden')
  //   $dropdown.classList.add('display-block')

  //   transparentBackgroundListeners({ onClick: closeDropdown, props: { $tooltip, $dropdown } })
  // }

  // function changeTaskPriority({ priorityKey, style, $svg, taskId }) {
  //   const { dispatch, state: { focusedSpace } } = globalStore()

  //   dispatch({ action: GLOBAL_ACTIONS_ENUM.SET_TASK_PRIORITY, payload: { spaceId: focusedSpace.id, taskId, priority: priorityKey } })

  //   $svg.style.fill = style.fill
  //   $svg.style.color = style.color
  // }

  // const $$showTaskElementPriorityButton = document.querySelectorAll('[data-function="show-task-element-priority-button"]')

  // $$showTaskElementPriorityButton.forEach($showTaskElementPriorityButton => {
  //   $showTaskElementPriorityButton.addEventListener('click', (e) => {
  //     e.stopPropagation()
  //     const taskId = $showTaskElementPriorityButton.getAttribute('data-id')
  //     const task = dispatch({ action: GLOBAL_ACTIONS_ENUM.GET_TASK_BY_ID, payload: { spaceId: focusedSpace.id, taskId } })
  //     const $tooltip = document.querySelector(`#${taskId} [data-function="show-tooltip-text"]`)
  //     const $dropdown = document.querySelector(`#${taskId} [data-function="show-dropdown-content"]`)

  //     showDropDown({ $dropdown, $tooltip })

  //     const $$setTaskElementPriority = document.querySelectorAll(`#${taskId} [data-function="set-task-element-priority"]`)

  //     const $clearTaskElementPriority = document.querySelector(`#${taskId} [data-function="clear-task-element-priority"]`)

  //     $$setTaskElementPriority.forEach($setTaskElementPriority => {
  //       $setTaskElementPriority.addEventListener('click', (e) => {
  //         e.stopPropagation()
  //         const priorityKey = $setTaskElementPriority.getAttribute('data-priority-key')
  //         const priorityColor = PRIORITIES[priorityKey].color
  //         const $svg = document.querySelector(`#${taskId} [data-function="show-task-element-priority"]`)

  //         if (task.priority === priorityKey) {
  //           closeDropdown({ $dropdown, $tooltip })()
  //           return
  //         }

  //         changeTaskPriority({ priorityKey, style: { fill: priorityColor, color: priorityColor }, $svg, taskId })

  //         closeDropdown({ $dropdown, $tooltip })()
  //       })
  //     })

  //     $clearTaskElementPriority.addEventListener('click', (e) => {
  //       e.stopPropagation()
  //       const $svg = document.querySelector(`#${taskId} [data-function="show-task-element-priority"]`)

  //       if (task.priority === PRIORITIES_ENUM.NOT_ASSIGNED) {
  //         closeDropdown({ $dropdown, $tooltip })()
  //         return
  //       }

  //       changeTaskPriority({ style: { fill: 'none', color: '#000' }, $svg, taskId, priorityKey: PRIORITIES_ENUM.NOT_ASSIGNED })

  //       closeDropdown({ $dropdown, $tooltip })()
  //     })
  //   })
  // })

  taskPriorityDropdownListeners()

  newTaskDialogListeners()
  removeTaskDialogListeners()
}
