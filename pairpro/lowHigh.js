
// https://leetcode.com/problems/sequential-digits/
// given low and high give me seq low 100 and high 300 return [123,234]
// 10 > 900 12, 123, 234, 345, 456, 
function seqHighLow(low, high){
  let results = [];

  for (let i = low; i < high + 1; i++) {
    if(checker(i)){
      results.push(i);
    }
  }
  return results;
}

function checker(num){
  let numArr = num.toString().split("");

  for (let i = 0; i < numArr.length - 1; i++) {
    let first = Number(numArr[i]); // 1
    let second = Number(numArr[i+1]); // 0 
    
    if ((first + 1) !== second){
      return false;
    }
  }
  return true;
}


function faster(low, high){ // 
  let lowStr = low.toString() //"10"
  let start = 12;
  let pattern = [];
  let result = []; 
  //12,23,34,45,56,67,78,89,100
  //123,234,345,456,567,678,789

  for (let i = 0; i < lowStr.length; i++) {
    pattern.push(1); 
  }

  pattern = Number(pattern.join("")); //11

  while(start <= high){
    if (start >= low && start % 10 <= 9 ){
      result.push(start);
    } else {
      
    }
    start+=pattern;
  }

  return result;
}

// 123456789 
// 570 3000
// 678
// []
// ["1","1","1"] => "111" => 111
function faster(low, high){
  let seq = "123456789";
  let counter = 2;
  let result = [];

  for (let i = 0; i < seq.length - counter; i++) {
    let newSeq = seq.slice(i,counter);
    
    if (newSeq >= low && newSeq <= high){
      result.push(newSeq);
    }
  }
  counter++;
}

Array.from(Array(10).keys())
Array.from(Array(10).keys()).map(num => num + 5)

for (const num of nums){

}