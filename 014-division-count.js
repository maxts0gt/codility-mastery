// Colidity No: 008 - Division Count

// Write function that returns number of integers
// divisble between certain array

// For example, for A = 6, B = 11 and K = 2,
// your function should return 3,
// because there are three numbers divisible
// by 2 within the range [6..11], namely 6, 8 and 10.

const solution = (A, B, K) => {
  // for this solution we should approach it by
  // finding factorials of lower and upper end
  let lowerEnd = Math.ceil(A / K);
  let upperEnd = Math.floor(A / K);
  // then get the difference between two factorials and 1
  // basically all the factorials are within these two walls
  // and return the the result, Voila
  return upperEnd - lowerEnd + 1;
};
