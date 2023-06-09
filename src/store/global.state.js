import { updateGlobalStateStorage } from '@logic/localStorage.logic'

const GLOBAL_STATE = {
  spaces: []
}

const GLOBAL_ACTIONS = {
  initializeSpaces: ({ spaces }) => (GLOBAL_STATE.spaces = spaces),

  addSpace: ({ space }) => {
    GLOBAL_STATE.spaces = GLOBAL_STATE.spaces.concat(space)
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  },
  removeSpace: ({ id }) => {
    GLOBAL_STATE.spaces = GLOBAL_STATE.spaces.filter((space) => space.id !== id)
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  },
  editSpace: ({ id, name, priority }) => {
    const spaceIndex = GLOBAL_STATE.spaces.findIndex((space) => space.id === id)
    GLOBAL_STATE.spaces[spaceIndex].name = name
    GLOBAL_STATE.spaces[spaceIndex].priority = priority
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  }

}

export const GLOBAL_ACTIONS_ENUM = {
  INITIALIZE_SPACES: 'initializeSpaces',
  ADD_SPACE: 'addSpace',
  REMOVE_SPACE: 'removeSpace',
  EDIT_SPACE: 'editSpace'
}

export function globalStore() {
  return {
    state: GLOBAL_STATE,
    dispatch: ({ action, payload }) => GLOBAL_ACTIONS[action](payload)
  }
}
