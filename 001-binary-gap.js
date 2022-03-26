// Colidity No: 001

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros
// that is surrounded by ones at both ends in the binary representation of N.

// N is an integer within the range [1..2,147,483,647].

const solution = (N) => {
  // turn integer to binary and then turn that binary to array
  const binary = N.toString(2).split('')
  // number like "72" will look like this: ["1","0","0","1","0","0","0"]
  // create variable for tracking current max value
  let currentMax = 0
  // create variable for tracking current gap length
  let gapLength = 0

  // create simple loop
  for (let i = 0; i < binary.length; i++) {
    // for readibility, let's create following variables
    const currentValue = binary[i]
    const nextValue = binary[i + 1]

    // logic is simple, in the first if statement we set the current max value,
    // and set or reset the counting system
    // when currentValue is 1 and next value is 0
    // also when current value is 0 and next value is 1
    if (
      (currentValue == 1 && nextValue == 0) ||
      (gapLength > 0 && currentValue == 0 && nextValue == 1)
    ) {
      // setting the current max
      currentMax = Math.max(currentMax, gapLength)
      // restarting the counting system
      gapLength = 1

      // and in second if statement, we count the length of gap
      // when gapLength is higher > 0 and currentValue is 0 and nextValue is 0
    } else if (gapLength > 0 && currentValue == 0 && nextValue == 0) {
      // counting the length of gap
      gapLength++
    }
  }
  // after the finished looping the array, we return the current max value
  // which we updated everytime when current or next value is "1". Voila!
  return currentMax
}
