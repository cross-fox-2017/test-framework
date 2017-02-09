const akar = function(a,b) {
  if(!a || !b) return 'parameterna diisi atuh'
  if(typeof a !== 'number'||typeof b !== 'number') return 'datana kudu number bray'
  return Math.sqrt(a,b)
}

module.exports = akar
