class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// diameter of tree === longest path 
function binaryTreeDiameter(tree) {
  // Write your code here.
  return getTreeInfo(tree).diameter;
}

// function leftBinary(currentNode){
//   let leftCount = 0;
//   if (currentNode.left === null) return leftCount;
//   leftCount++;
//   leftBinary(currentNode.left);
// }

// function rightBinary(currentNode){
//   let rightCount = 0;
//   if (currentNode.right === null) return rightCount;
//   rightCount++;
//   rightBinary(currentNode.right);
// }

function getTreeInfo(tree){
  if (tree === null){
    return new TreeInfo(0, 0);
  }

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}


class TreeInfo {
  constructor(diameter, height){
    this.diameter = diameter;
    this.height = height;
  }
}

// ON and OH. N is # of nodes and H is the height of the binary tree. AVERAGE CASE


