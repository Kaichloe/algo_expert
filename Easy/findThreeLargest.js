function findThreeLargestNumbers(array){
  let threeLargest = [null,null,null];

  for(const num of array){
    checkLargest(threeLargest, num);
  }
  return threeLargest;
}

function checkLargest(threeLargest, num){
  if (threeLargest[2] === null || num > threeLargest[2]){
    shift(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]){
    shift(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]){
    shift(threeLargest, num, 0)
  }
}

function shift(threeLargest, num, idx){
  for (let i = 0; i < idx + 1; i++) {
    if (i === idx){
      threeLargest[i] = num;
    } else {
      threeLargest[i] = threeLargest[i + 1];
    }
  }
}