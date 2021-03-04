// https://leetcode.com/problems/increasing-subsequences/
// given array of integers, return all possible increasing subseqs where all at least length of 2 return subseqs as array in array 
// Input: [4, 6, 7, 7]
// Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
// 
// [1,2,4] not in order
// 1,2  1,4  2,4  1,2,4
// [[1],[1,2],[2],[1,4],[1,2,4],[2,4],[4]]
function possibleSubseq(array){
  array.sort((a, b) => a - b);
  // let i = array.length - 1;
  let results = [];

  for (let i = 0; i < array.length; i++) {
    if ( i === 0){
      results.push([array[i]]);
    } else (
      results.push(results[0])
    )
    
  }
}


