import { updateGlobalStateStorage } from '@logic/localStorage.logic'

const GLOBAL_STATE = {
  spaces: [],
  focusedSpace: null
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
  },
  addTask: ({ spaceId, task }) => {
    const spaceIndex = GLOBAL_STATE.spaces.findIndex((space) => space.id === spaceId)
    GLOBAL_STATE.spaces[spaceIndex].tasks = GLOBAL_STATE.spaces[
      spaceIndex
    ].tasks.concat(task)
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  },
  getTaskById: ({ spaceId, taskId }) => {
    const spaceIndex = GLOBAL_STATE.spaces.findIndex((space) => space.id === spaceId)
    return GLOBAL_STATE.spaces[spaceIndex].tasks.find((task) => task.id === taskId)
  },
  removeTask: ({ spaceId, taskId }) => {
    const spaceIndex = GLOBAL_STATE.spaces.findIndex((space) => space.id === spaceId)
    GLOBAL_STATE.spaces[spaceIndex].tasks = GLOBAL_STATE.spaces[spaceIndex].tasks.filter(
      (task) => task.id !== taskId
    )
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  },
  setTaskPriority: ({ spaceId, taskId, priority }) => {
    const spaceIndex = GLOBAL_STATE.spaces.findIndex((space) => space.id === spaceId)
    const taskIndex = GLOBAL_STATE.spaces[spaceIndex].tasks.findIndex((task) => task.id === taskId)
    GLOBAL_STATE.spaces[spaceIndex].tasks[taskIndex].priority = priority
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  },
  addFocusedSpace: ({ spaceId }) => {
    GLOBAL_STATE.focusedSpace = GLOBAL_STATE.spaces.find((space) => space.id === spaceId)
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  },
  removeFocusedSpace: () => {
    GLOBAL_STATE.focusedSpace = null
    updateGlobalStateStorage({ state: GLOBAL_STATE })
  }

}

export const GLOBAL_ACTIONS_ENUM = {
  INITIALIZE_SPACES: 'initializeSpaces',
  ADD_SPACE: 'addSpace',
  REMOVE_SPACE: 'removeSpace',
  EDIT_SPACE: 'editSpace',
  // GET_SPACE_BY_ID: 'getSpaceById',
  ADD_TASK: 'addTask',
  REMOVE_TASK: 'removeTask',
  SET_TASK_PRIORITY: 'setTaskPriority',
  GET_TASK_BY_ID: 'getTaskById',
  ADD_FOCUSED_SPACE: 'addFocusedSpace',
  REMOVE_FOUCSED_SPACE: 'removeFocusedSpace'
}

export function globalStore() {
  return {
    state: GLOBAL_STATE,
    dispatch: ({ action, payload }) => GLOBAL_ACTIONS[action](payload)
  }
}
