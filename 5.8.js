let str = ('kayeppd nasooer kayednooasser kay');


const longestWords = function(str) {
    let words = str.split(' ');
    let maxLength = words[0].length;

    for (let i = 1; i < words.length; i++) {
       if (words[i].length > maxLength) {
          maxLength = words[i].length;
    }
    }
    return maxLength;
}

console.log(longestWords(str));