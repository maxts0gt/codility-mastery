function solution(N) {
  // create variable called shape, this will be our output
  let shape = "";
  //   create simple loop
  for (let i = 0; i < N; i++) {
    //   create inside the loop
    for (let j = 0; j < N; j++) {
      // now here is where logic comes in
      //   if current index is equal to the size or if it is the first occurence
      //   in the second loop
      if (i === N - 1 || j === 0) {
        //  then add to the shape, basically this is creating our last line L shape
        shape += "L";
      } else {
        //   if it is not second, then add empty space
        shape += " ";
      }
    }
    // after the first loop finishes we will break the line
    // and on to the second loop
    shape += "\n";
    // and output the result. Voila!
  }
  console.log(shape);
}

solution(8);
