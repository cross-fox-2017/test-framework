module.exports = addition = (a, b) => {
  if (isNaN(a) || isNaN(b)) return 'Error'
  else return a + b
}
