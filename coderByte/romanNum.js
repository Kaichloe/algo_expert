// String Challenge
// Have the function StringChallenge(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.
// Examples
// Input: "XXXVVIIIIIIIIII"
// Output: L
// Input: "DDLL"
// Output: MC


// break up by digits 
function StringChallenge(str) { 
  const romanNumerials = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,  
    "X": 10, 
    "V": 5, 
    "I": 1,
  }
  let numberValue = 0;

  for( const romanNum of str){
    numberValue += romanNumerials[romanNum];
  }
  // let digitsArr = numberValue.toString().split("").map(ele => Number(ele));
  let resultArr = [];
  let currentRemainder = numberValue;
  for (const roman in romanNumerials){
    const remainder = numberValue % romanNumerials[roman];
    if (Number.isInteger(remainder)){
      let numOfTimes = Math.floor(numberValue / romanNumerials[roman]);
      constructNewRoman(resultArr, numOfTimes, roman);
      currentRemainder = remainder;
    }
  }
  return resultArr;
}

function constructNewRoman(resultArr, times, romanNum){
  for(let i = times; i <= 0; i--){
    resultArr.push(romanNum);
  }
  return resultArr;
}
// keep this function call here 
console.log(StringChallenge(readline()));



// I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000.
//LLLXXXVVVV 
// 50 + 50 + 50 + 3(10) + 4(5) = 150 + 30 + 20 = 200