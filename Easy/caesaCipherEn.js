function caesarCipherEncryptor(string, key) {
	let alpha ="abcdefghijklmnopqrstuvwxyz";
	let newString = "";
	
	for(let i = 0; i < string.length; i++){
		let currentChar = string[i];
		let oldIndex = alpha.indexOf(currentChar);
		let newIndex = (oldIndex + key) % 26;
		let newChar = alpha[newIndex];
		
		newString = newString.concat(newChar);
	}
	return newString;
}

// ON ON 