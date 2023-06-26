import { stringValidation } from './entities'

export const taskNameValidation = ({ taskName }) => {
  if (stringValidation.type(taskName) === false) {
    return {
      message: 'Task name must be a string'
    }
  }
  if (stringValidation.minLength(taskName, 2) === false) {
    return {
      message: 'Task name must be at least 2 characters'
    }
  }
}
