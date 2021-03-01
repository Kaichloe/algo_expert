// takes in special array and returns its product sum 
// array is not empty, contains integers or other arrays, product sum = sum of arrays and then multipled by the depth of the array.

function productSum(array, counter = 1){
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])){
      sum += productSum(array[i], counter + 1);
    }else {
      sum += array[i];
    }  
  }
  return sum * counter;
}
