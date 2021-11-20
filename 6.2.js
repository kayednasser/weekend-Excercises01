const array = ["a","a","c","d","d","e","a","b","c","f","a","h","h","h","e","a"]
let count = {};

array.forEach(function(i){ count[i] = (count[i]||0) + 1});
let arr = Object.values(count);
let max = Math.max(...arr)
console.log(max);