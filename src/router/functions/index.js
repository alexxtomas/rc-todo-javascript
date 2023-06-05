import { URL_ROUTES } from '@utils/constants.js'

export const urlRoutes = (e) => {
  const _e = e ?? window.event
  _e.preventDefault()

  window.history.pushState(null, '', _e.target.href)
}

const urlLocationHandler = async () => {
  let location = window.location.pathname

  if (location.length === 0) {
    location = '/'
  }

  const route = URL_ROUTES[location] ?? URL_ROUTES['404']
}
