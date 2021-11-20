function accum(s) {
	var arr = s.toLowerCase().split("");
newArray =[];
for(i = 1; i< arr.length+1; i++){
  newArray.push(Array(i).fill(arr[i-1]));
   
}
for(j = 0; j< newArray.length; j++){
 newArray[j][0] = newArray[j][0].charAt(0).toUpperCase();
}

var result = newArray.join('-').replace(/,/g, '');
console.log(result)
return result;
}


accum("abcd");