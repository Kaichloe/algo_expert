function branchSums(root){
  let sums = [];
  calBranchSums(root, 0, sums)
  return sums;
}

function calBranchSums(currentNode, runningSum, sums){
  
  if (currentNode === null){
    return; 
  }

  let newRunningSum = runningSum + currentNode.value;

  if (currentNode.left.value === null && currentNode.right.value === null){
    sums.push(newRunningSum);
  }

  calBranchSums(currentNode.left, newRunningSum, sums);
  calBranchSums(currentNode.right, newRunningSum, sums)
}