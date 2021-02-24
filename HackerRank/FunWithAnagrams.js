function funWithAnagrams(text){
  let keep = [text[0]];

  for (let i = 1; i < text.length; i++) {
    let checker = keep[keep.length - 1];
    let sortedChecker = checker.split("").sort();
    let sortedCurrent = text[i].split("").sort();
    if (sortedChecker !== sortedCurrent){
      keep.push(text[i]);
    }
  }
  return keep;
}

function funWithAnagrams(text){
  let keep = [text[0]]

  for (let i = 0; i < text.length; i++) {
    for (let j = i+1; j < text.length; j++) {
      if (i < j){
        let first = sortString(text[i]);
        let second = sortString(text[j]);

        if (first !== second){
          keep.push(text[j]);
        }
      }
    }
  }
  return keep.sort();
}

function sortString(string){
  return string.split("").sort();
}

function funWithAnagrams2(array){
  for(let i=0;i<array.length;i++){
    for(let j=array.length-1;j>i;j--){
      let sortedA = array[i].split("").sort().join("")
      let sortedB = array[j].split("").sort().join("")
      if(sortedA===sortedB){
        array.splice(j,1)
      }
    }
  }
  return array.sort()
}