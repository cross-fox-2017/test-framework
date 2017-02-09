const divide = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return 'error'
  } else {
    return a / b
  }
}

module.exports = divide
