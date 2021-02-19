function findClosestValueInBst(tree,target){
  let closest = 0 
  let currNode = tree;
  while (currNode !== null){
    if (Math.abs(target - closest) > Math.abs(target - currNode.value)){
      closest = currNode.value;
    }
    if (currNode.value > target){
      currNode = currNode.left;
    } else if (currNode.value < target){
      currNode = currNode.right;
    } else {
      break;
    }
    return closest;
  }
}

// ON and O1