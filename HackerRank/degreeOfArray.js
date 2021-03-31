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