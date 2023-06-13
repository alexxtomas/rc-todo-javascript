import { GLOBAL_ACTIONS_ENUM, globalStore } from '@store/global.state'
import HomeHtml from '@views/Home/index.html?raw'
import DetailHtml from '@views/Detail/index.html?raw'
import NotFoundHtml from '@views/404/index.html?raw'

import { homeController } from '@controllers/home.controller'
import { detailController } from '@controllers/detail.controller'
const $content = document.querySelector('#content')
const $pageHeaderContent = document.querySelector('#pageHeaderContent')

export const router = (route) => {
  const { dispatch } = globalStore()
  if (route === '') {
    window.location.href = '#/'
  }
  $content.innerHTML = ''
  $pageHeaderContent.innerHTML = ''

  if (route === '/') {
    dispatch({ action: GLOBAL_ACTIONS_ENUM.REMOVE_FOUCSED_SPACE })
    $content.innerHTML = HomeHtml
    homeController()
    return
  }

  const { state: { spaces } } = globalStore()

  const space = spaces.find((space) => space.id === route.replace('/', ''))

  if (!space) {
    dispatch({ action: GLOBAL_ACTIONS_ENUM.REMOVE_FOUCSED_SPACE })
    $content.innerHTML = NotFoundHtml
    return
  }
  dispatch({ action: GLOBAL_ACTIONS_ENUM.ADD_FOCUSED_SPACE, payload: { spaceId: space.id } })
  $content.innerHTML = DetailHtml
  detailController(space.id)
}
