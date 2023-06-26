import { routerLogic } from '@logic/router.logic'

export function routerListeners() {
  window.addEventListener('hashchange', routerLogic.handleHashChange)
}
