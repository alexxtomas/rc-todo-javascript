import Tasks from '@components/Tasks'
import { newTaskDialogListeners } from '@listeners/dialog.listeners'
import '@views/Detail/style.css'

export const detailController = (id) => {
  const $tasksContainer = document.querySelector('#tasks-container')

  $tasksContainer.innerHTML = Tasks({
    status: 'backlog',
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
  const $toggle = document.querySelector('#tasks-accordion-toggle')

  $toggle.addEventListener('click', () => {
    const $content = document.querySelector('#tasks-accordion-content')
    if (!$content) return

    const $labelsContainer = document.querySelector('#tasks-labels-container')
    const $tasksCounter = document.querySelector('#tasks-counter')
    const $tasksTitle = document.querySelector('#tasks-status')

    if (!$content.classList.contains('inactive')) {
      $toggle.setAttribute('aria-expanded', 'false')
      $toggle.classList.remove('rotate')
      $content.classList.add('inactive')
      $labelsContainer.classList.add('inactive')
      $tasksCounter.classList.add('inactive')
      $tasksTitle.innerHTML = `${$tasksTitle.textContent} <span class="tasks-status-counter">${$tasksCounter.textContent}</span>`
      return
    }

    $toggle.setAttribute('aria-expanded', 'false')
    $toggle.classList.add('rotate')
    $content.classList.remove('inactive')
    $labelsContainer.classList.remove('inactive')
    $tasksCounter.classList.remove('inactive')
    $tasksTitle.innerHTML = $tasksTitle.textContent.split(' ')[0]
  })

  newTaskDialogListeners()
}
