// two strings, char = available chars and doc = doc need to make
// return true if you can make doc with chars or false if cannnot
// cannot use char more than there is 
// can always gen empty string

function generateDocument(characters, document){
  if (document.length === 0) return true;

  let seenChar = {};

  for(const char of characters){
    if (!seenChar[char]){
      seenChar[char] = 1;
    } else {
      seenChar[char]++;
    }
  }

  for (const char of document){
    if (!seenChar[char]){
      return false;
    } else {
      seenChar[char]--;
    }
  }

  return true;
}

// ON time and ON space where N is the length of characters given