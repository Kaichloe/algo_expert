//k is positive num 
// each rotation moves last ele to front 

const rotate = function(nums, k){
  while (k > 0){
    let popped = nums.pop();
    nums.unshift(popped);
    k--;
  }
  return nums;
}
// too slow?

const rotate = function(nums, k){
  if (k === 0) return nums;
  
  let length = nums.length;
  let spliced = num.splice(0, length - k);
  nums = nums.concat(spliced);
}

//orginal nums is mod so doesnt work 

const rotate = function(nums, k){
  const rotations = k % nums.length;
  
  while (rotations > 0){
    let temp = nums[]
  }
}