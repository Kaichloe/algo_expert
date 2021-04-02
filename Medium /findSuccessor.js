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

// ON and ON where N is # of node

function findSuccessor(tree, node){
  if (node.right !== null) return getLeftmostChild(node.right);
  return getRightmostParent(node);
}

function getLeftmostChild(node){
  let currentNode = node;
  while (currentNode.left !== null){
    currentNode = currentNode.left;
  }
  return currentNode;
}

function getRightmostParent(node){
  let currentNode = node;
  while (currentNode.parent !== null && currentNode.parent.right === currentNode){
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
}

// OH and O1 where H is the height of the tree