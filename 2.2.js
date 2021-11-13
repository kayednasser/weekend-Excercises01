const array = [0,1,1,1,1];

const binaryToNumbers = function(array){

    let num = +array.join("");
    let number = parseInt(num,2);
    return number;

}
console.log(binaryToNumbers(array));











// const binaryToInteger = function(array){
//     let sum = 0;
//     if(array.length===2){
//         for(let i =0; i<=array.length; i++){
//            if(array[0]>0)
//         }
//     } 

// }