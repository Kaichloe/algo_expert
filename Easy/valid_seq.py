def isValidSubsequence(array, sequence):
  counter = 0 
  for num in array:
    if num == sequence[counter]:
      counter += 1
  return counter == len(sequence)

