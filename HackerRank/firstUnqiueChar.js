//appear only only. string with lowercase, return index of first occurence of unique 
function getUniqueCharacter(s) {
    let occurences = {};

    for (const char of s){
      if (!occurences[char]){
        occurences[char] = 1;
      } else {
        occurences[char]++;
      }
    }

    for (const key in occurences){
      if (occurences[key] === 1){
        return (s.indexOf(key) + 1)
      }
    }
    return -1;
}
