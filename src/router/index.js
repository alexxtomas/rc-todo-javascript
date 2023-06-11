import { globalStore } from '@store/global.state'
import HomeHtml from '@views/Home/index.html?raw'

import { homeController } from '@controllers/home.controller'
const $content = document.querySelector('#content')

export const router = (route) => {
  $content.innerHTML = ''

  if (route === '/') {
    $content.innerHTML = HomeHtml
    homeController()
  }
  const { state: { spaces } } = globalStore()

  const space = spaces.find((space) => space.id === route)

  if (!space) {
    // 404
  }
}
