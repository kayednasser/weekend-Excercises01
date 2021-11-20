const str = "abcwp"

const isIsogram = function(str){

    let str1 = [];
    for(let ch of str){
            if(!str1.includes(ch)){
                str1.push(ch);
            }else{
                return false;
            }
        }return true
    }


console.log(isIsogram(str));