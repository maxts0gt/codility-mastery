// Colidity No: 003

// A non-empty array A consisting of N integers is given.
// The array contains an odd number of elements,
// and each element of the array can be paired with another element
// that has the same value, except for one element that is left unpaired.

// basically from array of [3, 3, 5, 7, 9, 7, 9] you should return 5

function solution(A) {
  // grab the length
  const length = A.length
  // check if it is single value, if so return 0
  if (length === 1) A[0]
  // now sort the array desc, this will simplify the algorithm
  A.sort((a, b) => a - b)
  // now loop the new array, but two at a time since it is sorted
  // means that two similar valus are together
  for (let i = 0; i < length - 1; i += 2) {
    // and check if those two values are equal to each other
    if (A[i] !== A[i + 1]) {
      // if not equal, then return that value, meaning 'odd'
      return A[i]
    }
  }
  // if condition inside the loop doesn't apply, return value at length -1
  return A[length - 1]
}
