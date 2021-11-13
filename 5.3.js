

let string = '"the-stealth-warrior'

const toCamelCase = function(string) {
    let result = '';
    str = string.toLowerCase();
    for(let i=0; i< str.length; i++){
      if(str[i] === '_' || str[i] === '-'){
        i++;
        result += str[i].toUpperCase();
      } else {
        result+= str[i];
      }
    }
    return result;
  }
  

  console.log(toCamelCase(string));


