// takes in non-empty array of disinct integers
// return 2d array of the triplets that make the target, ascending order
// return empty array if none make it
function threeNumberSum(array, targetSum){
  let result = [];
  array.sort((a,b)=> a - b);
  
  for (let i = 0; i < array.length-2; i++) {
    for (let j = i+1; j < array.length-1; j++) {
      for (let k = j+1; k < array.length; k++) {
        let first = array[i];
        let second = array[j];
        let third = array[k];
        let sum = first + second + third;
        if (sum === targetSum && i !== j && j !== k){
          result.push([first,second,third])
        }
      }
    }
  }
  return result;
}

// brute force ON**3 and ON super slow, i sorted it already so the values when returned will be in ascending already 

function threeNumberSum(array, targetSum){
  let result = [];
  array.sort((a,b)=> a - b);

  for (let i = 0; i < array.length - 2; i++) {
    let current = array[i];
    let left = i + 1;
    let right = array.length - 1
    while (left < right){
      let lPointer = array[left];
      let rPointer = array[right];
      let currentSum = current + lPointer + rPointer;

      if (currentSum === targetSum){
        result.push([current,lPointer,rPointer]);
        right--;
        left++;
      } else if (currentSum > targetSum){
        right--;
      } else if (currentSum < targetSum){
        left++;
      }
    }
  }
  return result;
}

// ON**2 time and ON space. three pointers, 