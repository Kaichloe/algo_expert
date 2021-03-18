function minmumMoves(arr1, arr2){
  const newArr1 = arr1.join("").split("").map(ele => Number(ele));
  const newArr2 = arr2.join("").split("").map(ele => Number(ele));
  let minMoves = 0;

  for (let i = 0; i < newArr1.length; i++) {
    const digitInFirst = newArr1[i];
    const digitInSecond = newArr2[i];
    let moves = Math.abs(digitInFirst - digitInSecond);

    minMoves+= moves;
  }
  return minMoves
}

// ON time and ON space 