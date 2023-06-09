import { globalStore } from '@store/global.state'

export const outsideClick = (dialog) => (e) => {
  if (e.target === dialog) {
    dialog.close()
  }
}

export const showDialogClick = ($dialog) => () => {
  $dialog.showModal()
}

export const locationHandler = async () => {
  let location = window.location.hash.replace('#', '')

  if (location.length === 0) {
    location = '/'
  }

  const { state: { spaces } } = globalStore()

  // const space = spaces.find((space) => space.id === location)

  // revert to normal / and upload all content with javascript

  console.log(location)

  if (location === '/') {
    const html = await fetch('src/views/Home/index.html').then(res => res.text())

    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'src/views/Home/script.js'

    document.querySelector('#app').innerHTML = html
    document.querySelector('#app').appendChild(script)

    return
  }

  const html = await fetch('src/views/404/index.html').then(res => res.text())

  document.querySelector('#app').innerHTML = html
}

export const route = ({ e, target }) => {
  e.preventDefault()
  e.preventDefault()

  window.history.pushState({}, '', target.href || target.offsetParent.href)

  locationHandler()
}
