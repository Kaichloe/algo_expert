function twoNumberSum(array, targetSum) {
  // Write your code here.

	for(let i = 0; i < array.length; i++){
		for(let j = 0; j < array.length; j++){
			if ((i != j) && (array[i]+array[j] == targetSum)){
				return [array[j],array[i]];
			}
		}
	}
	return [];
}

// ON^2 time and O1 space, terrible for if array size is big

function twoNumberSum(array, targetSum) {
  // Write your code here.
	let seenHash = {};
	
	for(let i = 0; i < array.length; i++){
		let value = array[i];
		let target = targetSum - value;
		
		if(seenHash[target]){
			return [target, value]
		} else {
			seenHash[value] = true;
		}
	}
	return [];
}

// ON time and ON space, always a trade off between time and space but time > space usually 