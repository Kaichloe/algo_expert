function isPalindrome(string){
  let arrStr = string.split("");
  let reverse = arrStr.reverse().join("");

  return reverse === string;
}

// ON ON 

function isPalindrome(string){
  let start = 0

  for (let end = string.length - 1; end >= 0; end--) {
    if (string[start] !== string[end]) return false;
    start++;
  }

  return true;
}

// ON but O1 time two pointers one at end and start going to middle 