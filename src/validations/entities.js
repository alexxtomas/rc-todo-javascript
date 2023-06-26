export const stringValidation = {
  type: (value) => typeof value === 'string',
  minLength: (value, length) => value.length >= length
}
