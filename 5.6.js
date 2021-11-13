let string = ('Nananananananananananananana batman!');


function maskify(str, mask, n) {
  
    
    return (str).slice(0, -n)
        .replace(/./g, mask)
        + (str).slice(-n);
}






console.log(maskify(string, '#', 5));