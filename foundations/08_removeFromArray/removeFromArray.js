// PSEUDOCODE:
// 1. Accept 'array' and gather all additional arguments into an array named 'args' using rest parameters (...args)
// 2. Use .filter() to test each 'item' in the original array
// 3. Keep 'item' only if it is NOT present in 'args' (!args.includes(item))
// 4. Return the newly filtered array
const removeFromArray = function(array, ...args) {
  return array.filter(item => !args.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;