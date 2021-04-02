function longestBitonicSubarray(arr) {
  let increasing = new Array(arr.length);
  let decreasing = new Array(arr.length);

  increasing[0] = 1;
  decreasing[arr.length - 1] = 0;

  for (let index = 1; index < array.length; index++) {
    increasing[index] = arr[index] >= arr[index - 1] ? increasing[index - 1] + 1 : 1;
  }

  for (let index = arr.length - 2; index >= 0; index--) {
    decreasing[index] = arr[index] >= arr[index + 1] ? decreasing[index + 1] + 1 : 0;
  }

  let max = increasing[0] + decreasing[0];
  
  for (let index = 1; index < array.length; index++) {
    max = Math.max(max, decreasing[index] + increasing[index])
  }

  return max;
}