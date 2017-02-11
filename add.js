function tambah (a,b){
  if(!a||!b){
    return "parameternya harus diisi"
  }
  else if(typeof a !== 'number' || typeof b !== 'number'){
    return "parameter harus angka"
  }
  else{
    return a+b
  }
}
module.exports= tambah
