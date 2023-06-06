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

const PRIORITIES_ENUM = {
  URGENT: 'Urgent',
  HIGH: 'High',
  NORMAL: 'Normal',
  LOW: 'Low'
}

export const PRIORITIES = ['Urgent', 'High', 'Normal', 'Low']

export const SPACES = [
  {
    id: 1,
    name: 'Sprint 1',
    priority: PRIORITIES_ENUM.HIGH,
    createdAt: new Date(),
    tasks: []
  },
  {
    id: 2,
    name: 'Sprint2',
    priority: PRIORITIES_ENUM.HIGH,
    createdAt: new Date(),
    tasks: []
  },
  {
    id: 1,
    name: 'Sprint 1',
    priority: PRIORITIES_ENUM.HIGH,
    createdAt: new Date(),
    tasks: []
  },
  {
    id: 2,
    name: 'Sprint2',
    priority: PRIORITIES_ENUM.HIGH,
    createdAt: new Date(),
    tasks: []
  },
  {
    id: 1,
    name: 'Sprint 1',
    priority: PRIORITIES_ENUM.HIGH,
    createdAt: new Date(),
    tasks: []
  },
  {
    id: 2,
    name: 'Sprint2',
    priority: PRIORITIES_ENUM.HIGH,
    createdAt: new Date(),
    tasks: []
  }
]

export const PRIORITIES_SELECT_OPTIONS = [
  {
    value: 'Urgent',
    label: 'Urgent'
  },
  {
    value: 'High',
    label: 'High'
  },
  {
    value: 'Normal',
    label: 'Normal'
  },
  {
    value: 'Low',
    label: 'Low'
  }
]
