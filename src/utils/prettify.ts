export default (spaces: number) => (value: {}) =>
  JSON.stringify(value, null, spaces)
