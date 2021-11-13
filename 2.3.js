let number = 121;

const findNextSquare = function(number){
    let sqrtNum = Math.sqrt(number);
    if(Number.isInteger(sqrtNum)){
        sqrtNum+=1;
   return Math.pow(sqrtNum,2);
    }else{
        return -1;
    }
}
console.log(findNextSquare(number));