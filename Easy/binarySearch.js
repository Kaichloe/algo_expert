function binarySearch(array, target){
  let middleIdx = Math.floor(array.length / 2); 
  let middle = array[middleIdx];

  if (array.length === 0) return -1;
  if (target === middle) return middleIdx;
  if (target > middle){
    let right = array.slice(middleIdx+1);
    let result = binarySearch(right, target)
    if (result === -1){
      return -1
    }else {
      return result + middleIdx + 1;
    }
  }
  if (target < middle ){
    let left = array.slice(0,middleIdx);
    return binarySearch(left, target)
  }
}

// should use when given an already sorted array, one of the best sorting algos, dictionary example to explain it 