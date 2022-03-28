// Colidity No: 005

function solution(A) {
  // create variable to store left side
  let leftSide = A[0]
  // create variable to store right side
  let rightSide = 0

  // slice by index 1 and add all of them to the right side
  A.slice(1).forEach((number) => (rightSide += number))

  // create min variable and assign the difference between left and right side
  // we will update this "min" as we go and it will be our answer at the end
  let min = Math.abs(leftSide - rightSide)

  // create simple loop starting at 1
  for (let i = 1; i < A.length - 1; i++) {
    // start adding to the left side by 1 at a time
    leftSide += A[i]
    // start removing from right side by 1 at a time
    rightSide -= A[i]
    // create current min and assign the difference between two
    let currentMin = Math.abs(leftSide - rightSide)
    // check if min is higher than current min, if so update it with current min
    if (min > currentMin) min = currentMin
  }
  // and finally, return the min. Voila!
  return min
}
