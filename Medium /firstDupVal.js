function firstDuplicateValue(array){
  let seenHash = {};

  for (const num of array){
    if (!seenHash[num]){
      seenHash[num] = 1;
    } else {
      return num;
    }
  }

  return -1;
}

// ON and ON space

function firstDuplicateValue(array){
  for (const num of array){
    const absValue = Math.abs(num);
    if (array[absValue - 1] < 0) return num;
    array[absValue - 1] *= -1;
  }
  return -1;
}

// ON time and O1 space, we use abs b/c we are changing the values to neg and if we use neg index we go out of bounds 