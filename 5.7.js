let str = ('kayeppd nasooer kayednoooasser kay');


const shortestWords = function(str) {
    let words = str.split(' ');
    let minLength = words[0].length;

    for (let i = 1; i < words.length; i++) {
       if (words[i].length < minLength) {
          minLength = words[i].length;
    }
    }
    return minLength;
}

console.log(shortestWords(str));
