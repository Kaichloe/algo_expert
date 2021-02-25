function reverseString(str){
  let result = new Array(str.length)
  let j = 0;

  for (let index = str.length - 1; index >= 0 ; index--) {
    result[j] = str[index];
    j++;
  }

  return result.join("");
}

console.log(reverseString("hello"))