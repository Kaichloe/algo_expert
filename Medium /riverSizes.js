// 2nd array could be unequal height and length, contains 0s and 1s

function riverSizes(matrix) {
  let sizesArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let landOrRiver = matrix[i][j];
      if (landOrRiver === 1){
        sizesArr.push(riverChecker(i,j,matrix))
      }
  }
    
  }
}

function riverChecker(row,column, matrix){
  let position = [row, column];
  let totalSize = 0;
  if (matrix[position] === 1){
    totalSize++;
    matrix[postion] = 0;
  } else {
    return totalSize;
  }

  riverChecker(row+1, column, matrix)
  riverChecker(row-1, column, matrix)
  riverChecker(row, column+1, matrix)
  riverChecker(row, column-1, matrix)
}


// 
function riverSizes(matrix){
  const sizes = [];
  const visted =matrix.map(row => row.map(value => false)); //make a dup matrix where all values are false
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visted[i][j]) continue; //if it has been visted, if true then go to next one
      traverseNode(i, j, matrix, visted, sizes);// this hits if visted is false
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visted, sizes){
  let currentRiverSize = 0;
  const nodesToExplore = [[i,j]];
  while (nodesToExplore.length){
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visted[i][j]) continue;
    visted[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvistedNeighors = getUnvistedNeighbors(i, j, matrix, visted);
    for (const neighbor of unvistedNeighors){
      nodesToExplore.push(neighbor);  
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvistedNeighbors(i, j, matrix, visted){
  const unvistedNeighors = [];
  if (i > 0 && !visted[i - 1][j]) unvistedNeighors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visted[i + 1][j]) unvistedNeighors.push([i + 1, j]);
  if (j > 0 && !visted[i][j - 1]) unvistedNeighors.push([i, j -1]);
  if (j < matrix[0].length - 1 && !visted[i][j + 1]) unvistedNeighors.push([i, j + 1]);
  return unvistedNeighors;
}

//O(wh) and O(wh) where w and h are the width and height of the input matrix