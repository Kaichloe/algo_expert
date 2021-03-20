// all right values are greater or equal and left values are lesser = valid BST
class BST {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree){
  let currentNode = tree;

  while (true){
    const currentValue = currentNode.value;
    const leftValue = currentNode.left.value;
    const rightValue = currentNode.right.value;

    if (currentValue < leftValue || currentValue > rightValue){
      return false;
    } else {
      validateBst(currentNode.left);
      validateBst(currentNode.right);
    }
  }
  return true;
}