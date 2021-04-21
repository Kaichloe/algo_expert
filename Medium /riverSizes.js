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