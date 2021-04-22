//array list of string names and a roman numeral, sort by first name then by decimal value of roman num.

function sortRoman(names) {
  let hash = {};

  for (let i = 0; i < names.length; i++) {
    let element = names[i].split(" ");
    let name = element[0];
    let roman = element[1];
    let number = roman_to_Int(roman);
    
    if(!hash[name]){
      hash[name] = [number];
    } else{
      hash[name].push(number);
    }
  }

  let sortedNamesArr = Object.keys(hash).sort();

  let romanArr = [];
  for (let j = 0; j < sortedNamesArr.length; j++) {
    let name = element[0];
    hash[name].sort((a, b) => a - b);
    while (hash[name].length !== 0){
      let integer = hash[name].shift();
      let roman = romanize(integer);
      romanArr.push(name + " " + roman);
    }
  }

  return romanArr;
}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function roman_to_Int(str1) {
  if(str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for(var i = 1; i < str1.length; i++){
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i-1));
    if(curr <= pre){
      num += curr;
    } else {
      num = num - pre*2 + curr;
    }
  }

  return num;
}

function char_to_int(c){
  switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
  }
}