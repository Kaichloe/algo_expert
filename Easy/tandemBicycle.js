// bike moves at max speed of the two.
// # of red === blue 
// if fastest === true then return total amount of fastest else total of slowest
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  const length = redShirtSpeeds.length;
  const speeds = redShirtSpeeds.concat(blueShirtSpeeds).sort((a, b) => b - a);
  const result = "";

  if (fastest){
    result = speeds.slice(0,length);
  } else {
    result = speeds.slice(length);
  }

  return result.reduce((acc, curr) => acc + curr)
}

// this only works if you want to find the max when fastest is true

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  const length = redShirtSpeeds.length;
 	redShirtSpeeds.sort((a, b) => b - a)// high to low;
	
  if (fastest){
    blueShirtSpeeds.sort((a, b) => a - b);
  } else {
    blueShirtSpeeds.sort((a, b) => b - a);
  }

  let totalSpeed = 0;
  for (let i = 0; i < length; i++) {
    const redSpeed = redShirtSpeeds[i];
    const blueSpeed = blueShirtSpeeds[i];
    totalSpeed += Math.max(redSpeed, blueSpeed);
  }
  return totalSpeed;
}