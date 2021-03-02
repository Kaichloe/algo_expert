# def twoNumberSum(array, targetSum):
#   for num1 in array:
#     for num2 in array:
#       if num1 != num2 and num1 + num2 == targetSum:
#         return [num2, num1];
#   return [];

def twoNumberSum(array, targetSum):
  seen = {}
  for num in array:
    match = targetSum - num
    if match in seen:
      return [match, num]
    else:
      seen[num] = True
  return []

  
def twoNumberSum(array, targetSum):
  array.sort()
  left = 0
  right = len(array) - 1

  while left <= right:
    currSum = array[left] + array[right]
    if currSum == targetSum:
      return [array[right], array[left]]
    elif currSum < targetSum:
      left += 1
    elif currSum > targetSum:
      right -= 1
  return [];

