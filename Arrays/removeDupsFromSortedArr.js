//nums is passed by ref. nums is a sorted array 
// mod nums array in place with 01 space 

//two pointers, one at start and one is just +1 of that and if two pointers equal then remove at pointer two index. move both pointers by one when two pointers dont equal;
const removeDuplicates = function(nums){
  let start = 0;
  let next = 1;
  
  while (next < nums.length){
    let first = nums[start];
    let second = nums[next];

    if (first === second){
      nums.splice(next, 1);
    } else {
      start++;
      next++;
    }
  }
  return nums.length;  
}