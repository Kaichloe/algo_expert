// arr of integers and returns boolean on if arr is monotonic
// monotonic === elements from left to right are all non inc and non dec 
// aka all increase or all decrease so false if eles up and down 


// two pointer with loop i and i + 1 and keep track of inc or dec if it changes immediately return false 

function isMonotonic(array){
  let isNonDec = true;
	let isNonInc = true;
	
	for(let i = 1; i < array.length; i++){
		if (array[i] < array[i - 1]) isNonDec = false;
		if (array[i] > array[i - 1]) isNonInc = false;
	}
	
	return isNonDec || isNonInc;
}