let number = 1 ;

const summation = function(number){
    
    let sum = 0;

    while(number>0){
        sum+=number;
        number--;

    }return sum;
}

console.log(summation(number));