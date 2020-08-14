function realType(value){
    if(Array.isArray(value)){
       return console.log('array')
    }
    else if(value==null){
        return console.log('null')
    }
    else{
        return console.log(typeof value); 
    }
}
realType(1);