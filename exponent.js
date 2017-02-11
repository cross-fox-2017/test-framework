function pangkat(a,b){
  if(!a||!b){
    return "parameternya harus diisi"
  }
  else if(typeof a !== 'number'||typeof b !== 'number'){
    return "parameter harus angka"
  }
  else{
    return Math.pow(a,b)
  }
}
module.exports=pangkat
