// take in non empty arr of inters returns max sum of subarray (inters must be adjacent)
function kadanesAlgorithm(array) {
  let maxEnd = array[0];
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEnd = Math.max(num, maxEnd + num);
    maxSoFar = Math.max(maxSoFar, maxEnd)
  }
  return maxSoFar;
}