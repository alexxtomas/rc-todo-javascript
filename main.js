import SpaceElement, {
  SPACE_ELEMENT_VARIANTS_ENUM
} from '@components/SpaceElement/SpaceElement'
import { PRIORITIES, PRIORITIES_SELECT_OPTIONS } from './src/utils/constants'
import './style.css'
import {
  newSpaceDialogListeners,
  removeSpaceDialogListeners,
  editSpaceDialogListeners
} from '@listeners/dialog.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import { globalStore } from '@store/global.state'
import Dialog, { DIALOG_VARIANTS_ENUM } from '@components/Dialog/Dialog'
import { routerListeners } from '@listeners/router.listeners'

routerListeners()

syncGlobalStateWithLocalStorage()

// const $pageHeader = document.querySelector('#pageHeader')

// $pageHeader.innerHTML += Dialog({
//   variant: DIALOG_VARIANTS_ENUM.FORM,
//   dialogAttributes: 'id="newSpaceDialog"',
//   formAttributes: 'id="newSpaceForm"',
//   input: {
//     attributes: 'id="newSpaceName" name="newSpaceName" type="text"',
//     label: 'for="newSpaceName"'
//   },
//   select: {
//     label: 'newSpacePriority',
//     attributes: 'id="newSpacePriority" name="newSpacePriority"',
//     options: PRIORITIES_SELECT_OPTIONS
//   },
//   firstButton: {
//     attributes: 'type="submit" value="default"',
//     text: 'Save'
//   },
//   secondButton: {
//     attributes:
//       'type="reset" id="cancelNewSpaceButton" value="cancel" formmethod="dialog"',
//     text: 'Close'
//   }
// })

// const {
//   state: { spaces }
// } = globalStore()

// if (spaces.length > 0 && spaces[0]?.name) {
//   const $ul = document.querySelector('#spacesContainer')
//   $ul.innerHTML += `
//       ${spaces
//         .map(({ name, priority, id, tasks }, idx) => {
//           return SpaceElement({
//             id,
//             name,
//             tasks,
//             iconColor: PRIORITIES[priority.toUpperCase()].COLOR,
//             variant: SPACE_ELEMENT_VARIANTS_ENUM.FUNCTIONAL
//           })
//         })
//         .join('')
//         .replaceAll(',', '')}
// `
// }

// const $asideUL = document.querySelector('aside > ul')

// $asideUL.innerHTML += `
//     ${Object.values(PRIORITIES)
//       .map((el) => {
//         return `
//        ${SpaceElement({
//          name: el.LABEL,
//          iconColor: el.COLOR,
//          variant: SPACE_ELEMENT_VARIANTS_ENUM.NORMAL
//        })}
//       `
//       })
//       .join('')
//       .replaceAll(',', '')}
// `
// editSpaceDialogListeners()
// removeSpaceDialogListeners()
// newSpaceDialogListeners()
