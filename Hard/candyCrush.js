var candyCrush = function(board) {
  let squares = [];
  findCandies(board, squares);
  if(squares.length === 0)
      return board;
  crushCandies(board,squares);
  dropCandies(board);
  return candyCrush(board);
  
  function crushCandies(board,squares){
      for(s of squares)
          board[s[0]][s[1]] = 0;
  }
  
  function findCandies(board,squares){
      let n = board.length;
      let m = board[0].length;
      for(let i = 0 ; i < n ; i++){
          for(let j = 0 ; j < m ;j++){
              let val = board[i][j]
              if(val !== 0 && j < m-2 && board[i][j+1] === val && board[i][j+2] === val){
                  squares.push([i,j]);
                  squares.push([i,j+1]);
                  squares.push([i,j+2]);
              }
              if(val !== 0 && i < n-2 && board[i+1][j] === val && board[i+2][j] === val){
                  squares.push([i,j]);
                  squares.push([i+1,j]);
                  squares.push([i+2,j]);
              }
          }
      }
  }

  function dropCandies(board){
      n = board.length;
      for(let j = 0 ; j < board[0].length ; j++){
          let start = n-1;
          let end = n-1;
          while(end >= 0){
              if(board[end][j] !== 0){
                  let temp = board[end][j]
                  board[end][j] = board[start][j];
                  board[start][j] = temp;
                  start--;
                }
              end--;
          }
      }
  }
};