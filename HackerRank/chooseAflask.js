// waste = marking - reqs 
// function chooseFlask(requirements, flaskTypes, markings){
//   let minWaste = 0;
//   let minWasteFlaskIndex = null;

//   for (let i = 0; i < markings.length; i++) {
//     const flaskIdx = markings[i][0];
//     const mark = markings[i][1];

//       for (const require of requirements){

//         if (mark >= require){
//           minWaste += 
//         }
//     }
//   }
// }

// function chooseFlask(requirements, flaskTypes, markings){
//   const flaskArr1 = [];
//   const flaskArr2 = [];
//   const flaskArr3 = [];
//   requirements.sort((a, b) => b - a);

//   for (const flask of markings){
//     const flaskIdx = flask[0];
//     const flaskMark = flask[1];

//     if (flaskIdx === 0){
//       flaskArr1.push(flaskMark);
//     } else if (flaskIdx === 1){
//       flaskArr2.push(flaskMark);
//     } else {
//       flaskArr3.push(flaskMark);
//     }
//   }

//   let firstWaste = 0;
  
//   for (const mark of flaskArr1){
//     for (let i = 0; i < requirements.length; i++) {
//       const requirement = requirements[i];

//       if (mark >= requirement){
//         firstWaste += mark - requirement;
//       } else if ( mark < requirement && i === requirement.length - 1){
//         firstWaste = -1;
//       }
//     }
//   }

//   let secondWaste = 0;
  
//   for (const mark of flaskArr2){
//     for (let i = 0; i < requirements.length; i++) {
//       const requirement = requirements[i];

//       if (mark >= requirement){
//         secondWaste += mark - requirement;
//       } else if ( mark < requirement && i === requirement.length - 1){
//         secondWaste = -1;
//       }
//     }
//   }

//   let thirdWaste = 0;
  
//   for (const mark of flaskArr3){
//     for (let i = 0; i < requirements.length; i++) {
//       const requirement = requirements[i];

//       if (mark >= requirement){
//         thirdWaste += mark - requirement;
//       } else if ( mark < requirement && i === requirement.length - 1){
//         thirdWaste = -1;
//       }
//     }
//   }

//   return Math.min(firstWaste, secondWaste, thirdWaste);
// }


function chooseFlask(requirements, flaskTypes, markings){
  requirements.sort((a, b) => b - a);
  let minWaste = [Infinity, -1];
  let i = 0;
  let j = 0;

  while (i < flaskTypes){
    let currWasteSum = 0;
    let reqNum = 0;
    let currFlaskNum = i;
    while (reqNum < requirements.length && j < markings.length && markings[j][0] === currFlaskNum){
      if (requirements[reqNum] > markings[j][1]){
        j++;
      } else {
        currWasteSum += markings[j][1] - requirements[reqNum];
        reqNum++;
      }
    }
    i++
    while (j < markings.length && markings[j][0] === currFlaskNum){j++}
    if (reqNum !== requirements.length) continue;

    if (currFlaskNum < minWaste[0]){
      minWaste[0] = currWasteSum;
      minWaste[1] = currFlaskNum;
    }
  }
  return minWaste[1];
}
