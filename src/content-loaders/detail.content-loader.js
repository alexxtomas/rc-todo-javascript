import Button from '@components/Button'
import { globalStore } from '@store/global.state'
import { DETAIL_CONTROLLER_ADD_BUTTON_PROPS } from './utils/constants'
import { TASKS_STATUS } from '@utils/constants'
import Tasks from '@components/Tasks'
import { $, $$ } from '@utils/functions'

export function detailContentLoader() {
  const {
    state: { focusedSpace }
  } = globalStore()

  const $pageHeaderContent = $('#page-header-content')

  $pageHeaderContent.innerHTML = Button(DETAIL_CONTROLLER_ADD_BUTTON_PROPS)

  const $tasksContainer = $('#tasks-container')

  Object.entries(TASKS_STATUS).forEach(([key, value]) => {
    const tasks = focusedSpace.tasks.filter((task) => task.status === key)
    $tasksContainer.innerHTML += Tasks({
      color: value.color,
      id: key,
      label: value.label,
      tasks
    })
  })

  const $$toggle = $$('[data-function="tasks-accordion-toggle"]')

  $$toggle.forEach(($toggle) => {
    $toggle.addEventListener('click', () => {
      const id = $toggle.getAttribute('data-id')
      const $content = $(`#${id} [data-function="show-tasks"]`)
      if (!$content) return

      const $labelsContainer = $(
        `#${id} [data-function="tasks-labels-container"]`
      )
      const $tasksCounter = $(`#${id} p[data-function="show-tasks-counter"]`)

      const parrafCounterValue = $tasksCounter.getAttribute('data-counter')

      const $tasksStatus = $(`#${id} [data-function="show-tasks-status"]`)

      if (!$content.classList.contains('inactive')) {
        $toggle.setAttribute('aria-expanded', 'false')
        $toggle.classList.remove('rotate')
        $content.classList.add('inactive')
        $labelsContainer.classList.add('inactive')
        $tasksCounter.classList.add('inactive')
        $tasksStatus.innerHTML = `${$tasksStatus.textContent} <span class="tasks-status-counter" data-counter=${parrafCounterValue} data-function="show-tasks-counter-span">${$tasksCounter.textContent}</span>`
        return
      }

      $toggle.setAttribute('aria-expanded', 'false')
      $toggle.classList.add('rotate')
      $content.classList.remove('inactive')
      $labelsContainer.classList.remove('inactive')
      $tasksCounter.classList.remove('inactive')
      $tasksStatus.innerHTML = $tasksStatus.textContent
        .split(' ')
        .slice(0, -2)
        .join(' ')
    })
  })
}
