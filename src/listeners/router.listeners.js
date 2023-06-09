import { routerLogic } from '@logic/router.logic'

export function routerListeners() {
  // document.addEventListener('click', routerLogic.documentClick)
  // window.route = routerLogic.route
  // window.addEventListener('popstate', routerLogic.locationHandler)

  // routerLogic.locationHandler()
  window.addEventListener('hashchange', routerLogic.locationHandler)

  routerLogic.locationHandler()
}
