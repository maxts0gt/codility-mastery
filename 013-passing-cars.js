// Colidity No: 007 - Passing Cars

// Basically you have to count how many cars are passing
// each other on the road
// You are given array, eg. [0, 1, 0, 1, 1]
// In this example, 0 is going left and 1 is right going right car
// answer should be 5. First "0" passes 3 cars and second "0" passes two cars

const solution = (A) => {
  // first create suffix sum array
  let suffixSum = new Array(A.length + 1).fill(0);
  // And number of cars passing count, which we will return at the end
  let count = 0;
  // create simple loop
  for (let i = A.length - 1; i >= 0; i--) {
    //  here we are actually creating suffix sum by updating suffix array 1 by 1
    suffixSum[i] = A[i] + suffixSum[i + 1];
    // now we check if car is actually passing, in this case car "0"
    if (A[i] === 0) {
      // if car passes, grab the current sum and add it to the count
      count += suffixSum[i];
    }
    // also we check if number of car passes 1 billion, then return -1
    if (count > 100000000) return -1;
  }
  //   after the loop, we will have the number of cars passed updated
  //   so return the car. That's it!
  return count;
};
