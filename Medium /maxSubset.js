function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  let maxSums = array.slice(); //full copy of array
  maxSums[1] = Math.max(array[0], array[1]); //have to see where start first 

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }
  return maxSums[maxSums.length - 1];
}

// [75, 105, 120, 75, 90, 135]
// copy [75, 105, 120, 75, 90, 135]
//[75,105,195,195,210,330]
// ON and ON 

function maxSubsetSumNoAdjacent(array){
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  let previousSum = array[0];
  let maxSum = Math.max(array[0], array[1])

  for (let i = 2; i < array.length; i++) {
    const current = Math.max(maxSum, previousSum + array[i]);
    previousSum = maxSum;
    maxSum = current;
  }
  return maxSum;
}