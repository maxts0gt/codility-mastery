// Colidity No: 005

const solution = (X, A) => {
  // create position of array  with X+1
  const position = new Array(X + 1).fill(false)

  // create simple loop
  for (let i = 0; i < A.length; i++) {
    //   grab the current position
    let currentPosition = A[i]
    //   check that if the current position is "false"
    if (!position[currentPosition]) {
      // if it is false then change it to "true"
      position[currentPosition] = true
      // and decrease the counter "X"
      X -= 1
      //   when "X" is 0,
      if (X === 0) {
        // that means that we have enough leafs to cross the road
        // return the index or number of times
        return i
      }
    }
  }
  // else that means we didn't get the enough, we return -1. Voila!
  return -1
}
