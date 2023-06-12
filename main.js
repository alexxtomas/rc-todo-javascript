import { routerListeners } from '@listeners/router.listeners'
import { syncGlobalStateWithLocalStorage } from '@logic/localStorage.logic'
import { router } from '@router/index'

syncGlobalStateWithLocalStorage()
router(window.location.hash.replace('#', ''))
routerListeners()
