// if took an action will stop checking for 10secs

function finalInstances(instances, averageUtil){
  let currentInstances = instances;
  for (let i = 0; i < averageUtil.length; i++) {
    let ele = averageUtil[i];

    if (ele < 25){
      currentInstances = Math.ceil(currentInstances / 2);
    } else if (ele > 60){
      currentInstances = 2 * currentInstances;
    }
  }
  return currentInstances;
}

function finalInstances2(instances, averageUtil){
  let currentInstances = instances;
  let i = 0;

  while (i < averageUtil.length){
    let num = averageUtil[i];

    if (num < 25){
      currentInstances = Math.ceil(currentInstances / 2);
      i += 10;
    } else if (ele > 60 && currentInstances <= ( 2 * Math.pow(10,8))){
      currentInstances = (2 * currentInstances);
      i += 10;
    } else {
      i++
    }
  }
  return currentInstances;
}

