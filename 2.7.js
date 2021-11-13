

const basicOp = function(char,num1,num2){

    if(char === '+'){
        return num1 +num2;
    }else if(char=== '-'){
        return num1 - num2;

    }else if(char === '*'){
        return num1 * num2;
    
    }else if(char === '/'){
        return num1 / num2;
    }else{
        return 'invaled string' ;
    }
}

console.log(basicOp('/',49,7));