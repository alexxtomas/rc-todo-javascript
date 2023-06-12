import Dialog, { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { FORM_FIELDS_VARIANTS_ENUM } from '@components/Dialog/components/FormDialog/components/FormField'
import Tasks from '@components/Tasks'
import { newTaskDialogListeners } from '@listeners/dialog.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import { TASKS_STATUS } from '@utils/constants'
import '@views/Detail/style.css'

export const detailController = (id) => {
  syncGlobalStateWithLocalStorage(
  )
  const $pageHeaderContent = document.querySelector('#pageHeaderContent')

  $pageHeaderContent.innerHTML = `
    <button id="new-task" class="page-header-button">new task +</button>
    ${Dialog({
      variant: DIALOG_VARIANTS_ENUM.FORM,
      dialogAttributes: `id="new-task-dialog" data-id=${id}`,
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
  const { dispatch } = globalStore()

  const space = dispatch({ action: GLOBAL_ACTIONS_ENUM.GET_SPACE_BY_ID, payload: { id } })

  TASKS_STATUS.forEach((status, idx) => {
    const tasks = space.tasks.filter(task => task.status === status.name)
    $tasksContainer.innerHTML += Tasks({
      status,
      idx,
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

  newTaskDialogListeners()
}
