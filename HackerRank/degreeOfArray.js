function degreeOfArray(arr){
  let pointerIdx = 0;
  let shortest = null;

  while (pointerIdx < arr.length ){
    let currentIdx = 1;
    let currentNum = arr[currentIdx]
    let pointerNum = arr[pointerIdx];

    if (currentNum === pointerNum){
      let length = currentIdx - pointerIdx + 1;
      if (shortest === null || length < shortest){
        shortest = length;
        pointerIdx++;
      }
    }
    currentIdx++;
  }
  return shortest
}


function degreeOfArray(arr){
  let countHash = {};
  let firstOccurance = {};
  let lastOccurance = {};
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    let num = arr[i];
    if (!countHash[num]) countHash[num] = 0;
    countHash[num] += 1;
    max = Math.max(max, countHash[num]);
    if(!(num in firstOccurance)) firstOccurance[num] = i;
    lastOccurance[num] = i
  }
  
}