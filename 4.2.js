

const  tribonacci  = function(x,y,z,n){

    let array = [];
   if(n){
    array[0] = x;
    array[1] = y;
    array[2] = z;
    for(let i =3; i<=n; i++){
        array[i] =array[i-3] + array[i-2]+array[i-1];
    }return array;
   
    }else{
        return array;
    }
    
    
    }
    console.log(tribonacci(0,0,1,0));
    