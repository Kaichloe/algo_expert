// array with integers, move all instances of target integer to end of array and returns it
// function should perform this in place

// two pointers at end and start, to do the swap start point must point to target integer and end pointer points to non target.
// conditions is if startpointer is !== target then startpointer++ 
// if endpointer is === target then endpointer--
// after swap both pointers move startpointer++ and endpointer--

function moveElementToEnd(array, toMove){
  let startPointer = 0;
  let endPointer = array.length - 1;
	
	while (startPointer < endPointer){
    let leftInt = array[startPointer];
    let rightInt = array[endPointer];

    if (leftInt === toMove && rightInt !== toMove){
      let temp = leftInt;
      array[startPointer] = rightInt;
      array[endPointer] = temp;
      startPointer++;
      endPointer--;
    } 
    if (leftInt !== toMove) startPointer++;
    if (rightInt === toMove) endPointer--
  }

  return array;
}

// ON and O1 N is length of array 