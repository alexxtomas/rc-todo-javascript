export const URL_ROUTES = {
  '/': {
    view: '/views/Home/index.html',
    title: 'TODO APP',
    description: 'TODO APP home'
  },
  '/pepe': {
    view: '/views/Pepe/index.html',
    title: 'TODO APP | Pepe',
    description: 'TODO APP home'
  }
}
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
  }
}

export const PRIORITIES_LABELS = Object.values(PRIORITIES).map(
  ({ LABEL }) => LABEL
)

export const SPACES = [
  {
    name: 'Sprint 1',
    priority: PRIORITIES.URGENT.LABEL,
    tasks: []
  },
  {
    name: 'Sprint2',
    priority: PRIORITIES.LOW.LABEL,
    tasks: []
  },
  {
    name: 'Sprint 1',
    priority: PRIORITIES.HIGH.LABEL,
    tasks: []
  },
  {
    name: 'Sprint2',
    priority: PRIORITIES.NORMAL.LABEL,
    tasks: []
  },
  {
    name: 'Sprint 1323232323',
    priority: PRIORITIES.LOW.LABEL,
    tasks: []
  },
  {
    name: 'Sprint2434343444',
    priority: PRIORITIES.HIGH.LABEL,
    tasks: []
  },
  {
    name: 'Sprint2434343444',
    priority: PRIORITIES.LOW.LABEL,
    tasks: []
  },
  {
    name: 'Sprint2434343444',
    priority: PRIORITIES.NORMAL.LABEL,
    tasks: []
  },
  {
    name: 'Sprint2434343444',
    priority: PRIORITIES.LOW.LABEL,
    tasks: []
  }
]

export const PRIORITIES_SELECT_OPTIONS = Object.entries(PRIORITIES).map(
  ([key, value]) => ({
    value: key,
    label: value.LABEL
  })
)
