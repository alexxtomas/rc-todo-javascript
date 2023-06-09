import { globalStore } from '@store/global.state'
import { locationHandler, route } from './shared'

export const routerLogic = {
  documentClick: (e) => {
    const { target } = e

    if (!target.matches('[data-function="navigate"]') && target.offsetParent.getAttribute('data-function') !== 'navigate') return

    e.preventDefault()

    route({ e, target })
  },
  navigate: (href) => {
    window.location.href = href
  },
  route,
  locationHandler

}
