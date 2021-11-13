let array = [ 0, 0, 0, 0, 9 ];

const findUniq = function(array){

    let num =0
    let num1 =array[0]; 
    let num2 = array[1];
    let num3 = array[2];
    if(num1===num2){
         num = num1;
    }else{
       num= num3;
    }
    
    for(let i=0; i<=array.length; i++)  {
        
        if(array[i]!==num){
            return `The unique number in th array is ${array[i]}`;
        }


    }
}

console.log(findUniq(array));
