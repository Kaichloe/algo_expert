// two pointers, one at start and one at end then swap???? best way???

//brute force
//string to array at spaces, loop thru string to count # of spaces, create empty array where the length is equal to count of spaces and # of words. but cannot do split or reverse method but can use built in join.

//iterate from end - 2 and pointer at end and look until space to get the word then make new string
function reverseWordsInString(string) {
  debugger

  let reversed = "";
  let end = string.length;
  
  for (let i = end - 1; i >= 0; i--) {
    let current = string[i];
    if (current === " "){
      let currentWord = string.slice(i+1, end);
      reversed += (currentWord + " ");
      let end = i;
    }
    if (i === 0){
      let currentWord = string.slice(i, end);
      reversed += currentWord;
    }
  }

  return reversed;
}

//ON and ON. reversed is going to hold equal to length of string