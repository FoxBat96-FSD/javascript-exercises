// PSEUDOCODE:
// 1. Check if the year is divisible by 4
// 2. Ensure century years (% 100 === 0) are only accepted if also divisible by 400
// 3. Return the boolean result directly

const leapYears = function(year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  return isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred);
};

// Do not edit below this line
module.exports = leapYears;
