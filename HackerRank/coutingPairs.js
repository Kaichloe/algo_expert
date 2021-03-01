function countPairs(numbers, k){
  // set to save values of a whhere a= b -k 
  const aValues = new Set();

  for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i] - k;
    if (aValues.has(a)){
      continue;
    } else {
      aValues.add(a);
    }
  }

  let count = 0;

  for (let j = 0; j < numbers.length; j++) {
    if (aValues.has(numbers[j])){
      count++;
      aValues.delete(numbers[i]);
    }
  }
  return count;
}