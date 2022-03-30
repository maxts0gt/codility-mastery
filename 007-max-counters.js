// Colidity No: 007 - Max Counter

// You are given N counters, initially set to 0,
// and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.

function solution(N, A) {
  // first create result array which we will return at the end
  let result = new Array(N).fill(0);
  // create start line variable
  let startLine = 0;
  // create current max variable
  let currentMax = 0;
  //  go through the array
  A.forEach((instruction) => {
    // instruction are from 1, hence minus -1
    let index = instruction - 1;
    // if instruction higher than array, update start line
    // meaning we need to move all of them with max
    if (instruction > N) startLine = currentMax;
    // if current number behind start line, then move it with startLine + 1
    else if (result[index] < startLine) result[index] = startLine + 1;
    // else just update numbers
    else result[index] += 1;
    // last check, instruction is smaller than array, current number is larger than max
    // then update current max with curre nt number. because we will need it to update the rest
    if (instruction <= N && result[index] > currentMax)
      currentMax = result[index];
  });
  //   after the loop we will need update rest of then numbers who are behind startline
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
    if (result[i] < startLine) result[i] = startLine;
  }
  //  and finally return the result. Voila!
  return result;
}

let N = 5;
let array = [3, 4, 4, 6, 1, 4, 4];

console.log(solution(N, array));
