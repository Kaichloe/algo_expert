//results arr will hold all the grouped anag
//helper method to iterate thru each anagram word, if similiar then group together
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
const groupAnagrams = function(str){
  // if (str.length === 1) return [[str[0]]];
  let hash = new Map()

  for (let i = 0; i < str.length; i++) {
    const currentWord = str[i];
    const key = splitAndSort(currentWord);

    if (!hash[key]){
      hash[key] = [currentWord];
    } else {
      hash[key].push(currentWord);
    }
  }
  return Object.values(hash);
}

function splitAndSort(word){
  let wordArr = word.split("");

  return wordArr.sort().join("");
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

