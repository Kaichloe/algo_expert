function maximumOccurringCharacter(text){
  let seenChar = {};
  let max = 0;
  let maxChar;

  for (let i = 0; i < text.length; i++) {
    if (!seenChar[text[i]]){
      seenChar[text[i]] = 1;
    } else {
      seenChar[text[i]]++;
    }
  }

  for (const char in seenChar) {
    let value = seenChar[char];

    if (value > max){
      max = value;
      maxChar = char;
    }
  }

  return maxChar;
}