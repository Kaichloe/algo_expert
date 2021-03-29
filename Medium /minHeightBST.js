// get the middle number then double pointer on left and right of that number and construct BST trying to fit in 2 child for each node to ensure min height BST
// function minHeightBst(array) {
//   let middleIdx = Math.floor(array.length / 2);
//   let middleNum = array[middleIdx];
//   let left = middleIdx - 1;
//   let right = middleIdx + 1;
//   let tree = new BST(middleNum);

//   while (left >= 0){
//     const 
//     tree.left = 
//   }

//   while (right < array.length){

//   }
// }
function minHeightBst(array) {
    return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx){
  if (endIdx < startIdx) return

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  if (bst === null){
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  } 
	
	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx)
	return bst;
}
// keeping look doing middle ele and inserting O(nlogn) letting insert do the work for us

function minHeightBst(array) {
    return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx){
  if (endIdx < startIdx) return

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const newBstNode = new BST(array[midIdx]);

  if (bst === null){
    bst = newBstNode;
  } else {
    if (array[midIdx] < bst.value){
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }
	
	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx)
	return bst;
}// this is manual inserting ON time 

//cleaner but same as above

function minHeightBst(array) {
    return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null; 

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);// no need to pass parent, we just going to create it there
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst; 
}


class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}