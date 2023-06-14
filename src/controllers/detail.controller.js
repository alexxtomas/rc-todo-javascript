import { detailContentLoader } from '@content-loaders/detail.content-loader'
import { newTaskDialogListeners, removeTaskDialogListeners } from '@listeners/dialog.listeners'
import { taskPriorityDropdownListeners } from '@listeners/dropwdown.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import '@views/Detail/style.css'

export const detailController = () => {
  detailContentLoader()
  syncGlobalStateWithLocalStorage()

  taskPriorityDropdownListeners()
  newTaskDialogListeners()
  removeTaskDialogListeners()
}
