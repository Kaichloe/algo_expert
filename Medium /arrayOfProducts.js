// return output array where each element is equal to the product of every other num in the input array NO DIVISION

function arrayOfProducts(array) {
  const productArr = [];
	
	for (let i = 0; i < array.length; i++){
		let runningProduct = 1;
		for (j = 0; j < array.length; j++){
			if (i !== j){
				runningProduct *= array[j]
			}
			productArr[i] = runningProduct;
		}
	}
	return productArr
}

// On**2 and On, if can do division can do product of all eles with loop and if num = 0 set as 1 then loop and divide totalProduct by current num. If curr num is 0 then push 0

// [5,1,4,2]
function arrayOfProducts(array) {
  const productArr = new Array(array.length).fill(1);
	
	let leftRunningProduct = 1; //product of all eles left of the current num IE product of all eles left of array[2] is 5*1=5
	for (let i = 0; i < array.length; i++){
		productArr[i] = leftRunningProduct;
		leftRunningProduct *= array[i];
	}
	
	let rightRunningProduct = 1; //product of all eles right of the current num IE product of all eles right of array[2] is 2=2 (default 1)
	for (let i = array.length - 1; i >= 0; i--){
		productArr[i] *= rightRunningProduct;
		rightRunningProduct *= array[i];
	}
	
	return productArr;
}

// ON and ON 