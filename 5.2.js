

const  repeat_str = function(num,str){

    let string = '';
    while(num){
        string = string + str;
        num--;
    }return string;


}
console.log(repeat_str(6,'|'));
