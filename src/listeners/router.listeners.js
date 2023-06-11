import { router } from '@router/index'

export function routerListeners() {
  window.addEventListener('hashchange', () => {
    const location = window.location.hash.replace('#', '')
    router(location)
  })
}
