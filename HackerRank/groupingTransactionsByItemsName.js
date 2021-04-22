//group all transactions by item name, return an array of strings where each string contrains the item name followed by a space and the number of associated transactions.

function groupTransactions(transactions) {
  let hash = {};

  for (const transaction of transactions){
    if (!hash[transaction]){
      hash[transaction] = 1;
    } else {
      hash[transaction]++;
    }
  }

  let noDupsArr = Object.keys(hash);
  let occurences = Object.values(hash);
  let newArr = [];

  for (let i = 0; i < occurences.length; i++) {
    let item = noDupsArr[i];
    let number = occurences[i];
    let name = item + " " + number;
    newArr.push(name);
  }

  return newArr.sort();
}

