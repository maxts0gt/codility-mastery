// Colidity No: 004

// An array A consisting of N different integers is given.
// The array contains integers in the range[1..(N + 1)],
// which means that exactly one element is missing.

// For example, given array A such that:
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

function solution(A) {
  // first create variable for actual sum we got
  let actualSum = 0
  // then go through then array, and add all of them to the actual sum
  A.forEach((number) => (actualSum += number))

  // create variable max number and assign length + 1 (basically the maximum we have)
  let maxNumber = A.length + 1

  // create expected variable
  // apply sum to x function and assign value to expected number
  let expectedNumber = (maxNumber * (maxNumber + 1)) / 2

  // find difference between expected and actual sum. Voila!
  return expectedNumber - actualSum
}
