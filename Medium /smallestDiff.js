// two non empty arrays, find pair of #s one from each whose abs diff is CLOSEST TO ZERO, return array containing them (first arr first)

// brute force would be to loop twice 
function smallestDifference(arrayOne, arrayTwo){
  let result;
  let closest = null;

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const first = arrayOne[i];
      const second = arrayTwo[j];
      const absDiff = Math.abs(first - second);
      
      if (closest === null || closest > absDiff){
        closest = absDiff;
        result = [first, second];
      }
    }
  }
  return result;
}

// this is brute method but works. O(N*M) when N is # of eles in arr1 and M is # of eles in arr2, O1 space though always one closest and a result array with two numbers

// -1,3,5,10,20,28
// 15,17,26,134,135


function smallestDifference(arrayOne,arrayTwo){
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let closest = null;
  let currentDiff = null;
  let pair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length){
    let first = arrayOne[idxOne];
    let second = arrayTwo[idxTwo];

    if (first < second){
      currentDiff = second - first;
      idxOne++
    } else if ( first > second){
      currentDiff = first - second;
      idxTwo++;
    } else {
      return [first, second];
    }

    if (closest === null || closest > currentDiff){
      closest = currentDiff;
      pair = [first, second];
    }
  }
  return pair;
}

// sort both arrays, two pointers, to get the closest to zero the two numbers must be close to each other so if first number is greater than we must increase second number to catch up vice versa. we loop thru it all and return the closest pair. O(nlog(n) + mlogM) we sort two arrs and the while loop gets dominated, O1 space
