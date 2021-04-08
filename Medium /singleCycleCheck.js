//array of inters, each is a jump of its value, if out of bound it wraps, single cycle = every ele visited once be4 landing back to start
// form array same length as array as a checker, all values are false and turns true when checked but if checked is true already then return false, also make sure that the last checking lands on the starting idx

function hasSingleCycle(array){
	debugger
  const length = array.length;
  const checker = new Array(array.length).fill(false);
  
  for (const index in array){
    if (index === length - 1){
      const newIdx = newIndex(index, array);
      if (newIdx !== 0 || checker[newIdx] === true){
        return false;
      } else {
        checker[newIdx] = true;
      }
    } else{
      if (checker[index] === true){
        return false;
      } else {
        const newIdx = newIndex(index, array);
				checker[newIdx] = true;
      }
    }
  }
  checker.every(ele => ele === true);
}

function newIndex(currentIdx, array){
	const jump = array[currentIdx];
	const newIndex = (currentIdx + jump) % array.length;
	return newIndex >= 0 ? newIndex : newIndex + array.length;
}

// need to follow the jumps not the order

function hasSingleCycle(array){
  let numElementsVisted = 0;
  let currentIdx = 0;
  while (numElementsVisted < array.length){
    if (numElementsVisted > 0 && currentIdx === 0) return false;
    numElementsVisted++;
    currentIdx = newIndex(currentIdx, array);
  }
  return currentIdx === 0;
}

function newIndex(currentIdx, array){
	const jump = array[currentIdx];
	const newIndex = (currentIdx + jump) % array.length;
	return newIndex >= 0 ? newIndex : newIndex + array.length;
}