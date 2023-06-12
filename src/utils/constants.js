export const PRIORITIES = {
  URGENT: {
    LABEL: 'Urgent',
    VALUE: 3,
    COLOR: '#FF0000'
  },
  HIGH: {
    LABEL: 'High',
    VALUE: 2,
    COLOR: '#FFA500'
  },
  NORMAL: {
    LABEL: 'Normal',
    VALUE: 1,
    COLOR: '#FFFF00'
  },
  LOW: {
    LABEL: 'Low',
    VALUE: 0,
    COLOR: '#008000'
  },
  NOT_ASSIGNED: {
    LABEL: 'Not Assigned',
    VALUE: 4,
    COLOR: 'none'
  }
}

export const PRIORITIES_LABELS = Object.values(PRIORITIES).map(
  ({ LABEL }) => LABEL
)

export const PRIORITIES_SELECT_OPTIONS = Object.entries(PRIORITIES).map(
  ([key, value]) => ({
    value: key,
    label: value.LABEL
  })
)

export const TASKS_STATUS = [
  { name: 'Backlog', color: 'rgba(0, 0, 0, 0.1)' }, {
    name: 'In Progress',
    color: '#FFFF00'
  }, {
    name: 'Blocked',
    color: '#FF0000'
  }, {
    name: 'Done',
    color: '#12EE2A'
  }]

export const TASKS_STATUS_ENUM = {
  BACKLOG: 'Backlog',
  IN_PROGRESS: 'In Progress',
  BLOCKED: 'Blocked',
  DONE: 'Done'
}
