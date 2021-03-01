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

function binarySearch(array, target){
  return binaryHelper(array, target, 0, array.length -1)
}

function binaryHelper(array, target, left, right){
  while (left <= right){ //bc if two pointer land on same # its a match
    const middleIdx = Math.floor((left + right) / 2);
    const middleEle = array[middleIdx];

    if (target === middleEle){
      return middleIdx;
    } else if (target > middleEle){
      left = middleIdx + 1;
    } else if (target < middleEle){
      right = middleIdx - 1 ;
    }
  }
}

// iterative solved and is better space wise at O1 but same time at 0logN 
// constantly halving # of eles we look at. Use of three pointers 