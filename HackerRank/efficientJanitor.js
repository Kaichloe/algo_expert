// weight.length = n which is number of plastic bags
// determine min # of trips has to make, weight of each is 1.01lb to 3lb
//each trip he can carry no more than 3lb of trash

//no way to carry three bags on one trip, the most is two b/c min is 1.01 and max is 3 and 1.01 x 3 > 3lbs

function efficientJanitor(weight) {
  weight.sort((a, b) => b - a)// sort to get highest weights to lowest

  let numOftrips = 0;
  let start = 0
  let end = weight.length - 1;

  while (start <= end){
    let first = weight[start];
    let second = weight[end];

    if (first + second > 3){
      numOftrips++;
      start++;
    } else {
      numOftrips++;
      start++;
      end--;
    }
  }
  return numOftrips;
}