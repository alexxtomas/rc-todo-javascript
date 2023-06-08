import { updateGlobalStateStorage } from '@logic/localStorage.logic'

const GLOBAL_STATE = {
  spaces: [],
  focusedSpaceId: ''
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
  addFocusedSpaceId: ({ id }) => {
    GLOBAL_STATE.focusedSpaceId = id
  },
  removeFocusedSpaceId: () => {
    GLOBAL_STATE.focusedSpaceId = ''
  }
}

export const GLOBAL_ACTIONS_ENUM = {
  INITIALIZE_SPACES: 'initializeSpaces',
  ADD_SPACE: 'addSpace',
  REMOVE_SPACE: 'removeSpace',
  ADD_FOCUSED_SPACE_ID: 'addFocusedSpaceId',
  REMOVE_FOCUSED_SPACE_ID: 'removeFocusedSpaceId'
}

export function globalStore() {
  return {
    state: GLOBAL_STATE,
    dispatch: ({ action, payload }) => GLOBAL_ACTIONS[action](payload)
  }
}
