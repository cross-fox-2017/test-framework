module.exports={
    add:function(a,b){
      if(!a || !b){
        return "require two parameter"
      }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "is not a number"
      }else {
        return a+b
      }
    },
    substract:function(a,b){
      if(!a || !b){
        return "require two parameter"
      }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "is not a number"
      }else {
        return a-b
      }
    },
    multiply:function(a,b){
      if(!a || !b){
        return "require two parameter"
      }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "is not a number"
      }else {
        return a*b
      }
    },
    divider:function(a,b){
      if(!a || !b){
        return "require two parameter"
      }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "is not a number"
      }else {
        return a/b
      }
    },
    pangkat:function(a,b){
      if(!a || !b){
        return "require two parameter"
      }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "is not a number"
      }else {
        return Math.pow(a,b)
      }
    },
    akar:function(a){
      if(!a){
        return "require two parameter"
      }else if(!Number.isInteger(a)){
        return "is not a number"
      }else {
        return Math.sqrt(a)
      }
    }
}
