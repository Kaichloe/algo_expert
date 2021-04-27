// two pointers, one at start and one at end then swap???? best way???

//brute force
//string to array at spaces, loop thru string to count # of spaces, create empty array where the length is equal to count of spaces and # of words. but cannot do split or reverse method but can use built in join.

//iterate from end - 2 and pointer at end and look until space to get the word then make new string
function reverseWordsInString(string) {
  debugger

  let reversed = "";
  let end = string.length - 1;
  
  for (let i = end; i <= 0; i--) {
    let current = string[i];
    if (current === " "){
      let currentWord = string.slice(i+1);
      reversed += (currentWord + " ");
    }
  }

  return reversed;
}