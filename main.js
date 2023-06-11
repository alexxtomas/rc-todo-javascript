import { routerListeners } from '@listeners/router.listeners'
import { router } from '@router/index'

router(window.location.hash.replace('#', ''))
routerListeners()
