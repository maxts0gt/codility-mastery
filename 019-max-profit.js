// Colidity No: 013 - Max Profit

// This is basically problem that
// how you can maximise your profit from stock price
// when you should've bought and when you should've sold

// [4, 1, 3, 4, 7, 2] -> Here, you should basically buy at 1 and sell at 7
// profit is 6. We need to figure that out with the following algorithm

function solution(A) {
  // create global max variable, where we record the max sum of all in the array
  let globalMax = 0;
  //  create local variable where we store kind of current max sum
  //   in other words, we store max every potentials
  let localMax = 0;
  //   create simple loop, which start at 1
  for (let i = 1; i < A.length; i++) {
    // we are starting 2nd index because we need to find the difference
    // between each number (eg. [4, 1, 3] -> [3, -2] etc)
    let currentDifference = A[i] - A[i - 1];
    // now with that difference, find out what is the current max
    // simply check if [currentDifference] is higher than [sum+currentDifference] or not
    localMax = Math.max(currentDifference, localMax + currentDifference);
    // check if global max is higher than local max if so update it
    globalMax = Math.max(localMax, globalMax);
  }
  // then return the globalMax or our max profit. Voila!
  return globalMax;
}
