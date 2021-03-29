
// function inOrderTraverse(tree, array) {
//   if (tree === null) return array.sort((a, b) => b - a);
//   array.push(tree.value);

//   inOrderTraverse(tree.left, array);
//   inOrderTraverse(tree.right, array);
// }
// didnt traverse correctly, hacky method for answer

function inOrderTraverse(tree, array) {
  if (tree !== null){
    inOrderTraverse(tree.left, array); //goes all the way down 
    array.push(tree.value);// then pushes lowest value; 
    inOrderTraverse(tree.right, array); //call stack to this which checks if any right child
  }
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree !== null){
    array.push(tree.value); //pushing values first;
    preOrderTraverse(tree.left, array); // left side values first;
    preOrderTraverse(tree.right, array) // right side next
  }
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree !== null){
    postOrderTraverse(tree.left, array); //left values  
    postOrderTraverse(tree.right, array); //right values
    array.push(tree.value); //then push, with root value as last 
  }
  return array;
}