// Colidity No: 002

// An array A consisting of N integers is given. Rotation of the array means
// that each element is shifted right by one index,
// and the last element of the array is moved to the first place.

// For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]

// this a very simple algorithm
const solution = (A, K) => {
  // first we check if we have an empty array
  if (A.length === 0) {
    // in that case we return the empty array
    return []
  }

  // now create an simple array, notice that we are using "K"
  for (let i = 0; i < K; i++) {
    // grab the last popped value
    const lastValue = A.pop()
    // put in the front
    A.unshift(lastValue)
  }
  // after looped K times, we return the A. Voila!
  return A
}
