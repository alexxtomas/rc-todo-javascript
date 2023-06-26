import { stringValidation } from './entities'

export const spaceNameValidation = ({ spaceName }) => {
  if (stringValidation.type(spaceName) === false) {
    return {
      message: 'Space name must be a string'
    }
  }
  if (stringValidation.minLength(spaceName, 2) === false) {
    return {
      message: 'Space name must be at least 2 characters'
    }
  }
}
