let str1 = "xyaabbbccccdefwzzw";
let str2 = "xxxxyyyyabklmopzzzq";

const longest = (str1 , str2 ) => {
   let combin = str1.concat(str2);

   let string = combin.toLowerCase().split('').sort();

   let result = [];

   for(let ch of string){
      if(!result.includes(ch)){
         result.push(ch)
      }
   }
   return (result.join(''));
};
console.log(longest(str1, str2));