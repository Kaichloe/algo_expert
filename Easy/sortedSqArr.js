// non-empty arr of integers that is sorted low to high, return sqs of numbers in order

function sortedSquaredArray(array){
  return array.map(num => num**2);
}

// only works for pos integer b/c pref ordered already 

function sortedSquaredArray(array){
  let newArr = array.map(num => num**2);
  newArr.sort((a, b) => a - b);

  return newArr;
}

// O(nlogN) time and ON space

function fastest(array){
  const sortedSquares = new Array(array.length).fill(0);
  let firstIdx = 0;
  let lastIdx = array.length - 1;

  for (let i = lastIdx; i >= 0; i--) {
    const firstValue = array[firstIdx];
    const lastValue = array[lastIdx];

    if (Math.abs(firstValue) > Math.abs(lastValue)){
      sortedSquares[i] = (firstValue**2);
      firstIdx++;
    } else {
      sortedSquares[i] = lastValue**2;
      lastIdx--;
    }
  }
  return sortedSquares;
}

// ON and ON (two pointer)