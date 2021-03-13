function minTravelCost(numPeople, x, y){
  let xCord = [];
  let yCord = [];
  let answer = 0;

  for (let i = 0; i < numPeople.length; i++) {
    let peopleCount = numPeople[i];
    while (peopleCount){
      xCord.push(x[i]);
      yCord.push(y[i]);
      peopleCount--;
    }
  }

  xCord.sort((a, b) => a - b);
  yCord.sort((a, b) => a - b);

  let len = xCord.length;
  let mid = Math.floor(len/2);

  let medianX = xCord[mid];
  let medianY = yCord[mid];

  for (let i = 0; i < numPeople.length; i++) {
    answer += numPeople[i] * cost(medianX, medianY, x[i], y[i])
  }

  return answer;
}

function cost(medianX, medianY, a, b){
  return (Math.abs(medianX - a) + Math.abs(medianY - b));
}

// use median not mean 
