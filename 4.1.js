


const fibonacci = function(x,y,n){

let array = [];

array[0] = x;
array[1] = y;

for(let i =2; i<=n; i++){
    array[i] = array[i-2]+array[i-1];
}return array;



}
console.log(fibonacci(1,1,13));
       //  1,1->[1,1]    
      //    0,1->[0,1]