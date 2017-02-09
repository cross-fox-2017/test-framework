function akar(a,b){
  if(!a||!b){
    return "parameternya harus diisi"
  }
  else if(typeof a !== 'number'||typeof b !== 'number'){
    return "parameter harus angka"
  }
  else{
    return Math.sqrt(a,b)
  }
}
module.exports= akar
