# return new array 
def sortedSquaredArray(array):
  sqArray = [];
  for num in array:
	sqArray.append(num * num);
	
  sqArray.sort();
  return sqArray;


def sortedSquaredArray(array):
  	sortedSqArray = [0 for _ in array]
	leftPointer = 0
	rightPointer = len(array) - 1
	
	for index in reversed(range(len(array))):
		leftValue = array[leftPointer]
    	rightValue = array[rightPointer]

    	if abs(leftValue) > abs(rightValue):
			sortedSqArray[index] = leftValue * leftValue
			leftPointer += 1
		else: 
			sortedSqArray[index] = rightValue * rightValue
			rightPointer -= 1
			
	return sortedSqArray

