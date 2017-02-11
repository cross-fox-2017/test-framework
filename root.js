const root = a => {
  if (isNaN(a)) {
    return 'error'
  } else {
    return Math.sqrt(a)
  }
}

module.exports = root
