// all right values are greater or equal and left values are lesser = valid BST
// class BST {
//   constructor(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function validateBst(tree){
//   let currentNode = tree;

//   while (true){
//     const currentValue = currentNode.value;
//     const leftValue = currentNode.left.value;
//     const rightValue = currentNode.right.value;

//     if (currentValue < leftValue || currentValue > rightValue){
//       return false;
//     } else {
//       validateBst(currentNode.left);
//       validateBst(currentNode.right);
//     }
//   }
//   return true;
// }

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue){
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;

  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
