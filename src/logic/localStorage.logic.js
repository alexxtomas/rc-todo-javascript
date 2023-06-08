import { globalStore, GLOBAL_ACTIONS_ENUM } from '@store/global.state'

export function updateGlobalStateStorage({ state }) {
  window.localStorage.setItem('globalState', JSON.stringify(state))
}

export function syncGlobalStateWithLocalStorage() {
  const { dispatch, state } = globalStore()
  const globalStateFromLocalStorage = window.localStorage.getItem('globalState')

  if (globalStateFromLocalStorage) {
    dispatch({
      action: GLOBAL_ACTIONS_ENUM.INITIALIZE_SPACES,
      payload: JSON.parse(globalStateFromLocalStorage)
    })
  }

  updateGlobalStateStorage({ state })
}
