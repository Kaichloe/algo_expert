//iterate from end and subtract?
// edge case [1,2,3,7] = [1,1,4] profit is 1 + 1 + 4 
const maxProfit = function(prices) {
  let profits = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let curr = prices[i];
    let next = prices[i + 1];

    if (next > curr){
      profits += next - curr;
    }
  }
  return profits;
};