import { globalStore } from '@store/global.state'
import HomeHtml from '@views/Home/index.html?raw'
import DetailHtml from '@views/Detail/index.html?raw'
import NotFoundHtml from '@views/404/index.html?raw'

import { homeController } from '@controllers/home.controller'
import { detailController } from '@controllers/detail.controller'
const $content = document.querySelector('#content')
const $pageHeaderContent = document.querySelector('#pageHeaderContent')

export const router = (route) => {
  if (route === '') {
    window.location.href = '#/'
  }
  $content.innerHTML = ''
  $pageHeaderContent.innerHTML = ''

  if (route === '/') {
    $content.innerHTML = HomeHtml
    homeController()
    return
  }

  const { state: { spaces } } = globalStore()

  const space = spaces.find((space) => space.id === route.replace('/', ''))

  if (!space) {
    $content.innerHTML = NotFoundHtml
    return
  }
  $content.innerHTML = DetailHtml
  detailController(space.id)
}
