let string = 'kayeDnasser';

const toWeirdCase = function(string){

    let result = '';
    str = string.toLowerCase();
    for(let i=0; i< str.length; i++){
        if(i % 2 === 0){
            result+= str[i].toUpperCase();
        }else{
            result+= str[i].toLowerCase();
        }
    
}return result;
}
console.log(toWeirdCase(string));