function solution(A) {
  // check if whether input is valid
  if (A && A.length > 0) {
    // if so, create a set to record our visited numbers
    let visited = new Set();
    // create result variable where all variables are passed following if test
    let result = A.every((number) => {
      // if visited has number that is either minus or plus than the current one
      if (visited.has(number - 1) || visited.has(number + 1)) {
        //   then return false
        return false;
      }
      // if not add number to the set
      visited.add(number);
      // and return true
      return true;
    });
    // if empty then return false
    return !result;
  }
  //   else, meaning that it didn't pass then return false
  return false;
}

let array1 = [7];
let array2 = [4, 3];
let array3 = [11, 1, 8, 12, 14];
let array4 = [4, 10, 8, 5, 9];
let array5 = [5, 5, 5, 5, 5];

console.log(solution(array1));
console.log(solution(array2));
console.log(solution(array3));
console.log(solution(array4));
console.log(solution(array5));
