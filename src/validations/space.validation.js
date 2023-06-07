import { PRIORITIES_LABELS } from '@utils/constants'

export const spaceNameValidation = ({ spaceName }) => {
  if (typeof spaceName !== 'string') {
    return {
      message: 'Space name must be a string'
    }
  }
  if (spaceName.length < 2) {
    return {
      message: 'Space name must be at least 2 characters'
    }
  }
}
export const spacePriorityValidation = ({ spacePriority }) => {
  const validation = {
    id: 'spacePriorityValidationError'
  }
  if (!PRIORITIES_LABELS.includes(spacePriority)) {
    validation.message = 'Invalid priority'
  }

  return validation
}
