//string of lower alphabet letters, return index of string's first non repeat char

function firstNonRepeatingCharacter(string) {
  const alpha = [..."abcdefghijklmnopqrstuvwxyz"];
  const set = new Set();

  for (const char of string){
    if (set.size === 0){
      set.add(char);
    } else {
      if (!set.has(char)){
        return alpha.indexOf(char);
      } else {
        continue;
      }
    }
  }
  return -1;
}

// understood problem wrong, **where do you see a char thats doesnt have a dup in the whole string

function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let foundDup = false;
    for (let j= 0; j < string.length; j++) {
      if (string[i] === string[j] &&  i !== j) foundDup = true; 
    }
    
    if (!foundDup) return i;
  }
  return -1;
}
// if loop is pointer and inner loop checks to find if there is a dup in the string
// if we get to a char that doesnt have a dup we return the idx, else -1
// ON**2, O1, where n is length of string

// faster 

function firstNonRepeatingCharacter(string) {
  let seenHash = {};

  for (const char of string){
    if (!seenHash[char]){
      seenHash[char] = 1;
    } else {
      seenHash[char]++;
    }
  }

  for (const key in seenHash){
    const value = seenHash[key];
    if (value === 1)return string.indexOf(key);
  }

  // for (const index in string){
  //   const char = string[index];
  //   if (seenHash[char] === 1) return index;
  // }

  return -1;
}

// ON and O1 space, because our hash will never has more than 26 key value pairs.
// line 56-59 can replace line 51-54 as you dont need to do indexOf so it is slightly faster.
