// go to deepest both directions left and right, then swap childs even if only one then up and do same until you hit the root then swap again?

// opposite, we can start at root then swap, the whole left and right will be swapped then we go deep level by level to swap 

function invertBinaryTree(tree){
  //write your code here
  if (tree === null){
    return;
  }
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
  
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right)
}
// ON time and OD space, N is # of nodes and D is depth of tree

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function invertBinaryTree(tree){
  const queue = [tree];
  while(queue.length){
    const current = queue.shift();
    if (current === null) continue;
    const left = current.left;
    current.left = current.right;
    current.right = left;
    queue.push(current.left);
    queue.push(current.right);
  }
}
