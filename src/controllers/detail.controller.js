import { detailContentLoader } from '@content-loaders/detail.content-loader'
import {
  newTaskDialogListeners,
  removeTaskDialogListeners,
  taskDetailDialogListeners
} from '@listeners/dialog.listeners'
import { taskPriorityDropdownListeners } from '@listeners/dropwdown.listeners'
import {
  inputFileListeners,
  inputTextareaListeners
} from '@listeners/input.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import '@views/Detail/style.css'

export const detailController = () => {
  detailContentLoader()
  syncGlobalStateWithLocalStorage()
  taskPriorityDropdownListeners()
  newTaskDialogListeners()
  removeTaskDialogListeners()
  inputTextareaListeners()
  inputFileListeners()
  taskDetailDialogListeners()
}
