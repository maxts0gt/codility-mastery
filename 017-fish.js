// Colidity No: 011 - Fish

// basically we are given two array
// first is size of fish: [4, 3, 2, 1, 7]
// second is corrisponding fish size: [0, 1, 0, 0, 0]
// in this example fish size of 3 will eat of size of 2 and 1
// but it will be eaten by 7. Hence, two fish will survive [4 and 7]

function solution(A, B) {
  // first we create stack array to store fish of one direction
  let stack = [];
  // and survivors count value
  let survivors = 0;
  // now create simple loop
  for (let i = 0; i < A.length; i++) {
    // grab the current fish size
    let size = A[i];
    // check if the fish is going to the direction (left)
    if (B[i] === 1) {
      // then put it in the stack (so we will compare it against)
      stack.push(size);
      // now if the fish is not going left
    } else {
      // first take the last one from our array
      let lastOne = stack.length === 0 ? -1 : stack.pop();
      // and compare against lastOne's size
      while (lastOne !== -1 && lastOne < size)
        // update the last one
        lastOne = stack.length === 0 ? -1 : stack.pop();
      // after while loop, check if the stack is empty
      if (lastOne === -1)
        // if so, incremenet survivor by 1
        survivors += 1;
      //   else push that into the stack
      else stack.push(lastOne);
    }
  }
  return survivors + stack.length;
  //   after the loop, survivors will be updated
  //   and we also have survivors inside the stack
  //   hence, add them and return the result. Voila!
}
