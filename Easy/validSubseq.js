function isValidSubsequence(array, sequence){
  for (let index = 0; index < array.length; index++) {
    if (array[index] === sequence[0]){
      sequence.shift();
    }
    if (sequence.length === 0){
      return true;
    }
  }
  return false;
}

// O(N+M) time and O1 space, condition on line 6 and not outside to save iteratings for cases that we have found the seq already before getting to the last ele of the array. O(N+M) time b/c the function shifts based on sequence length.

function faster(array, sequence){
  let seqIdx = 0;

  for (let index = 0; index < array.length; index++) {
    if (sequence[seqIdx] === array[index]){
      seqIdx++;
    }
    if (seqIdx === sequence.length - 1){
      return true;
    }
  }
  return false;
}

// ON time and O1 space. keep a counter for sequence index and will only check for the next ele when the first one is found in the array since subseq appear in the order of the array. So you will not see sequence[1] in array before sequence[0]

