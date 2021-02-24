// array of pos # repping coins, function to return min change that you CANNOT create, no coins then return 1
// think its like twosum problem target but target is min so we increment it if found
function nonConstructibleChange(coins){
  coins.sort((a,b) => a - b);

  let currentChange = 0;

  for(const coin of coins){
    if (coin > currentChange + 1){
      return currentChangel
    }
    currentChange += coin;
  }

  return currentChange + 1;
}