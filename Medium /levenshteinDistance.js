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
  let changes = 0;

  for (const char2 of str2){
    for (const char1 of str1){

    }
  }
}