// PSEUDOCODE:
// 1. Validate: check if both inputs are non-negative integers
// 2. Swap inputs if min is greater than max
// 3. Loop through every integer between min and max, accumulating total sum

const sumAll = function(min, max) {
  // Validate that both inputs are positive integers
  if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
    return 'ERROR';
  }

  // Swap values if provided out of order (e.g., sumAll(4, 1))
  if (min > max) {
    [min, max] = [max, min];
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;