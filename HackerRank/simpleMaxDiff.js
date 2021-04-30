

function maxDifference(px){
  let maxDiff = 0;
  let start = 0;
  let end = 1;

  while (start < px.length - 1){
    const currentPrice = px[start];
    const nextPrice = px[end];

    if (currentPrice >= nextPrice ){
      start++;
      end++;
    } else { 
      const currentDiff = nextPrice - currentPrice
      maxDiff = maxDiff > (currentDiff) ? maxDiff : currentDiff;
      end++;
    }

    if (end === px.length - 1){
      start++;
    }
  }

  return (maxDiff === 0 ? -1 : maxDiff);
}

//too slow only 4/9 

  function maxDifference(px){
    let min = Math.max(...px);
    let profit = 0;

    px.forEach(val => {
      if (val < min){
        min = val;
      } else if (val - min > profit){
        profit = val - min;
      }
    })

    if (profit === 0){
      return -1;
    }

    return profit;
  }

  //correct way to do this;
