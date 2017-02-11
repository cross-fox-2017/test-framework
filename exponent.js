const exponent = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return 'error'
  } else {
    return Math.pow(a, b)
  }
}

module.exports = exponent
