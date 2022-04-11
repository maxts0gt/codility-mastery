// Colidity No: 009 - Disc Intersection
// For explanation: check out Codility's sorting lesson
// which is here:
// https://app.codility.com/programmers/lessons/6-sorting/

const solution = (A) => {
  // first we get the length of the array
  let length = A.length;
  // then we create array to store disc which is the x2 size of length
  let discHistory = new Array(length * 2);
  // create another value to populate discHistory
  let j = 0;
  // create simple loop to go through the array and populate history
  for (let i = 0; i < length; i++) {
    // create the start position
    discHistory[j++] = new DiscLog(i - A[i], 1);
    // create the end position
    discHistory[j++] = new DiscLog(i + A[i], -1);
  }
  // now sort the disc
  discHistory.sort(compare);
  // now let's actually count how many are intersected
  let intersections = 0;
  let activeIntersections = 0;
  // create loop to count intersections
  for (const currentDisc of discHistory) {
    // grab the current active of the intersection
    activeIntersections += currentDisc.startOrEnd;
    // check if it is higher than 0, then add to the intersections
    if (currentDisc.startOrEnd > 0) intersections += activeIntersections - 1;
    // if it is higher than 10m, then return -1
    if (intersections > 10000000) return -1;
  }
  // and finally return the intersections. Voila
  return intersections;
};

// create class where disc log is stored
class DiscLog {
  // it has two props
  constructor(x, startOrEnd) {
    // the variable as x
    this.x = x;
    // and whether it is start or end
    // if it is start "1" if not "-1"
    this.startOrEnd = startOrEnd;
  }
}

function compare(a, b) {
  // if the a.x and b.x is not equal, get the asc order
  // if they are same number, we get the same numbers on desc order or startEnd
  return a.x !== b.x ? a.x - b.x : b.startEnd - a.startEnd;
}
