// Back-end Challenge
// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/json-cleaning and then clean the object according to the following rules: Remove all keys that have values of N/A, -, or empty strings. If one of these values appear in an array, remove that single item from the array. Then console log the modified object as a string.

// Example Input
// {"name":{"first":"Daniel","middle":"N/A","last":"Smith"},"age":45}

// Example Output
// {"name":{"first":"Daniel","last":"Smith"},"age":45}
// Browse Resources
// Search for any help or documentation you might need for this problem. For example: array indexing, Ruby hash tables, etc.


const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  
  let data = '';

  // for (const key in resp){
  //   data = resp[key];

  //   if (data === null || data === "N/A", data === ""){
  //     delete resp[key];
  //   }

  //   if (data instanceof Object){
  //     data = 
  //   }
  
  // }
  Object.keys(resp).forEach(key => resp[key] === "N/A" || resp[key] === "" ? delete resp[key] : {}); 
  
  console.log(resp);

});