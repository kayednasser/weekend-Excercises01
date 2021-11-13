let string = 'Sam Harris';

const abbreviateTwoWords = function(string){

    let first = string.charAt(0);
    first = first.toUpperCase();
    let last = string.indexOf(' ');
    conv = string.charAt(last+1);
    last = conv.toUpperCase();
    let result = `${first}.${last}`;
    return result;


}

console.log(abbreviateTwoWords(string));