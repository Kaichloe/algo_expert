function palindromeChecker(s, startIndex, endIndex, subs){
  let startEnd = [];
  let i = 0;
  let resultStr = "";

  while (i < startIndex.length){
    startEnd.push([startIndex[i], endIndex[i]])
    i++
  }

  let j = 0;
  while (j < startEnd.length){
    let currStart = startEnd[j][0];
    let currEnd = startEnd[j][1] + 1;
    let currString = s.slice(currStart, currEnd);
    let currChangeCount = subs[j];
    let palindromeChecker = isPalindrome(currString);

    if (currString.length < 4 && currChangeCount > 0){
      result += "1";
    } else {
      while (currChangeCount > 0){
        if (palindromeChecker === true){
          resultStr += "1";
          break;
        } else {
          palindromeChecker = palindromeChecker - 2 < 2 ? true : palindromeChecker - 2;
          currChangeCount--;
        }
      }
      if (palindromeChecker === true && resultStr.length -1 !== j) resultStr += "1";
      if (resultStr.length - 1 !== j) resultStr += "0";
    }
    j++
  }
  return resultStr;
}




function isPalindrome(str){
  str = str.split("");
  let set = new Set();

  for(let char of str){
    if(set.has(char)){
      set.delete(char);
    } else {
      set.add(char);
    }
  }
  if (set.size < 2) return true;
  return set.size;
}