// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function moveZeroes(arr) {
  const result = [];
  let zeroCount = 0;

  // Collect all non zero elements and count zeroes

  for (const num of arr) {
    if (num !== 0) {
      result.push(num);
    } else {
      zeroCount++;
    }
  }

  // Append the zeroes at the end of the result array
  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }

  return result;
}

const arr = [0, 2, 0, 5, 7, 0, 1];

console.log(`Original array: [${arr}]`);

console.log(`Array after moving zeroes: [${moveZeroes(arr)}]`);
