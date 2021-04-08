// takes in two strings and returns the min # of edit operations to get second string;

// brute force? difference in strings is changes and then find the diff 
// str1 = abc str2 = yabd 
// changes = 2 , insert y and change c to d OR
// insert d and change c to y 

function levenshteinDistance(str1, str2) {
  let changes = 0;
	
	for (const char2 of str2){
		if (!str1.includes(char2)){
			changes++;
		}
	}
	return changes;
}

// doesnt work b/c if it includes all but isnt the same lenght its wrong str1 = table and str1


function levenshteinDistance(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]){
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}