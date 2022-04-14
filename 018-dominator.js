// Colidity No: 012 - Dominator

// An array A consisting of N integers is given.
// The dominator of array A is the value
// that occurs in more than half of the elements of A.

// So basically given the following array [3, 4, 3, 2, 3, -1, 3, 3]
// check if the 3 is occurred more than half then length of array
// if so return any index of 3, it could 0, 2, 4, 6 or 7

const solution = (A) => {
  // create same number count variable and nominee number
  let sameNumber = 0;
  let nominee = 0;
  //   create simple loop to go through all the number
  A.forEach((item) => {
    //  if there is no same number
    if (sameNumber === 0) {
      // grab anything to compare with the next, and add 1 to sameNumber
      nominee = item;
      sameNumber += 1;
      //   check if there is same value
    } else if (nominee === item) {
      sameNumber += 1;
      //  check if there is a value and it is not same
    } else {
      // decrease the sameNumber occurence
      sameNumber -= 1;
    }
  });
  //   now check if it's occurring more than half times of the length
  let occurence = 0;
  let index = 0;
  //   create simple loop to go through all the number again
  for (let i = 0; i < A.length; i++) {
    //   check if the current number is the nominee number
    if (A[i] === nominee) {
      // increase the occurence and grab the index which we need in the end
      occurence++;
      index = i;
    }
    // now check if the occurence higher than n / 2 then return the index. Voila!
  }
  return occurence > A.length / 2 ? index : -1;
};
