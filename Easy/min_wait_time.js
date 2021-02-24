// non-empty array of pos inter === amount of time to execute 
// one query at a time, finish before next one, not in order
// [3,2,1,2,6] = 17 = 0+
// 1,2,2,3,6 = 0+1+3+5+8
function minimumWaitingTime(queries){
  queries.sort(function(a,b){
    return a-b;
  });
  let minTime = 0;
  let previousSum = 0
  for (let index = 0; index < queries.length; index++) {
    minTime += previousSum;
    previousSum += queries[index];
  }
  return minTime;
}

function min(queries){
  queries.sort(function(a,b){
    return a-b;
  });

  let minTime = 0;

  for (let index = 0; index < queries.length; index++) {
    const duration = queries[index];
    const queriesLeft = queries.length - (index + 1);
    minTime += (duration * queriesLeft);
  }
  return minTime;
}

// second saves space but both are 01 space and 0(nlogn) b/c of sorting. 
// [1,2,2,3,6] = 0 + (1) + (1+2) + (2 + 2 + 1) + (2 + 2 + 1 + 3) = 0+1+3+5+8 = 17
//               (4*1) + (3*2) + (2*2) + (1*3) + (0*6) 