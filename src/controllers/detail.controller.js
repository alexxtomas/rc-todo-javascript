import Tasks from '@components/Tasks'
import { newTaskDialogListeners } from '@listeners/dialog.listeners'
import { TASKS_STATUS } from '@utils/constants'
import '@views/Detail/style.css'

export const detailController = (id) => {
  const $tasksContainer = document.querySelector('#tasks-container')

  TASKS_STATUS.forEach((status, idx) => {
    $tasksContainer.innerHTML += Tasks({
      status,
      idx,
      tasks: [
        {
          name: 'Clean the house',
          description: 'Clean the house',
          priority: 'LOW',
          creationDate: new Date().toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric' })
        },
        {
          name: 'Clean the house',
          description: 'Clean the house',
          priority: 'LOW',
          creationDate: new Date().toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric' })
        }
      ]
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
