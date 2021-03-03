// [hello, bye, kid, kid], 0, kid 

function minMove(array, startIdx, target){
  let targetArr = [];
  let rightMin = null;
  let leftMin = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target){
      targetArr.push(i);
    }
  }

  for (let j = 0; j < targetArr.length; j++) {
    let rightTurn = targetArr[j] - startIdx;
    let leftTurn = array.length - targetArr[j] + startIdx;

    if (rightMin === null || rightMin > rightTurn){
      rightMin = rightTurn;
    }

    if (leftMin === null || leftMin > leftTurn){
      leftMin = leftTurn;
    }
  }

  if ( leftMin > rightMin){
    return rightMin;
  }else {
    return leftMin;
  }
}

