export const taskNameValidation = ({ taskName }) => {
  if (typeof taskName !== 'string') {
    return {
      message: 'Task name must be a string'
    }
  }
  if (taskName.length < 2) {
    return {
      message: 'Task name must be at least 2 characters'
    }
  }
}
