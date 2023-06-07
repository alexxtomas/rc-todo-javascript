import { updateGlobalStateStorage } from '@logic/localStorage.logic'

let GLOBAL_STATE = {
  spaces: []
}

const GLOBAL_ACTIONS = {
  initializeState: ({ spaces }) => (GLOBAL_STATE.spaces = spaces),

  addSpace: ({ space }) => {
    console.log('addSpace', space)

    GLOBAL_STATE.spaces = GLOBAL_STATE.spaces.concat(space)
    console.log('GLOBAL_STATE addSpace', GLOBAL_STATE)
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  },
  removeSpace: ({ idx }) => {
    const newGlobalState = structuredClone(GLOBAL_STATE)
    newGlobalState.spaces.splice(idx, 1)
    GLOBAL_STATE = newGlobalState
    updateGlobalStateStorage({ state: newGlobalState })
  }
}

export const GLOBAL_ACTIONS_ENUM = {
  INITIALIZE_STATE: 'initializeState',
  ADD_SPACE: 'addSpace',
  REMOVE_SPACE: 'removeSpace'
}

export function globalStore() {
  return {
    state: GLOBAL_STATE,
    dispatch: ({ action, payload }) => GLOBAL_ACTIONS[action](payload)
  }
}
