// sentence with special chars 
// strip special chars and return # of actually words **numbers dont count unless they are spelled out

function howMany(sentence){
  let wordArr = sentence.split(" ");
  let wordCount = 0
  debugger
  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i];

    if (charChecker(word)){
      wordCount++;
    }
  }
  return wordCount;
}

function charChecker(word){
  let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-.!,?";
  let wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
    if(!alpha.includes(wordArr[i])){
      return false;
    }
  }
  return true;
}

console.log(howMany("jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj."));

console.log(howMany("b? Dl )B 4(V! A. MK, YtG ](f 1m )CNxuNUR {PG? "));

// doesnt work b/c if there are extra spaces in the sentence, splitting a space will result in two empty eles and empty is in everything, can solve this using regex