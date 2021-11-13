
let year = [3000]



function centuryFromYear(year) {
    return Math.floor((year - 1) / 100) + 1;
  }
  
  
  //* tests
  year.forEach(function(years) {
    console.log(years + ' year is in ' + centuryFromYear(years) + ' century');
  });

