// PSEUDOCODE:
// 1. Convert string into an array of single characters using .split('')
// 2. Reverse the array using .reverse()
// 3. Glue characters back together into a string using .join('')

const reverseString = function(string) {
  return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;