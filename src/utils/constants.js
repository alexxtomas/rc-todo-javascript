export const PRIORITIES = {
  URGENT: {
    label: 'Urgent',
    color: '#FF0000'
  },
  HIGH: {
    label: 'High',
    color: '#FFA500'
  },
  NORMAL: {
    label: 'Normal',
    color: '#EBEA0D'
  },
  LOW: {
    label: 'Low',
    color: '#008000'
  },
  NOT_ASSIGNED: {
    label: 'Not Assigned',
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

export const PRIORITIES_SELECT_OPTIONS = Object.entries(PRIORITIES)
  .filter(([key, value]) => {
    return value.label !== 'Not Assigned'
  })
  .map(([key, value]) => ({
    value: key,
    label: value.label
  }))

export const TASKS_STATUS = {
  BACKLOG: {
    label: 'Backlog',
    color: '#0000001a'
  },
  BLOCKED: {
    label: 'Blocked',
    color: '#FF0000'
  },
  IN_PROGRESS: {
    label: 'In Progress',
    color: '#FFFF00'
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
