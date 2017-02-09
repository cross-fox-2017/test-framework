var perkalian = (angka1, angka2) => {
  if (typeof(angka1) == 'number' && typeof(angka2) == 'number'){
    return angka1 * angka2
  } else {
    return 'Input is Required and must in Number'
  }
}
module.exports = perkalian
