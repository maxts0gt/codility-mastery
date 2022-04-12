// Colidity No: 010 - Brackets Problem

const solution = (S) => {
  // create array to store the initial brackets
  let stack = [];
  // create simple loop
  for (const bracket of S) {
    //   check if the bracket is equal to the following
    if (bracket === "{" || bracket === "(" || bracket === "[") {
      // if so push them to the array
      stack.push(bracket);
      // now if bracket is equal to the following
    } else if (bracket === "}") {
      // then check if the array is empty or it's not == other side
      // then return 0
      if (stack.length === 0 || stack.pop() !== "{") return 0;
      // do them same actions
    } else if (bracket === "]") {
      if (stack.length === 0 || stack.pop() !== "[") return 0;
    } else if (bracket === ")") {
      if (stack.length === 0 || stack.pop() !== "(") return 0;
    }
  }
  //   after the loop, check if the array is empty
  //   basically if it isn't empty then it's not valid
  //   Voila!
  return stack.length ? 0 : 1;
};
