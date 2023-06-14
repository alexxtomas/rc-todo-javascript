import Dialog, { DIALOG_VARIANTS_ENUM } from '@components/Dialog'
import { FORM_FIELDS_VARIANTS_ENUM } from '@components/Dialog/components/FormDialog/components/FormField'
import SpaceElement, { SPACE_ELEMENT_VARIANTS_ENUM } from '@components/SpaceElement'
import { editSpaceDialogListeners, newSpaceDialogListeners, removeSpaceDialogListeners } from '@listeners/dialog.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import { globalStore } from '@store/global.state'
import { PRIORITIES, PRIORITIES_SELECT_OPTIONS } from '@utils/constants'
import '@views/Home/style.css'

export const homeController = () => {
  syncGlobalStateWithLocalStorage()

  const $pageHeaderContent = document.querySelector('#pageHeaderContent')

  $pageHeaderContent.innerHTML = `
    <button id="new-space" class="page-header-button">new space +</button>
    ${Dialog({
      variant: DIALOG_VARIANTS_ENUM.FORM,
      dialogAttributes: 'id="new-space-dialog"',
      formAttributes: 'id="new-space-form"',
      elements: [
        {
           variant: FORM_FIELDS_VARIANTS_ENUM.INPUT,
          attributes: 'id="new-space-name" name="newSpaceName" type="text"',
        label: {
          attributes: 'for="new-space-name"',
          text: 'Space name'
          }
        },
        {
          variant: FORM_FIELDS_VARIANTS_ENUM.SELECT,
          label: {
            attributes: 'for="new-space-priority"',
            text: 'Space priority'
          },
          attributes: 'id="new-space-priority" name="newSpacePriority"',
          options: PRIORITIES_SELECT_OPTIONS
        }
      ],
      firstButton: {
        attributes: 'type="submit" value="default"',
        text: 'Save'
      },
      secondButton: {
        attributes:
         'type="reset" id="close-new-space-dialog-button" value="cancel" formmethod="dialog"',
        text: 'Close'
      }
    })}
  `

  const {
    state: { spaces }
  } = globalStore()

  if (spaces.length > 0 && spaces[0]?.name) {
    const $ul = document.querySelector('#spaces-container')
    $ul.innerHTML += `
       ${spaces
         .map(({ name, priority, id, tasks }) => {
          const iconColor = PRIORITIES[priority].color
           return SpaceElement({
             id,
             name,
             tasks,
             iconColor,
             variant: SPACE_ELEMENT_VARIANTS_ENUM.FUNCTIONAL
           })
         })
         .join('')
         .replaceAll(',', '')}
 `
  }

  const $prioritiesAsideContainer = document.querySelector('#priorities-aside-container')

  $prioritiesAsideContainer.innerHTML += `
     ${Object.values(PRIORITIES)
        .filter(priority => priority.label !== 'Not Assigned')
       .map((priority) => {
         return `
        ${SpaceElement({
          name: priority.label,
          iconColor: priority.color,
          variant: SPACE_ELEMENT_VARIANTS_ENUM.NORMAL
        })}
       `
       })
       .join('')
       .replaceAll(',', '')}
 `
  editSpaceDialogListeners()
  removeSpaceDialogListeners()
  newSpaceDialogListeners()
}
