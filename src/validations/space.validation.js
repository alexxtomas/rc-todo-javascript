import { PRIORITIES } from '@utils/constants'

export const spaceNameValidation = ({ spaceName }) => {
  const validation = {
    id: 'spaceNameValidationError'
  }
  if (typeof spaceName !== 'string') {
    validation.message = 'Space name must be a string'
  } else if (spaceName.length < 2) {
    validation.message = 'Space name must be at least 2 characters'
  }

  return validation
}
export const spacePriorityValidation = ({ spacePriority }) => {
  const validation = {
    id: 'spacePriorityValidationError'
  }
  if (!PRIORITIES.includes(spacePriority)) {
    validation.message = 'Invalid priority'
  }

  return validation
}
