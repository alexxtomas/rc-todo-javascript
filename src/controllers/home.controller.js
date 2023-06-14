import { editSpaceDialogListeners, newSpaceDialogListeners, removeSpaceDialogListeners } from '@listeners/dialog.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import '@views/Home/style.css'
import { homeContentLoader } from '@content-loaders/home.content-loader'

export const homeController = () => {
  homeContentLoader()
  syncGlobalStateWithLocalStorage()

  editSpaceDialogListeners()
  removeSpaceDialogListeners()
  newSpaceDialogListeners()
}
