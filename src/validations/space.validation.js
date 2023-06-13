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
