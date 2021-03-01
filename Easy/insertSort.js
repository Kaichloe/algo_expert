function insertSort(array){
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]){
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j -= 1;
    }
  }
  return array;
}

// terrible like bubblesort On**2 average and worst case O1 space