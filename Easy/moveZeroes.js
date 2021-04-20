var moveZeroes = function(nums) {
    
  let numsOfZero = 0

    for(let i = 0; i< nums.length; i ++){
      if(nums[i] === 0){
        console.log(i)
        nums.splice(i,1)
        numsOfZero ++
        i --
      }
    }

    while(numsOfZero !== 0){
      nums.push(0)
      numsOfZero -- 
    }
    return nums
};