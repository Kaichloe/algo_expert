class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const inOrderTraverseArray = inOrderTraverse(tree, array = []);
  const maxIdx = inOrderTraverseArray.length - 1;
  const indexNode = inOrderTraverseArray.indexOf(node);
  const successorIdx = indexNode + 1;

  if (successorIdx < maxIdx) return inOrderTraverseArray[successorIdx]; 
  return null;
}


function inOrderTraverse(node, order = []){
  if (node === null) return order;

  inOrderTraverse(node.left, order);
  order.push(node);
  inOrderTraverse(node.right, order);

  return order;
}

