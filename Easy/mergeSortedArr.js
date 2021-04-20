var merge = function(nums1, m, nums2, n) {

  if(n === 0){
    return nums1
  }
    
  for(let i = m; i < nums1.length; i ++){
    const nums2Ele = nums2.shift()
    nums1[i] = nums2Ele
  }

  return nums1.sort((a,b) => a - b)
  
};