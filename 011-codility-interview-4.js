function solution(N) {
  // get the maximum safe integer + 1
  let max = Number.MIN_SAFE_INTEGER + 1;
  //   convert the number to string
  let stringNumber = N.toString();
  //   create simple loop
  for (let i = 0; i < stringNumber.length; i++) {
    //   grab the current number
    let currentNumber = stringNumber[i];
    // if current number is 5
    if (currentNumber === "5") {
      // then create new string
      let newString =
        //   which is basically take out the 5and put them together
        stringNumber.substring(0, i) +
        stringNumber.substring(i + 1, stringNumber.length);
      // then check there is max and max is lower than the new created number
      if (!max || max < parseInt(newString)) {
        //   then update the max
        max = parseInt(newString);
      }
    }
  }
  //   and return the max. VOila!
  return max;
}

let N = 15958;
let N1 = -5000;
let N2 = -5859;

console.log(solution(N));
console.log(solution(N1));
console.log(solution(N2));
