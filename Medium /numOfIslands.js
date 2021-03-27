let numIslands = function(grid) {
    if (grid === null || grid.length === 0) return 0;
    
    let islands = 0;
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === '1') {
                islands += dfsFillCount(grid, i, j);
            } 
        }
    }
    
    return islands;
    
};
 
let dfsFillCount = function(board, i, j) {
    
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== '1') {
        return 0;
    }
    
    board[i][j] = '0';
    
    dfsFillCount(board, i+1, j);
    dfsFillCount(board, i-1, j);
    dfsFillCount(board, i, j+1);
    dfsFillCount(board, i, j-1);
    
    return 1;
}

function numOfislands(grid){
	let islands = 0;
  for(let i = 0; i < grid.length; i++){
	  let row = grid[i]
	  for(let j = 0; j < row.length; j++){
		  let ele = row[j];
		  if(ele === '1'){
			  islands += checkAround(i, j, grid);
      }
    }
  }
return islands;
}

function checkAround(i,j, grid){
	if (grid[i][j] === '0') return 0;
	if (grid[i][j] === undefined) return 0;

	grid[i][j] = '0';
	checkaround(i+1,j, grid);
	checkaround(i-1,j, grid);
	checkaround(i, j - 1, grid);
	checkaround(i, j + 1, grid);

	return 1;
}
