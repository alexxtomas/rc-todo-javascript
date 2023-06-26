import { router } from '@router/index'

export const routerLogic = {
  handleHashChange: () => {
    const location = window.location.hash.replace('#', '')
    router(location)
  }
}
