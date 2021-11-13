

const nb_year = function(p0,percrnt,aug,p){

    let percrnt1 = (percrnt/100);
    let aug1 = aug;
    let total = 0;
    let years = 0;
    let p00 = p0;

    while(p00 <= p){
        
        total+= p00 + (p00*percrnt1) + aug1;
        p00 = total;
        total = 0;
        years++;


    }  return years ;

}

console.log(nb_year(1500000,2.5,10000,2000000));