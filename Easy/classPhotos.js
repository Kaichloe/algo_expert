// even # of students, half red half blue shirts 
// two row , rules - same color same row, back row taller than front to see.
// two input arrays, heights of blue and heihgts of red shirt == length, height === pos integer
// true or false if photo taken to follow rules.
// 5,8,1,3,4 => 1,3,4,5,8
// 6,9,2,4,5 => 2,4,5,6,9
function classPhotos(redArr, blueArr){
  redArr.sort((a,b)=> a-b);
  blueArr.sort((a,b)=> a-b);
  let redCount = 0;
  let blueCount = 0;

  for (let index = 0; index < redArr.length; index++) {
    if (redArr[index] > blueArr[index]){
      redCount++
    }
  }

  for (let index = 0; index < redArr.length; index++) {
    if (redArr[index] < blueArr[index]){
      blueCount++
    }
  }
  return (redCount === redArr.length || blueCount === redArr.length);
}

// O(nlogn) and O1