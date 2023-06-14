import { nanoid } from 'nanoid'

export const PRIORITIES = {
  URGENT: {
    label: 'Urgent',
    value: 3,
    color: '#FF0000'
  },
  HIGH: {
    label: 'High',
    value: 2,
    color: '#FFA500'
  },
  NORMAL: {
    label: 'Normal',
    value: 1,
    color: '#EBEA0D'
  },
  LOW: {
    label: 'Low',
    value: 0,
    color: '#008000'
  },
  NOT_ASSIGNED: {
    label: 'Not Assigned',
    value: 4,
    color: 'none'
  }
}

export const PRIORITIES_ENUM = {
  URGENT: 'URGENT',
  HIGH: 'HIGH',
  NORMAL: 'NORMAL',
  LOW: 'LOW',
  NOT_ASSIGNED: 'NOT_ASSIGNED'
}

export const PRIORITIES_SELECT_OPTIONS = Object.entries(PRIORITIES).filter(([key, value]) => {
  return value.label !== 'Not Assigned'
}).map(
  ([key, value]) => ({
    value: key,
    label: value.label
  })
)

export const TASKS_STATUS = {
  BACKLOG: {
    label: 'Backlog',
    color: '#0000001a'
  },
  IN_PROGRESS: {
    label: 'In Progress',
    color: '#FFFF00'
  },
  BLOCKED: {
    label: 'Blocked',
    color: '#FF0000',
    id: `a${nanoid()}`
  },
  DONE: {
    label: 'Done',
    color: '#12EE2A'
  }
}

export const TASKS_STATUS_ENUM = {
  BACKLOG: 'BACKLOG',
  IN_PROGRESS: 'IN_PROGRESS',
  BLOCKED: 'BLOCKED',
  DONE: 'DONE'
}
