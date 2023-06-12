import Tasks from '@components/Tasks'
import { newTaskDialogListeners } from '@listeners/dialog.listeners'
import '@views/Detail/style.css'

export const detailController = (id) => {
  const $tasksContainer = document.querySelector('#tasksContainer')
  $tasksContainer.innerHTML = Tasks({
    status: 'backlog',
    tasks: [
      {
        name: 'Clean the house',
        description: 'Clean the house',
        priority: 'LOW',
        creationDate: new Date().toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric' })
      }
    ]
  })
  const $toggle = document.querySelector('#backlogAccordionToggle')

  $toggle.addEventListener('click', () => {
    const $content = document.querySelector('#backlogAccordionContent')
    if (!$content) return

    const $chevronIcon = document.querySelector('#backlogAccordionToggle')
    const $labelsContainer = document.querySelector('#backlogTasksLabelsContainer')
    const $tasksCounter = document.querySelector('#backlogTasksCounter')
    const $tasksTitle = document.querySelector('#backlogTasksTitle')

    console.log($tasksCounter.textContent)

    if (!$content.classList.contains('inactive')) {
      $toggle.setAttribute('aria-expanded', 'false')
      $chevronIcon.classList.remove('rotate')
      $content.classList.add('inactive')
      $labelsContainer.classList.add('inactive')
      $tasksCounter.classList.add('inactive')
      $tasksTitle.innerHTML = `${$tasksTitle.textContent} <span class="backlogTasksTitleCounter">${$tasksCounter.textContent}</span>`
      return
    }

    $toggle.setAttribute('aria-expanded', 'false')
    $chevronIcon.classList.add('rotate')
    $content.classList.remove('inactive')
    $labelsContainer.classList.remove('inactive')
    $tasksCounter.classList.remove('inactive')
    $tasksTitle.innerHTML = $tasksTitle.textContent.split(' ')[0]
  })

  newTaskDialogListeners()
}
