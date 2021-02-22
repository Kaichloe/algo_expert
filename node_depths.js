// distance b/w node and the tree's root 
// return sum of nodes' depths

function nodeDepths(root, depth = 0){
  if (root === null){
    return 0;
  }
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}