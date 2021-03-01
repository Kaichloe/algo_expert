// non empty string
// if more than 9 then split IE 9A3A2B
function runLengthEncoding(string){
  let encodedresult = [];
  let pushChar = string[0];
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    let currentChar = string[i];
    if (count === 9 || currentChar !== pushChar){
      encodedresult.push(count, pushChar);
      count = 1;
      pushChar = currentChar;
    }else {
			count++;
		}
  };
	encodedresult.push(count, pushChar);
  return encodedresult.join("");
}

// AAAAAAAAA-AAA-BB

